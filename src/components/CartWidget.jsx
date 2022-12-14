import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from "../context/CartContext"

export const CartWidget = () => {
	const { games, removeItem, clear, totalProducts } = useContext(CartContext)

	const removeHandler = (e) => {
		removeItem(e.target.id)
	}

	return (
		<div className="dropdown dropdown-end">
			<label tabIndex={0} className="btn btn-ghost btn-circle">
				<div className="indicator">
					<i className='bx bxs-cart bx-sm text-white'></i>
					<span className="badge badge-sm bg-primary indicator-item">{totalProducts() || ''}</span>
				</div>
			</label>
			<div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-slate-800 shadow">
				<div className="card-body p-1">
					{games.length ? games.map(game =>
						<div className="flex justify-between w-full mb-4 items-center" key={game.id}>
							<img className="mx-auto w-28 bg-contain rounded" src={game.img} />
							<button className="btn btn-primary p-1 h-1" id={game.id} onClick={removeHandler} >x</button>
						</div>) : <p>No hay juegos agregados</p>
					}
					<div className="card-actions">
						<button onClick={clear} className="btn btn-primary btn-block outline-none">Borrar todos</button>
						<Link to={'/cart'} className="btn btn-primary btn-block outline-none hover:text-white">Terminar compra</Link>
					</div>
				</div>
			</div>
		</div>
	)
}