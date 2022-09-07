import './App.css'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import {ItemDetailContainer} from './components/ItemDetailContainer'
import { Aside } from './components/Aside'


function App() {
	
  return (
    <div className="p-4">      
      <BrowserRouter>
          <NavBar/>
          <div className="flex gap-4">
            <Aside/> 
            <Routes>
              <Route path="/ProGamer/" element={ <ItemListContainer/> } />
              <Route path='/ProGamer/shop/item/:id' element={<ItemDetailContainer/>}/>
            </Routes>
          </div>      
      </BrowserRouter>   
		</div>
  )
}

export default App