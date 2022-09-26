import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import { Aside } from './components/Aside'
import { ItemFilterContainer } from './components/ItemFilterContainer'
import { UserContext } from './context/UserContext'
import { Cart } from './components/Cart'
import { ItemContainer } from './firebase/ItemContainer'

function App() {
	return (
		<div className="p-4">
			<UserContext>
				<BrowserRouter>
					<NavBar />
					<div className="flex gap-4">
						<Aside />
						<Routes>
							<Route path="/" element={<ItemContainer />} />
							<Route path='/categ/:genre' element={<ItemFilterContainer />} />
							<Route path="/cart" element={<Cart />} />
							<Route path='/detail/:id' element={<ItemDetailContainer />} />
						</Routes>
					</div>
				</BrowserRouter>
			</UserContext>
		</div>
	)
}

export default App