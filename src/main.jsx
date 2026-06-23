import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'

import Product from './pages/Product.jsx'   
import Users from './pages/Users.jsx'      
import Weather from './pages/Weather.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
{index: true,
    element: <Home/>
},
{path: 'product',
  element: <Product/>
},
{path: 'users',
  element: <Users/>
},
{path: 'weather',
  element: <Weather/>
},


    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
