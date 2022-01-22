import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import logo from '../logo.png';
import avatar from '../avatar.png';
import './HeaderBar.css'

function Sidebar() {
    const [sidebarActive, setSideBarActive] = useState(false);
    const showSideBar = () => setSideBarActive(!sidebarActive);
    const user = "Joris Neber"

    return (
        <>
            <div className='header-bar'>
                <img src={logo} className='logo' alt='Logo' />
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSideBar} />
                </Link>
                <h3>{user}</h3>
                <input type="image" className='avatar-btn' src={avatar} />
                <button>Cart</button>
            </div>
            <nav className={sidebarActive ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose onClick={showSideBar} />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Sidebar