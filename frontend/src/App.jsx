import React from 'react'
import { Route ,Routes, BrowserRouter} from 'react-router-dom'
import Simulation from './pages/Simulation'
import MVP from './pages/MVP'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Sidebar />
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Sidebar/>}> */}
            <Route path='/sim' element={<Simulation/>}/>
            <Route path='/mvp' element={<MVP/>}/>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
