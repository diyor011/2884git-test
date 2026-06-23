import React from 'react'
import Navbar from './componetns/Navbar'
import { Outlet } from 'react-router-dom'
import Aside from './componetns/Aside'

const App = () => {
  return (
    <div>

      <Navbar />

      <div className='flex'>
        <Aside />
        <div className='p-4'>
          <Outlet />
        </div>
      </div>



    </div>
  )
}

export default App