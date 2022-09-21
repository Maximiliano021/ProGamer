import React, { useState } from 'react'
import { useEffect } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'

export const ProductsCard = ({ title,img }) => {
    return (
        <div>
            <li>{title}</li>
            <img src={img} className='w-60' />
        </div>
    )
}

export const ProductsContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        // getGta()
        getProducts()
    }, [])

    //solo un producto
    // const getGta = () => {
    //     const db = getFirestore()
    //     const gtaRef = doc(db, 'items', 'dAzdM3o7fXdii4lmotWt')
    //     getDoc(gtaRef).then(res => {
    //         console.log(res.data())
    //         setProducts(res.data())
    //     })
    // }

    const getProducts = () =>{
        const db = getFirestore()
        const itemCollection = collection(db, 'items')
        getDocs( itemCollection ).then( snapshot =>{
            // queremos hacer un return de objeto implico, va entre parentesis
            setProducts(snapshot.docs.map(d =>({id: d.id, ...d.data()}) ) );
        } )
    }

    return (
        <div>
           {/* <ProductsCard {...products}/> */}
           {products.map(prod=><ProductsCard key={prod.id} {...prod} />)}
        </div>
    )
}