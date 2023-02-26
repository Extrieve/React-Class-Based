import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ExampleComponent from './components/ExampleComponent'

function App() {
  return (
    <div className="App">
      <h1>Hello From Sample React Project</h1>
      <ExampleComponent increment={10}/>
    </div>
  )
}

export default App
