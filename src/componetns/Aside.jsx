import React from 'react'
import { NavLink } from 'react-router-dom'


const Aside = () => {
  return (
    <div className=''>
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-300 min-h-full w-80 p-4">
      {/* Sidebar content here */}
       <li><NavLink to={'/product'} >product</NavLink></li>
            <li><NavLink to={'/users'} >users</NavLink></li>
            <li><NavLink to={'/weather'} >weather</NavLink></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Aside