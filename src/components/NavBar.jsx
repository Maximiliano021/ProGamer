import logo from '../assets/logo.png'
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom'

export const NavBar = () => {
	return (
		<div className="block rounded-lg mx-auto mb-4">
			<div id="header" className="w-full flex justify-between p-2">
				<Link to={'/ProGamer/'} className="logo">
                    <img src={logo} className="w-36" />
                </Link>
				<div id="search" className="mx-auto hidden lg:block lg:w-1/4">
					<form className="w-full">
						<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
						<div className="relative">
							<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
							</div>
							<input type="search" id="default-search" className="block py-4 pl-10 w-full text-sm text-white bg-gray-500 rounded-lg border-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busque entre los productos..." required />
							<button type="submit" className="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-primary dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
						</div>
					</form>
				</div>

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
					<CartWidget />
				</div>
			</div>
		</div>
	)
}