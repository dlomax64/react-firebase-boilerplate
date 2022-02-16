// Modules
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// pages
import Home from './pages/Home'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </div>
  )
}

export default App
