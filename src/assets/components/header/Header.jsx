const Header = () => {
    return (
        <nav className="bg-white dark:bg-gray-800 py-2 mb-4 px-6 sticky top-0 z-10 border-none">
            <div className="mx-auto flex justify-between text-gray-600 capitalize dark:text-gray-300">
                <div className="flex justify-center">
                    <div className="flex">
                        <i class='bx bxl-play-store bx-lg'></i>
                        <span className="flex items-center text-2xl px-2">Google Play</span>
                    </div>
                    <div className="lg:flex hidden justify-center">
                        <a href="#" className="text-sm py-4 font-black text-gray-800 border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200  mx-1.5 sm:mx-6">Juegos</a>
                        <a href="#" className="text-sm py-4 font-black text-gray-800 border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200  mx-1.5 sm:mx-6">Apps</a>
                        <a href="#" className="text-sm py-4 font-black text-red-500 hover:text-red-500 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-red-600 mx-1.5 sm:mx-6">Peliculas y programas</a>
                        <a href="#" className="text-sm py-4 font-black text-gray-800 border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200  mx-1.5 sm:mx-6">Libros</a>
                        <a href="#" className="text-sm py-4 font-black text-gray-800 border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200  mx-1.5 sm:mx-6">Infantiles</a>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <a href="./" type="button" className="p-1 flex items-center " aria-label="toggle profile dropdown">
                        <i class='bx bx-search bx-xs' ></i>
                    </a>
                    <a href="./" type="button" className="p-1 flex items-center " aria-label="toggle profile dropdown">
                        <i class='bx bx-question-mark' ></i>
                    </a>
                    <div className="avatar">
                        <div className="w-8 rounded-full">
                            <img src="https://pbs.twimg.com/profile_images/1465705281279590405/1yiTdkKj_400x400.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex lg:hidden justify-between">
                <a href="#" className="text-sm py-4 font-black text-gray-800 border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200  mx-1.5 sm:mx-6">Juegos</a>
                <a href="#" className="text-sm py-4 font-black text-gray-800 border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200  mx-1.5 sm:mx-6">Apps</a>
                <a href="#" className="text-sm py-4 font-black text-red-500 hover:text-red-500 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-red-600 mx-1.5 sm:mx-6">Peliculas y programas</a>
                <a href="#" className="text-sm py-4 font-black text-gray-800 border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200  mx-1.5 sm:mx-6">Libros</a>
                <a href="#" className="text-sm py-4 font-black text-gray-800 border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200  mx-1.5 sm:mx-6">Infantiles</a>
            </div>
        </nav>
    )
}
export default Header;