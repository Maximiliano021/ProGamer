import { Item } from './Item'
import { Loading } from './Loading'

export const ItemList = ({ items }) => {
	window.scrollTo(0, 0)
	let genres = items.map(dat=>dat.genre)

	return (
		<div className='block sm:flex'>
			
			<div>
				{
					genres.every(gen=>gen==genres[0])? <h2 className="font-bold text-center text-white text-5xl py-4 mb-6">Juegos de {genres[0]}</h2>
					: <h2 className="font-bold text-center text-white text-5xl py-4 mb-6">Lista total de Juegos</h2>
				}
				<div className="grid gap-10 grid-cols-1 px-6 md:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 x-auto">
					{items.length ? items.map(item => <Item key={item.id} {...item} />) : <Loading /> }
				</div>
			</div>
		</div>
	)
}