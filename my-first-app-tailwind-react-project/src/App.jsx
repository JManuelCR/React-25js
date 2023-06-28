import { useState } from 'react'
import Header from './components/header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Header />
    <main className="bg-black box-border">
  <article className='text-white font-medium'>FULANITO</article>
</main>
   </>

  )
}

export default App
