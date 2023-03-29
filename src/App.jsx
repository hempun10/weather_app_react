import { useState } from 'react'
import WeatherCard from './components/WeatherCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WeatherCard/>
    </>
  )
}

export default App
