import { useState } from "react"
import { CartContext } from './CartContext'

const UserContext =  ({ children }) => {
	const [games, setGames] = useState([]);
	const addItem = (item) => setGames(prevState => prevState.concat(item));
	const removeItem = (itemId) => {let nuevo = games.filter(game=>game.id!=itemId); setGames(nuevo);};
	const clear = () => setGames([]) 
	const isInCart = (id) => games.some(game=>game.id == id)

	const context = {
		games,
		addItem,
		removeItem,
		clear,
		isInCart
	}

	return (
		<CartContext.Provider value={context}>
			{children}
		</CartContext.Provider>
	)
}

export { UserContext }