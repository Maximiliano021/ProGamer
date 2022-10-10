import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

export const Aside = () => {
	const { games } = useContext(CartContext)
	const [generos, setGeneros] = useState([])

	useEffect(() => {
		getItem()
	}, [])

	const getItem = () => {
		const db = getFirestore()
		const getCtg = collection(db, 'categories')
		getDocs(getCtg).then(res => {
			setGeneros(res.docs.map(d => ({
				...d.data(),
				id: d.id
			}))
			)
		})
	}

	return (
		<aside className="block w-full sm:w-60 lg:py-4 md:block" aria-label="Sidebar">
			<div className="px-3 py-4 overflow-y-auto sticky text-white rounded">
				<ul className="w-full sm:w-auto items-center flex sm:block gap-4 sm:gap-0">
					<li className="border-violet-300 border sm:border-none p-1 rounded-full">
						<Link to={'/'}
							className="flex items-center p-2 text-base font-normal text-gray-900 rounded-full  hover:bg-gray-700">
							<svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
								</path>
							</svg>
							<span className="flex-1 ml-3 whitespace-nowrap text-white text-start">Todos</span>
							<span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium bg-gray-200 rounded-full text-dark">Pro</span>
						</Link>
					</li>
					{
						generos.map(gnro =>
							<li key={gnro.id} className="border-violet-300 border sm:border-none p-1 rounded-full">
								<Link className="flex items-center p-2 text-base rounded-full font-normal text-gray-900 rounded-full dark:text-white hover:bg-gray-700" to={`/categ/${gnro.name}`}>
									<svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
										fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
										<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
									</svg>
									<span className="ml-3 text-white">{gnro.name}</span>
								</Link>
							</li>
						)
					}
					<li className="border-violet-300 border sm:border-none p-1 rounded-full">
						<div target="_blank"
							className="flex items-center p-2 text-base font-normal text-gray-900 rounded-full dark:text-white hover:bg-gray-700">
							<svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
								fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
								</path>
								<path
									d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
								</path>
							</svg>
							<span className="flex-1 ml-3 whitespace-nowrap text-white text-start">Carrito</span>
							<span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">{games.length}</span>
						</div>
					</li>
					
				</ul>
			</div>
		</aside>
	)
}