import ItemCount from './ItemCount'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const ItemDetail = ({ id, title, img, description, release_date, price, clip }) => {
	const style = {
		'opacity': '0.3',
		'position': 'absolute',
		'marginLeft': '6rem',
		'zIndex': '-1'
	}
	const { addItem, isInCart } = useContext(CartContext)
	const onAdd = (cantidad) => {
		isInCart(id)
		addItem({ id, img, title, cantidad, price })
	}
	
	window.scrollTo(0, 0);

	return (
		<div className="w-full">
			<img className="w-4/6 shadow blur" src={img} style={style} />
			<div id="detail" className="w-full lg:w-5/6 mx-auto items-start grid gap-8 text-white p-6" >
				<div className="w-full flex gap-10">
					<div className="2xl:w-7/12 text-start grid gap-8 w-full">
						<div className="flex gap-8">
							<label className="bg-white text-black w-40 rounded text-center self-center">{release_date}</label>
							<p>Tiempo promedio de: 72 horas</p>
						</div>
						<h1 className="text-4xl lg:text-7xl">{title}</h1>
						<div className="flex gap-6 items-center">
							<button type="button" className="border-gray-500 cursor-pointer bg-transparent text-white py-4">Agregar a deseados</button>
							<label htmlFor="my-modal-6" className="btn py-4 btn-primary">Comprar</label>
							<div className="">
								<label className="block">Precio:</label>
								<span className="text-white block text-2xl text-center align-center my-auto">${price}</span>
							</div>
						</div>
						<div className="flex gap-8">
							<label className="text-3xl">Excepcional</label>
							<div className="block text-center">
								<label className="block text-3xl">#1</label>
								<label className="block text-gray-200">Action</label>
							</div>
							<div className="block text-center">
								<label className="block text-3xl">#1</label>
								<label className="block text-gray-200">Top 2013</label>
							</div>
						</div>
						<div>
							<label className="text-2xl">About</label>
							<p>{description}</p>
						</div>
					</div>
					<div className="w-5/12 items-center align-center hidden 2xl:block">
						<video width="400" className="mx-auto mb-6 cursor-pointer rounded-lg" src={clip} controls muted autoPlay />
						{/* <iframe className='w-400' src={clip} frameborder="0" allow="autoplay" allowfullscreen></iframe> */}
						<div className="text-center items-center align-center flex">
							<div className="flex mx-auto gap-8">
								<img className="w-40 rounded" src={img} />
								<img className="w-40 rounded" src={img} />
							</div>
						</div>
					</div>
				</div>
				<div className="text-start items-start">
					<div className="">
						<label className="text-gray-500">Plataforms</label>
						<p>PC</p>
					</div>
				</div>
			</div>

			<input type="checkbox" id="my-modal-6" className="modal-toggle" />

			<div className="modal top-1/4 md:top-0 modal-center p-0 sm:modal-middle">
				<div className="card card-side text-white bg-gradient-to-r from-blue-200 to-black shadow-xl">
					<figure><img className='hidden md:block w-80' src={img} alt="Movie" /></figure>
					<div className="card-body">
						<h2 className="card-title">Excente eleccion!</h2>
						<p>Desea agregar el juego al carrito de compras?</p>
						<p className="border-b-2 w-full"></p>
						<div>
							{
								isInCart(id) ?
									<Link to={'/ProGamer/cart'} className="btn btn-primary hover:text-white w-4/6 mx-auto">Ir a checkout</Link>
									: <ItemCount stock="6" initial="1" price={price} onAdd={onAdd} />
							}
						</div>
					</div>
					<label htmlFor="my-modal-6" className="btn text-white absolute right-0 sm:flex">Salir!</label>
				</div>
			</div>
		</div>
	)
}