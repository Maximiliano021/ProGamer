import {ItemDetail} from './ItemDetail'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import games from '../productos.json'

export const ItemDetailContainer = () =>{
    const [item, setItem] = useState({})
	const { id } = useParams()

	useEffect(() => {
		getItem().then(
			data => {
				if (data)
					setItem(data)
			}
		)
	}, [id])

	const getItem = () => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve( games.find(p => p.id == id) )
			}, 500)
		})
	}

	return (
		<div className='w-full'>
			<ItemDetail {...item}/>
		</div>
	)
}