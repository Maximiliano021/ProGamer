import React, { useState } from 'react'
import { useEffect } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { ItemList } from '../components/ItemList'

export const ItemContainer = () => {
    const [games, setGames] = useState([])
    useEffect(() => {
        getGames()
    }, [])

    const getGames = () => {
        const db = getFirestore()
        const itemCollection = collection(db, 'items')
        getDocs(itemCollection).then(data => {
            setGames(data.docs.map(d => ( {id: d.id, ...d.data()} )));
        })
    }
    return (
        <div className='w-full'>
            <ItemList items={games} />
        </div>
    )
}