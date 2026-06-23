import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div
      data-theme="dracula"
      className={`navbar bg-gradient-to-r from-indigo-950 via-purple-900 to-violet-950 shadow-lg px-4 sticky top-0 z-50 transition-all duration-700 ease-out ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-slate-200 hover:bg-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-900 text-slate-200 rounded-box z-50 mt-3 w-52 p-2 shadow-xl border border-slate-700">
            <li><a className="hover:bg-violet-700 hover:text-white rounded-lg transition-colors">Item 1</a></li>
            <li>
              <a className="hover:bg-violet-700 hover:text-white rounded-lg transition-colors">Parent</a>
              <ul className="p-2">
                <li><a className="hover:bg-violet-700 hover:text-white rounded-lg transition-colors">Submenu 1</a></li>
                <li><a className="hover:bg-violet-700 hover:text-white rounded-lg transition-colors">Submenu 2</a></li>
              </ul>
            </li>
            <li><a className="hover:bg-violet-700 hover:text-white rounded-lg transition-colors">Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-extrabold tracking-tight text-slate-100 hover:scale-105 transition-transform">
          daisy<span className="text-amber-400">UI</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <a className="rounded-full text-slate-200 font-medium hover:bg-white/10 transition-colors">Item 1</a>
          </li>
          <li>
            <details>
              <summary className="rounded-full text-slate-200 font-medium hover:bg-white/10 transition-colors">Parent</summary>
              <ul className="p-2 bg-slate-900 text-slate-200 w-40 z-50 rounded-box shadow-xl border border-slate-700">
                <li><NavLink to={'/product'} className="rounded-lg hover:bg-violet-700 hover:text-white transition-colors">product</NavLink></li>
                <li><NavLink to={'/users'} className="rounded-lg hover:bg-violet-700 hover:text-white transition-colors">users</NavLink></li>
                <li><NavLink to={'/weather'} className="rounded-lg hover:bg-violet-700 hover:text-white transition-colors">weather</NavLink></li>
              </ul>
            </details>
          </li>
          <li>
            <a className="rounded-full text-slate-200 font-medium hover:bg-white/10 transition-colors">Item 3</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn bg-amber-400 text-slate-900 border-none rounded-full px-6 font-semibold hover:bg-amber-300 hover:scale-105 hover:shadow-lg transition-all">
          Button
        </a>
      </div>
    </div>
  )
}

export default Navbar