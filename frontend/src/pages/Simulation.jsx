import React from 'react'
import Products from '../components/Simulation/Products'
import Simulator from '../components/Simulation/Simulator'
import PL from '../components/Simulation/PL'

function Simulation() {
  return (
    <div className=''>
      <div className='grid grid-cols-1'>
        <Products />
      </div>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <Simulator />
        <PL />
      </div>
    </div>
  )
}

export default Simulation
