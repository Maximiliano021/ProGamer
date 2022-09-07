//la que hace conexion a la base de datos
import { React, useState, useEffect } from 'react'
import { ItemList } from './ItemList'
import productsJSON from '../productos.json'


function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const getData = (data, time) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				data ? resolve(data) : reject("error");
			}, time)
		});

	useEffect(() => {
		getData(productsJSON, 500)
			.then(res => setProducts(res))
			.catch(err => console.log(err, 'error che'))
	}, [])

	
	return (
		<div>
			<ItemList items={products} />
		</div>
	)
}

export default ItemListContainer