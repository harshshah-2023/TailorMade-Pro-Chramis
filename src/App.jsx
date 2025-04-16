import { useState } from 'react'
import HomePage from './Pages/Home'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full min-h-screen ">
       <Navbar/>
      <HomePage />
      <Footer/>
     
    </div>
  )
}

export default App
