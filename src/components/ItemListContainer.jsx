//la que hace conexion a la base de datos
import { React, useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import productsJSON from '../productos'
import { Select } from './Select';

function ItemListContainer() {
	const [products, setProducts] = useState([]);

	const getData = (data, time) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				data ? resolve(data) : reject("error");
			}, time)
		});

	useEffect(() => {
		getData(productsJSON, 100)
			.then(res => setProducts(res))
			.catch(err => console.log(err, 'error'))
	}, [])


	return (
		<div className="w-full">
			<Select/>
			<ItemList items={products} />
		</div>
	)
}

export default ItemListContainer