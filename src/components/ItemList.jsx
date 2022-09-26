import { Item } from './Item'
import { Loading } from './Loading'

export const ItemList = ({ items }) => {
	window.scrollTo(0, 0)
	
	return (
		<div>
			<h2 className="text-center text-white text-5xl py-4">LISTA DE JUEGOS</h2>
			<div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mx-auto">
				{items.length ? items.map(item => <Item key={item.id} {...item} />) : <Loading /> }
			</div>
		</div>
	)
}