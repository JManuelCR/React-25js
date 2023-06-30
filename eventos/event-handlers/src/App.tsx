import { useState } from 'react'
import Button from './components/button'


function App() {
  const [contador, setContador] = useState(0)
  return (
    <>
      <p>{contador}</p>
      <button onClick={() => setContador(contador > 0 ? contador - 1 : contador )}>Decrementar</button>
      <button onClick={() => setContador(contador < 10 ? contador +1 : contador )}>Incrementar</button>
    </>
  )
}

export default App
