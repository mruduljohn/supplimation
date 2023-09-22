import React from 'react'
import { Route ,Routes, BrowserRouter} from 'react-router-dom'
import Simulation from './pages/Simulation'
import MVP from './pages/MVP'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='grid md:grid-cols-6'>
      <Sidebar />
      <div className='col-span-5 px-10 py-5'>
        <BrowserRouter>
          <Routes>
              {/* <Route path='/:id' element={<Sidebar/>} /> */}
              <Route path='/sim' element={<Simulation/>}/>
              <Route path='/mvp' element={<MVP/>}/>
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
