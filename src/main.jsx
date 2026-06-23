import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Weather from './pages/Weather.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    {
      element:<Weather/>,
path:"/weather"
    }
    ]
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
