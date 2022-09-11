import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import games from '../productos'
import {ItemList} from './ItemList'

export const ItemFilterContainer = () =>{
    const [item, setItem] = useState([])
	const { genre } = useParams()

	useEffect(() => {
		getItem().then(
			data => {
				if (data)
					setItem(data)
			}
		)
	}, [genre])

	const getItem = () => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve( games.filter(p => p.genre == genre ) )
			}, 500)
		})
	}
	return (
		<div className='w-full'>
			<ItemList items={item}/>
		</div>
	)
}