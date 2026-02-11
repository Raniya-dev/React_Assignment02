import {Outlet} from 'react-router-dom'
import Navbar from '../components/UserApp/Navbar'

import React from 'react'

function RootLayout() {
  return (
   <>
   <Navbar/>

   <main>
    <Outlet/>
   </main>
   
   </>
  )
}

export default RootLayout
