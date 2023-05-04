import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Breweries from './pages/Breweries'
import ErrorPage from './pages/ErrorPage'
import SingleBrewery from './pages/SingleBrewery'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'breweries',
        element: <Breweries />
      },
      {
        path: 'breweries/:id',
        element: <SingleBrewery />
      }
    ]    
  }
])




const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App