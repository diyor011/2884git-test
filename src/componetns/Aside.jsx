import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Aside = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div data-theme="dracula" className="">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-3" className="btn bg-amber-400 text-slate-900 border-none drawer-button lg:hidden rounded-full">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul
            className={`menu bg-gradient-to-b from-indigo-950 via-purple-900 to-violet-950 text-slate-200 min-h-full w-80 p-4 shadow-xl transition-all duration-700 ease-out ${
              loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            {/* Sidebar content here */}
            <li className="mb-2">
              <span className="text-2xl font-extrabold tracking-tight px-2 text-slate-100">
                daisy<span className="text-amber-400">UI</span>
              </span>
            </li>
            <div className="divider before:bg-white/10 after:bg-white/10 my-1"></div>

            <li>
              <NavLink
                to={'/product'}
                className={({ isActive }) =>
                  `rounded-full font-medium transition-colors ${
                    isActive ? 'bg-amber-400 text-slate-900' : 'hover:bg-white/10'
                  }`
                }
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/users'}
                className={({ isActive }) =>
                  `rounded-full font-medium transition-colors ${
                    isActive ? 'bg-amber-400 text-slate-900' : 'hover:bg-white/10'
                  }`
                }
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/weather'}
                className={({ isActive }) =>
                  `rounded-full font-medium transition-colors ${
                    isActive ? 'bg-amber-400 text-slate-900' : 'hover:bg-white/10'
                  }`
                }
              >
                Weather
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aside