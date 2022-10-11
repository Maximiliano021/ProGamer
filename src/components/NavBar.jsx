import logo from '../assets/logo.png'
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export const NavBar = () => {
	const { games } = useContext(CartContext)
	return (
		<nav className="block rounded-lg mx-auto">
			<div id="header" className="w-full flex justify-between p-2">
				<Link to={'/'} className="logo">
					<img src={logo} className="w-36" />
				</Link>

				<div id="user-cart" className="flex gap-4">
					<div className="dropdown dropdown-end">
						<label tabIndex="0" className="btn btn-ghost btn-circle avatar">
							<div className="w-10 rounded-full">
								<img src="https://tuquejasuma.com/media/cache/35/f1/35f153aaf09760554019eafbc8b7f426.jpg" />
							</div>
						</label>
						<ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
							<li>
								<a className="justify-between">
									Perfil
									<span className="badge">New</span>
								</a>
							</li>
							<li><a>Configuracion</a></li>
							<li><a>Salir</a></li>
						</ul>
					</div>
					{games.length ? <CartWidget /> : ''}
				</div>
			</div>
		</nav>
	)
}