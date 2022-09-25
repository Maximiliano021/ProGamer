import React, { useState } from 'react'
import { useEffect } from 'react'
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import { Select } from '../components/Select';
import { ItemList } from '../components/ItemList'

export const ProductsContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        const db = getFirestore()
        const itemCollection = collection(db, 'items')
        getDocs(itemCollection).then(snapshot => {
            // queremos hacer un return de objeto implicito, va entre parentesis
            setProducts(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
        })
    }
    return (
        <div>
            {/* <Select /> */}
            <ItemList items={products} />
        </div>
    )
}