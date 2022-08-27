import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App p-4">      
      <NavBar/>
      <ItemListContainer greeting={"Futura lista de items"}/>
    </div>
  )
}

export default App