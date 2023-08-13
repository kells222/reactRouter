
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Blue from './components/Blue'
import Red from './components/Red'
import Home from './components/Home'

function App() {


  return (
    <>
    <div id="container">
      <h1></h1>
    <div id="navbar">
      <Link to={'/'}>Home</Link>
      <Link to={'/red'}>Red</Link>
      <Link to={'/blue'}>Blue</Link>
    </div>
    <div id="main-section">
      <Routes>
        <Route path='/red' element={<Red/>}/>
        <Route path='/blue' element={<Blue/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
    </div>
      
    </>
  )
}

export default App
