import React from 'react'
import Products from '../components/MVP/Products'
import Simulator from '../components/Simulation/Simulator'
import PL from '../components/Simulation/PL'
import PI from '../components/Simulation/PI'

function Simulation() {
  return (
    <div className=''>
      <div className='text-white text-center text-4xl font-semibold'>Simulator</div>
      <div className='py-10 items-center grid md:grid-cols-4 grid-cols-1'>
        <PI />
        <PL />
      </div>
      <div className='grid grid-cols-1'>
        <Simulator />
      </div>
    </div>
  )
}

export default Simulation
