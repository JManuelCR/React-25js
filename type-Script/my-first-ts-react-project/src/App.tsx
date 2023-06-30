import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { koders } from './data/koders'
import KoderCard from './components/KoderCard'

function App() {
  return (
    <>
      <main>
        {
          koders.map((koder, index) => {
            return (
            <KoderCard 
            key = {`koder-${index}`} 
            firstName={koder.firstName} 
            lastName={koder.lastName} 
            email={koder.email} 
            isActive={koder.isActive} 
            />)
          })
        }
      </main>
    </>
  )
}

export default App
