import { useEffect, useState } from "react"
import { CartContext } from './CartContext'

const UserContext = ({ children }) => {
	const [games, setGames] = useState([]);

	const addItem = (item) => { setGames(prevState => prevState.concat(item)) };

	const removeItem = (itemId) => { let nuevo = games.filter(game => game.id != itemId); setGames(nuevo); };

	const totalPrice = () => {
		return games.reduce((prev, act) => prev + act.cant * act.price, 0)
	}

	const clear = () => setGames([])

	const isInCart = (id) => games.some(game => game.id == id)

	const addLocalStorage = () => {
		localStorage.setItem('games', JSON.stringify(games))
	}

	const totalProducts = () => {
		return games.reduce((acum, act) => acum + act.cant, 0)
	}

	useEffect(() => {
		setGames(prevState => prevState.concat(JSON.parse(localStorage.getItem('games')) || []))
	}, [])

	useEffect(() => {
		addLocalStorage()
	}, [games])


	const context = {
		totalPrice,
		addItem,
		removeItem,
		clear,
		isInCart,
		totalProducts,
		games,
	}

	return (
		<CartContext.Provider value={context}>
			{children}
		</CartContext.Provider>
	)
}

export { UserContext }