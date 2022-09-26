import { ItemDetail } from './ItemDetail'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export const ItemDetailContainer = () => {
	const [game, setGame] = useState({})
	const { id } = useParams()

	useEffect(() => {
		getItem()
	}, [id])

	const getItem = () => {
		const db = getFirestore()
		const getGame = doc(db, 'items', id)
		getDoc(getGame).then(res => {
			setGame(res.data())
		})
	}

	return (
		<div className='w-full'>
			<ItemDetail {...game} id={id} />
		</div>
	)
}