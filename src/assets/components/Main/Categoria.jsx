const Categoria = () => {
    return (
        <div className="py-2 overflow-hidden px-2 bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="space-y-2 sm:space-y-0 sm:flex">
                <button className="px-5 py-1 text-sm font-bold text-red-800 transition-colors duration-200 hover:border-inherit transform bg-red-200  opacity-95 rounded-full border-inherit focus:outline-none lg:w-auto lg:mx-1 hover:bg-red-300">
                    Peliculas
                </button>
                <button className="px-5 py-1 text-sm font-bold text-black transition-colors duration-200 b hover:border-inherit transform bg-white opacity-95 rounded-full border-inherit focus:outline-none lg:w-auto lg:mx-1 hover:bg-gray-100">
                    Tv
                </button>
                <button className="px-5 py-1 text-sm font-bold text-black transition-colors duration-200  hover:border-inherit transform bg-white opacity-95 rounded-full border-inherit focus:outline-none lg:w-auto lg:mx-1 hover:bg-gray-100">
                    Familia
                </button>
                <button className="px-5 py-1 text-sm font-bold text-black transition-colors duration-200 hover:border-inherit transform bg-white opacity-95 rounded-full border-inherit focus:outline-none lg:w-auto lg:mx-1 hover:bg-gray-100">
                    Estudios
                </button>
                <button className="px-5 py-1 text-sm font-bold text-black transition-colors duration-200 hover:border-inherit transform bg-white opacity-95 rounded-full border-inherit focus:outline-none lg:w-auto lg:mx-1 hover:bg-gray-100">
                    Cadenas
                </button>
            </div>
        </div>
    )
}
export default Categoria