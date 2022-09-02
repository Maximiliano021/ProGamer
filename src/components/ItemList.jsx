import {Item} from './Item'
import {Loading} from './Loading'

export const ItemList = ({items}) =>{
	return(
		<div className="flex flex-wrap p-4">
				<div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto p-2">
				{items.length? items.map(item=> <Item key={item.id} {...item}/>): <Loading/>}
			</div>
		</div>
	)
}