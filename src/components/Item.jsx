import { Link } from 'react-router-dom'

export const Item = ({ id, title, thumbnail,developer, game_url, genre }) => {
    return (
        <div id={id} className="max-w-lg card">
            <div className="bg-zinc-700 rounded-lg max-w-sm p-4">
                <a className="w-full h-40 flex mx-auto">
                    <img className="rounded mx-auto" src={thumbnail} alt={title} />
                </a>
                <div className="p-2 text-slate-300">
                    <h5 className="font-bold text-2xl text-white tracking-tight h-20">{title}</h5>
                    <div className='text-start h-24'>
                        <p className="">Genero: {genre}</p>
                        <p className="">Desarrollado por: {developer}</p>
                    </div>
                    <Link to={`/ProGamer/shop/item/${id}`} className="text-white btn border-t-2 btn-primary hover:opacity-75 py-1 w-full hover:text-white font-medium rounded-lg text-sm px-3 text-center justify-center inline-flex items-center" >
                        Ver Mas
                    </Link>
                </div>
            </div>
        </div>
    )
}