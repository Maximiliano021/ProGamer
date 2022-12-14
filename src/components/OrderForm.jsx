import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Swal from "sweetalert2"

export const OrderForm = () => {
    const { games, clear } = useContext(CartContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState(0)
    let total = 0
    games.map(game => total += game.total)


    const handleSubmit = (e) => {
        e.preventDefault()
        let verfNumber = /^[-+]?[0-9]+$/
        let verfEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

        if (!email.match(verfEmail))
            return Swal.fire({
                title: 'Error Email!',
                text: 'Error en el email',
                icon: 'error'
            })

        if (!number.match(verfNumber))
            return Swal.fire({
                title: 'Error Numero!',
                text: 'Error en el tipo de numero telefonico',
                icon: 'error'
            })
        
        sendOrder()
    }

    const viewConfirmation = (id) => {
        return Swal.fire({
            title: 'Felicitaciones!',
            text: 'Tome nota de su pedido:\n ' + id,
            icon: 'success'
        })
    }

    const sendOrder = () => {
        const order = {
            buyer: { name: name, email: email, phone: number },
            items: games,
            total: total
        }
        const ordersCollection = collection(getFirestore(), "orders");
        addDoc(ordersCollection, order)
            .then(({ id }) => { viewConfirmation(id).then(() => { window.location.href = '/'; clear() }) })
    }


    return (
        <form onSubmit={handleSubmit} id="form" className="grid gap-6 text-black bg-gray-300 p-6 rounded-lg">
            <h1 className="text-4xl mb-4">Informacion personal de compra</h1>
            <div className="form-group">
                <input type="text" onChange={e => setName(e.target.value)} required className="form-control text-center block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" placeholder="Nombre" />
            </div>
            <div className="form-group">
                <input type="email" onChange={e => setEmail(e.target.value)} required className="form-control text-center block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" placeholder="Email" />
            </div>
            <div className="form-group">
                <input type="text" onChange={e => setNumber(e.target.value)} required className="form-control text-center block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="phone" placeholder="Telefono" />
            </div>

            <button type="submit" className="btn btn-primary bg-primary">Enviar pedido</button>
        </form>
    )
}