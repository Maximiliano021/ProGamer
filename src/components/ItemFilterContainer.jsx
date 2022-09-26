import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

export const ItemFilterContainer = () => {
	const [game, setGame] = useState([])
	const { genre } = useParams()

	useEffect(() => {
		getGames()
	}, [genre])

	const getGames = () => {
		const db = getFirestore()
		const itemCollection = query(collection(db, 'items'), where("genre", "==", genre))
		getDocs(itemCollection).then(data => {
			setGame(data.docs.map(d => ({ id: d.id, ...d.data() })));
		})
	}

	return (
		<div className='w-full'>
			<ItemList items={game} />
		</div>
	)
}