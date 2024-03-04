import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div >
        <p>Products</p> 
        <Link to='/dashboard' className='underline'>go to dashboard page </Link>
    </div>
  )
}

export default Products