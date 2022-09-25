import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'


export const ItemFilterContainer = () => {
	const [item, setItem] = useState([])
	const [filter,setFilter] = useState([])
	const { genre } = useParams()

	useEffect(() => {
		getProducts(),
		getItem()
	}, [genre])

	const getProducts = () => {
		const db = getFirestore()
		const itemCollection = collection(db, 'items')
		getDocs(itemCollection).then(snapshot => {
			// queremos hacer un return de objeto implicito, va entre parentesis
			setItem(snapshot.docs.map(d => ( { id: d.id, ...d.data() } )));
		})
	}

	const getItem = () => {
		const db = getFirestore()
		const gtaRef = doc(db, 'categories', genre)
		getDoc(gtaRef).then(res => {
			setFilter(res.data())
		})
	}
	let nombreGenre =  filter.name;
	let filtrado = item.filter(d=> d.genre == nombreGenre)
	
	return (
		<div className='w-full'>
			<ItemList items={filtrado} />
		</div>
	)
}