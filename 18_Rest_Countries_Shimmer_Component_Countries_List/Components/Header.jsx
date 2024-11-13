import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-container'>
        <div className='header-content'>
            <h2 className='title'>
                <Link to={`/`} style={{paddingRight: 50}}>Find your favourite country!</Link>
                <Link to={`/contact`}>Contact</Link>
            </h2>
            <p className='theme-changer'>
                <i className="fa-regular fa-solid fa-moon">Dark Mode</i>
            </p>
        </div>
    </header>
  )
}

export default Header