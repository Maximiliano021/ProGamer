import {ItemDetail} from './ItemDetail'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

export const ItemDetailContainer = () =>{
    const [item, setItem] = useState({}) 
	const { id } = useParams()

	useEffect(() => {
		getItem()
	}, [id])

	const getItem = () => {
		    const db = getFirestore()
		    const gtaRef = doc(db, 'items', id)
		    getDoc(gtaRef).then(res => {
		        setItem(res.data())
		    })
		}
	return (
		<div className='w-full'>
			<ItemDetail {...item} id={id}/>
		</div>
	)
}