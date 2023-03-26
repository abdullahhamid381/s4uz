import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CasinoStudio from './Components/CasinoStudio'
import Evolution from './Components/Evolution'
import Home from './Components/Home'
import S4ugaming3 from './Components/S4ugaming3'
import Sgaming2 from './Components/Sgaming2'
import Sgaming3 from './Components/Sgaming3'
import Sgaming9 from './Components/Sgaming9'
import './Scss/Home.scss'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/casinostudio' element={<CasinoStudio />} />
        <Route path='/sgaming3' element={<Sgaming3 />} />
        <Route path='/sgaming2' element={<Sgaming2 />} />
        <Route path='/sgaming9' element={<Sgaming9 />} />
        <Route path='/evolution' element={<Evolution />} />
        <Route path='/s4ugaming3' element={<S4ugaming3 />} />

      </Routes>



    </div>
  )
}

export default App