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
            {
                !games.length? <h1 className="text-white mb-10 text-3xl">No tienes nada agregado para hacer una compra</h1>
                : <div>
                    <h1 className="text-white mb-10 text-3xl">Todos los productos que estan en carrito</h1>
                    <div className="px-4 mx-auto">
                        <Link to={'/'} className="btn btn-primary text-white flex">Ir al menu principal</Link>
                        <div className="2xl:flex block mt-10 grid xl:gap-4 gap-10">
                            <section className="text-white mx-auto w-full bg-gradient-to- 2xl:w-3/5 rounded-lg grid gap-4">
                                {games.map(game =>
                                    <article className="flex justify-between w-full xl:w-4/5 md:w-full text-white bg-zinc-900 rounded-lg gap-1 m-auto" key={game.id}>
                                        <Link to={`/detail/${game.id}`} className="w-44 items-center flex p-1">
                                            <img className="rounded h-32 rounded hover:border-indigo-500/100 hover:border hover:transition transition ease-in-out" src={game.img} />
                                        </Link>
                                        <div className="w-full gap-10 grid flex-col items-center content-center">
                                            <p className="md:text-center text-start md:text-3xl sm:text-xl text-lg font-bold">{game.title}</p>
                                            <div className='block text-start md:flex justify-between grid gap-2 pb-2'>
                                                <p className="text-white md:text-xl sm:text-lg text-sm">Cantidad: {game.cant}</p>
                                                <p className='text-white md:text-xl sm:text-lg text-sm font-bold'>Precio:  ${game.cant * game.price} </p>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" id={game.id} onClick={removeHandler}>x</button>
                                    </article>
                                )}
                            </section>
                            <div className="block shadow-lg max-w-full mx-auto">
                                <OrderForm/>
                            </div>
                        </div>
                    </div>
                </div>
            }
            

        </div>
    )
}