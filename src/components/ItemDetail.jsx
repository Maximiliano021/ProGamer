import ItemCount from './ItemCount'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'


export const ItemDetail = ({ id, title, img, description, price, clip, platform, genre }) => {
	const { addItem, isInCart } = useContext(CartContext)
	
	const onAdd = (cantidad) => {
		const total = price * cantidad
		isInCart(id)
		addItem({ id, img, title, cantidad, price, total })
	}
	const style = {
		'opacity': '0.3',
		'position': 'absolute',
		'zIndex': '-1'
	}
	window.scrollTo(0, 0);
	
	return (
		<div className="w-full">
			<img className="w-5/6 hidden md:block shadow blur" src={img} style={style} />
			<div id="detail" className="w-full lg:w-5/6 mx-auto items-start grid gap-8 text-white lg:p-6" >
				<div className="w-full flex gap-10">
					<div className="2xl:w-7/12 text-start grid gap-8 w-full">
						<div className="grid gap-8 md:hidden">
							{
								isNaN(clip)? <video className="mx-auto cursor-pointer rounded-lg w-full" src={clip} controls muted autoPlay />
								: <img className="w-full h-30 rounded mx-auto mb-10" src={img} /> 
							}
						</div>
						<div className="flex gap-8 items-center">
							<label className="bg-white text-black w-40 rounded text-center self-center py-1">{genre}</label>
							<p>Tiempo promedio de: 72 horas</p>
						</div>
						<div className='flex justify-between items-center'>
							<h1 className="text-4xl lg:text-7xl">{title}</h1>
							<img className="w-16 h-16 rounded-full block lg:hidden" src={img} />	
						</div>
						<div className="flex gap-6 items-center">
							{
								isInCart(id)? <Link to={'/cart'} type="button" className="cursor-pointer bg-transparent text-white p-2 px-3 rounded-lg border hover:border-indigo-500/100 hover:text-white hover:transition ease-in-out">Terminar compra</Link> 
								: <Link to={'/cart'} type="button" onClick={()=>onAdd(1)} className="cursor-pointer bg-transparent text-white p-2 px-3 rounded-lg border hover:border-indigo-500/100 hover:text-white hover:transition ease-in-out">Compra rapida</Link>
							}
							<label htmlFor="my-modal-6" className="btn py-4 btn-primary">Comprar</label>
							<div className="text-sky-400/100">
								<label className="block">Precio: </label>
								<span className="text-white block text-2xl text-center align-center my-auto ">$  {price}</span>
							</div>
						</div>
						<div className="flex gap-8">
							<label className="text-3xl">Excepcional</label>
							<div className="block text-center">
								<label className="block text-3xl">#1</label>
								<label className="block text-gray-200">{genre}</label>
							</div>
							<div className="block text-center">
								<label className="block text-3xl">#1</label>
								<label className="block text-gray-200">Top</label>
							</div>
						</div>
						<div>
							<label className="text-2xl py-2 underline decoration-sky-500/30">Informacion</label>
							<p>{description}</p>
						</div>
					</div>
					<div className="w-6/12 items-center hidden xl:block">
							{
								isNaN(clip)? <video width="300" className="mx-auto mb-6 cursor-pointer rounded-lg" src={clip} controls muted autoPlay />
								: <img className="w-52 h-30 rounded mx-auto mb-10" src={img} /> 
							}						
						<div className="text-center align-center flex justify-around">
							<img className="w-40 h-30 rounded" src={img} />
							<img className="w-40 h-30 rounded" src={img} />
						</div>
					</div>
				</div>
				<div className="text-start items-start">
					<div className="">
						<label className="text-2xl py-2 underline decoration-sky-500/30">Plataformas</label>
						<p>{platform}</p>
					</div>
				</div>
			</div>

			<input type="checkbox" id="my-modal-6" className="modal-toggle" />
			
			<div className="modal top-1/4 inset-x-px md:top-0 modal-center p-0 sm:modal-middle">
				<div className="card card-side text-white bg-gradient-to-r from-blue-800 to-gray-500 shadow-xl">
					<figure><img className='hidden md:block w-80 h-full' src={img} alt="Movie" /></figure>
					<div className="card-body">
						<h2 className="card-title">Excente eleccion!</h2>
						<p>Desea agregar el juego al carrito de compras?</p>
						<p className="border-b-2 w-full"></p>
						<div>
							{
								isInCart(id) ?
									<Link to={'/cart'} className="btn btn-primary hover:text-white w-4/6 mx-auto">Ir a checkout</Link>
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