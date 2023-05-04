import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <header></header>
        <Outlet />
        <footer></footer>
    </div>
  )
}

export default Home