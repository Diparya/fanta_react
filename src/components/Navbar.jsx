import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between fixed w-full h-3 my-5 z-50 pb-2 text-white">
                <span className="absolute bottom-0 h-0.5 w-12 bg-gradient-to-r from-transparent to-white animate-custom"></span>
                <a className=" ml-5" href="#">Fanta</a>
                <div className="flex gap-3 sm:gap-5 lg:gap-9 xl:gap-12 mx-7">
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Shop</a>
                    <a href="#">Contact</a>
                </div>
    </nav>
  )
}

export default Navbar