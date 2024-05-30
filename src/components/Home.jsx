import React from 'react'
import RightSide from './RightSide'
import './Home.css'
import LeftSide from './LeftSide'
import About from './About'
import {Outlet} from "react-router-dom"
function Home() {
  return (
    <div className='background-wrapper lg:flex  lg:w-[100vw]  lg:justify-center lg:gap-10'>
    

        <LeftSide />
        <Outlet />
        <RightSide />
    </div>
  )
}

export default Home