import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

export const Cart = () => {
    const { games, removeItem } = useContext(CartContext)
    const addHandler = (e) => {
        removeItem(e.target.id)
    }
    return (
        <div className="w-full">
            <h1 className="text-white mb-10">Todos los productos que estan en carrito</h1>
            <div className="w-5/6 mx-auto">
                <Link to={'/ProGamer/'} className="btn btn-primary text-white flex">Ir al menu principal</Link>
                <section className="my-10">
                    {games.map(game =>
                        <article className="flex justify-between w-full py-6 text-white border-b-2" key={game.id}>
                            <img className="w-60 bg-contain" src={game.img} />
                            <div className="w-9/12 content-between grid">
                                <p className="text-center text-2xl font-bold">{game.title}</p>
                                <div className='border flex justify-between'>
                                    <p className="border text-white">{game.cantidad}</p>
                                    <p className='border text-white'>$ {game.cantidad*game.price} </p>
                                </div>
                            </div>
                            <button className="btn btn-primary h-6" id={game.id} onClick={addHandler}>x</button>
                        </article>
                    )}
                </section>
            </div>

        </div>
    )
}