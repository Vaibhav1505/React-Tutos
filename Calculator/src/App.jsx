import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayTable from './components/InputDisplay'
import CalculatorButton from './components/Calculator-Button'
import CounterButton from './components/ItemCountButton'

function App() {


  return (
    <div className="calculator">
      <DisplayTable />
      <CalculatorButton />
      <CounterButton />
    </div>
  )//display flex css calci
}

export default App
