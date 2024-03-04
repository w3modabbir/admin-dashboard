import React from 'react'
import { Link } from 'react-router-dom'

const DashBoard = () => {
  return (
   <>
    <div>
        <p>DashBoard</p> 
        <Link to='/products' className='underline'>go to product page</Link> 
    </div>
   </>
  )
}

export default DashBoard