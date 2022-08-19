import './App.css'
import Footer from './assets/components/footer/Footer'
import Header from './assets/components/header/Header'
import Main from './assets/components/Main/Main'


function App() {

  return (
    <div className="App">      
      <Header/>
      <div className='sm:w-full lg:[width:80rem] mx-auto'>
        <Main/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
