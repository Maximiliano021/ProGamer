import {Item} from './Item'
import {Loading} from './Loading'
import {Aside} from './Aside'

export const ItemList = ({items}) =>{
	return(
		<div className="ml-2 p-2">
				<h2 className="text-start text-white text-7xl py-4">LISTA DE JUEGOS</h2>
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
					{items.length? items.map(item=> <Item key={item.id} {...item}/>): <Loading/>}
				</div>
		</div>	
	)
}