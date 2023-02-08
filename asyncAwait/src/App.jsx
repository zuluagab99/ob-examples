import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AsyncAwait from './components/pure/AsyncAwait'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AsyncAwait></AsyncAwait>
    </div>
  )
}

export default App
