import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'

function App() {
  const [count, setCount] = useState(0)
  let my = {
    nam : "Ashiq",
    age : 18,
    profession : "Software Engineer",
    company : "Jane Street"



  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'> TailWind </h1>
      <Card  flex="AshiQ" />
      <Card flex="Ahamed" btntext="ViewMe" />

      
    </>
  )
}

export default App
