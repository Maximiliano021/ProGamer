import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ItemDetailContainer } from './firebase/ItemDetailContainer'
import { ItemFilterContainer } from './firebase/ItemFilterContainer'
import { UserContext } from './context/UserContext'
import { Cart } from './components/Cart'
import { ItemContainer } from './firebase/ItemContainer'
import { Aside } from './components/Aside'

function App() {
	return (
		<div className="lg:p-6 p-1">
			<UserContext>
				<BrowserRouter>
					<NavBar />
					<div className="block sm:flex gap-4">
						<Aside/>
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