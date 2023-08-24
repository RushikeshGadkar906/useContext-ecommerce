import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <div className='error_page'>
        
        <img src="images/return-punch.jpg" alt="" className='img-fluid' />
            <h1>Error Page</h1>
            <NavLink to="/">
            <button>Go Back</button>
            </NavLink>
        </div>
    </div>
  )
}

export default ErrorPage