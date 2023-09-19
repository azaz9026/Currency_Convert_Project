import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './components/inputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 className='text-3xl bg-orange-500'> Currecny Convertor </h1>

      <InputBox/>

    </>
  )
}

export default App
