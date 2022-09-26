import { Link } from 'react-router-dom'
import Xbox from '../assets/Xbox.svg'
import PlayStation from '../assets/PlayStation.svg'

export const Item = ({ id, title, img }) => {
	return (
		<Link to={`/detail/${id}`} id={id} className="cardItem rounded bg-zinc-900 hover:bg-none">
			<img className="rounded-lg mx-auto w-full h-36" src={img} alt={title} />
			<div className="text-start py-2 p-2 grid gap-2">
				<div className='flex gap-4'>
					<img src={Xbox} alt="" className='w-5' />
					<img src={PlayStation} alt="" className='w-5' />
				</div>
				<div className='text-start text-gray-400 flex items-center gap-4 justify-between'>
					<p className="text-lg text-white">{title}</p>
					<button className="btn bg-gray-300 hover:bg-gray-500 text-black hover:text-white text-xs" >
						Ver
					</button>
				</div>
			</div>
		</Link>
	)
}