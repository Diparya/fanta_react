import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar/>
      <Hero className=" mt-10"/>
      <Product/>
    </main>
  )
}

export default App
