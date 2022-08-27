import logo from '../assets/logo6.png'
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <div className="block rounded-lg mx-auto mb-4">
            <div id="header" className="bg-primary w-full flex justify-between p-2">
                <div className="logo">
                    <img src={logo} className="w-36" />
                </div>
                <div id="search" class="mx-auto w-1/4">
                    <form class="w-full">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" class="block py-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-300 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busque entre los productos..." required />
                            <button type="submit" class="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </div>

                <div id="user-cart" className="flex gap-4">
                    <div className="dropdown dropdown-end">
                        <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://tuquejasuma.com/media/cache/35/f1/35f153aaf09760554019eafbc8b7f426.jpg" />
                            </div>
                        </label>
                        <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
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
            <div id="navbar" className="border flex w-full bg-gray-200 py-1">
                <div className="mx-auto">
                    <ul className="flex gap-10 w-60 text-white justify-center">
                        <li>
                            <a className="text-black" href="#">categoria</a>
                        </li>
                        <li>
                            <a className="text-black" href="#">categoria</a>
                        </li>
                        <li>
                            <a className="text-black" href="#">categoria</a>
                        </li>
                        <li>
                            <a className="text-black" href="#">categoria</a>
                        </li>
                        <li>
                            <a className="text-black" href="#">categoria</a>
                        </li>
                        <li>
                            <a className="text-black" href="#">categoria</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavBar;