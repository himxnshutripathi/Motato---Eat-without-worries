import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your Favourite food here</h2>
            <button><a href="#explore-menu">View Menu</a></button>
        </div>
    </div>
  )
}

export default Header