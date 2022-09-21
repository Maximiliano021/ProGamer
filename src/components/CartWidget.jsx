import { useContext } from 'react'
import { CartContext } from "../context/CartContext"

function CartWidget() {
	const { games, removeItem, clear } = useContext(CartContext)

	const addHandler = (e) => {
		removeItem(e.target.id)
	}

	return (
		<div className="dropdown dropdown-end">
			<label tabIndex={0} className="btn btn-ghost btn-circle">
				<div className="indicator">
					<i className='bx bxs-cart bx-sm text-white'></i>
					<span className="badge badge-sm bg-primary indicator-item">{games.length}</span>
				</div>
			</label>
			<div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 dark:bg-base-100 shadow">
				<div className="card-body p-1">
					{games.map((game) =>
						<div className="flex justify-between w-full mb-4" key={game.id}>
							<img className="w-10 bg-contain" src={game.thumbnail} />
							<div className="w-9/12 content-between grid">
								<div className="text-xs">{game.title}</div>
								<p className="text-black">{game.cantidad}</p>
							</div>
							<button className="btn btn-primary p-1 h-1" id={game.id} onClick={addHandler} >x</button>
						</div>)
					}
					<div className="card-actions">
						<button onClick={clear} className="btn btn-primary btn-block outline-none">Borrar todo</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartWidget