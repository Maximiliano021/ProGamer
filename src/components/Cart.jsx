import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { OrderForm } from "./OrderForm"

export const Cart = () => {
    const { games, removeItem } = useContext(CartContext)
    const removeHandler = (e) => {
        removeItem(e.target.id)
    }

    return (
        <div className="w-full">
            <h1 className="text-white mb-10">Todos los productos que estan en carrito</h1>
            <div className="w-5/6 mx-auto">
                <Link to={'/'} className="btn btn-primary text-white flex">Ir al menu principal</Link>
                <div className="2xl:flex mt-10 gap-2">
                    <section className=" text-white bg-gradient-to-r from-blue-800 to-gray-500 rounded-lg grid gap-10 p-2">
                        {games.map(game =>
                            <article className="flex justify-between w-4/5 p-4 text-white bg-gray-700 rounded-lg gap-10 m-auto" key={game.id}>
                                <img className="w-1/6 rounded bg-contain" src={game.img} />
                                <div className="w-9/12 gap-10 grid flex-col items-center content-center">
                                    <p className="text-center text-4xl font-bold">{game.title}</p>
                                    <div className='flex justify-between'>
                                        <p className="text-white text-xl">Cantidad de: {game.cantidad}</p>
                                        <p className='text-white text-xl'>Precio de: $ {game.cantidad * game.price} </p>
                                    </div>
                                </div>
                                <button className="btn btn-primary h-6" id={game.id} onClick={removeHandler}>x</button>
                            </article>
                        )}
                    </section>
                    <div className="block p-6 rounded-lg shadow-lg bg-gray-300 max-w-full mx-auto">
                        <OrderForm/>
                    </div>
                </div>
            </div>

        </div>
    )
}