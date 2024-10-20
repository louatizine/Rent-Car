import React, { useState } from 'react'
import './Navbar.css'

// images
import logo from '../../Assests/Main-Logo.png'

// ICONS
import { IoIosCloseCircle } from 'react-icons/io'
import { TbGridDots } from 'react-icons/tb'

const Navbar = () => {
    const [navbar, setNavbar] = useState('navbar')

    const showNavbar = () => {
        setNavbar('navbar showNavbar')
    }

    const removeNavbar = () => {
        setNavbar('navbar ')
    }

    const [header, setHeader] = useState('header')
    const addBg = () => {
        if (window.screenY >= 20) {
            setHeader('header addBg')
        }
    }

    window.addEventListener('scroll', addBg)

    return (
        <div className={header}>
            <div className="logoDiv">
                <img src={logo} alt="" className='logo' />
            </div>

            <div className={navbar}>
                <ul className="menu">
                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link">Used Cars</a>
                    </li>

                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link">New Cars</a>
                    </li>

                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link">Auctions</a>
                    </li>

                    <li onClick={removeNavbar} className="listItem">
                        <a href="/" className="link">Sell</a>
                    </li>

                </ul>

                <IoIosCloseCircle className='icon closeIcon' onClick={removeNavbar} />
            </div>

            <div className="signUp flex">
                <div className="text">Sign Up</div>
                <TbGridDots className='icon toggleNavbarIcon' onClick={showNavbar} />
            </div>

        </div>
    )
}

export default Navbar