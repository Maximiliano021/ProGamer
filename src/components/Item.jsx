import { Link } from 'react-router-dom'
import Xbox from '../assets/Xbox.svg'
import PlayStation from '../assets/PlayStation.svg'


export const Item = ({ id, title, thumbnail,developer, genre }) => {
    return (
        <div id={id} className="card bg-zinc-900 bg-gray-50 hover:bg-none">
            <Link to={`/ProGamer/shop/item/${id}`} className="mx-auto">
                <img className="rounded-t mx-auto w-full" src={thumbnail} alt={title} />
            </Link>
            <div className="text-start py-2 p-2 grid gap-2">
                <div className='flex gap-4'>
                    <img src={Xbox} alt="" className='w-5'/>
                    <img src={PlayStation} alt="" className='w-5'/>
                </div>
                <p className="text-xl text-white">{title}</p>
                <div className='text-start text-gray-400 flex items-center gap-4 justify-between'>
                    <p className="text-xs">Desarrollado por: {developer}</p>
                    <Link to={`/ProGamer/shop/item/${id}`} className="text-white btn border-t-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-75 hover:text-white font-medium rounded-lg text-xs p-1 text-center justify-center inline-flex items-center" >
                    Ver Mas
                    </Link>
                </div>
            </div>
        </div>
    )
}