import React from 'react'
import { Outlet } from 'react-router-dom'


function RootLayout() {
  return (
   <>
    <div className='bg-amber-600'>sidebar</div>
    <div className='bg-orange-400'>header</div>
    <div>{<Outlet/>}</div>
    <div>footer</div>
   </>
  )
}

export default RootLayout
