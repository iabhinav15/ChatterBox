import React from 'react'
import img from './assets/logo.png'

const Header = () => {
  return (
    <>
        <div className="navbar">
            <div className="logo">
                <img src={img} alt="logo" />
                <h1> ChatterBox</h1>
            </div>
        </div>
    </>
  )
}

export default Header
