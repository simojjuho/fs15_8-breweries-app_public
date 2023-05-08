import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './styles/style.scss'

import Home from './pages/Home'
import Breweries from './pages/Breweries'
import ErrorPage from './pages/ErrorPage'
import SingleBreweryPage from './pages/SingleBreweryPage'
import Landing from './pages/Landing'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: 'breweries',
        element: <Breweries />
      },
      {
        path: 'breweries/:id',
        element: <SingleBreweryPage />
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