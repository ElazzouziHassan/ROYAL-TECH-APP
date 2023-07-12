
import './App.css'
import { Footer } from './components/footer/footer'
import { Main } from './components/main/main'
import { NavBar } from './components/nav-bar/nav-bar'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Main />
      <Footer/>
    </div>
  )
}

export default App
