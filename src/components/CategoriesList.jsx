import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const CategoriesList = () => {
    const [generos, setGeneros] = useState([])
    useEffect(() => {
        getItem()
    }, [])
    

    const getItem = () => {
        const db = getFirestore()
        const getCtg = collection(db, 'categories')
        getDocs(getCtg).then(res => {
            setGeneros(res.docs.map(d=>({ 
                ...d.data(),
                id:d.id
            })) 
            )
        })
    }

    console.log(generos)
    return (
        <div className="border-t my-4">
            <label>Categorias</label>
            <ul className="text-start">
                {
                    generos.map(gnro =>
                        <li className="my-2" key={gnro.id}>
                            <Link className="flex-1 ml-3  whitespace-nowrap text-white text-start" to={`/ProGamer/categ/${gnro.id}`}>{gnro.name}</Link>
                        </li>
                        )
                }
            </ul>
        </div>
    )
}
