const Card = (direccion) => {
    return (
        <a className="snap-start scroll-mx-6 shrink-0">
            <div href="./" className="carousel-item  duration-100 flex justify-start w-52 hover:bg-gray-200 rounded">
                <div className="block p-3 w-full justify-start">
                    <img className="h-72 w-full rounded drop-shadow-lg" src={direccion.src} alt="Pizza" />
                    <div className="block pt-4">
                        <span className='flex text-start'>Elvis</span>
                        <div className="flex text-sm">
                            <div className="flex calificacion py-1">
                                <span className="puntaje">4.7</span>
                                <i className='bx bxs-star'></i>
                            </div>
                            <div className="items-center flex mx-2 ">
                                <span className="text-inherit text-center text-blue-500">$12.55</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}
export default Card;