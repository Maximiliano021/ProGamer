import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
	let [cant, setCant] = useState(initial)

	const handlerDecrease = () => {
		setCant(cant - 1);
	}
	const handlerIncrease = () => {
		setCant(cant+1)
	}

	return (
		<div className="card-actions justify-between items-center">
			<div className="flex flex-row h-6 w-28 rounded-lg relative bg-gray-300">
				<button disabled={cant <= 1} data-action="decrement" className="my-auto flex items-center p-1 border bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-5 rounded outline-none" onClick={handlerDecrease}>
					-
				</button>
				<span className="outline-none focus:outline-none justify-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700">{cant}</span>
				<button disabled={cant >= stock} data-action="increment" className="my-auto items-center flex p-1 border bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-5 rounded cursor-pointer outline-none" onClick={handlerIncrease}>
					+
				</button>
			</div>
			<button onClick={() => onAdd(cant)} id="buy" htmlFor="my-modal-6" className="btn btn-primary">Si agregar</button>
		</div>
	)
}

export default ItemCount