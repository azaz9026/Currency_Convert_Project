import { useState } from 'react'
import './App.css'
import InputBox from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {
  const [ amount, setAmount ] = useState(0)
  const [ from , setFrom ] = useState('usd')
  const [ to , setTo ] = useState("inr")
  const [ convertedAmount , setConvertedAmount ] = useState(0)

  const currencyInfo = useCurrencyinfo(from)

  const options = object.keys(currencyInfo)
   return (
    <>
      <h1 className='text-3xl bg-orange-500'> Currecny Convertor </h1>

      <InputBox/>

    </>
  )
}

export default App
