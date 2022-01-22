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
    const [useBurgerStyle, setUseBurgerStyle] = useState(true);
    const showSideBar = () => setSideBarActive(!sidebarActive);
    const toggleBurgerStyle = () => setUseBurgerStyle(!useBurgerStyle);
    const user = "Joris Neber"

    return (
        <>
            <div className='header-bar'>
                <img src={logo} className='logo' alt='Logo' />
                <Link to='#' className={useBurgerStyle ? 'menu-bars-burger' : 'menu-bars'}>
                    <FaIcons.FaBars onClick={showSideBar} />
                </Link>
                <a onClick={toggleBurgerStyle} style={{ cursor: 'pointer', paddingLeft: '20px', color: 'white' }}>toggle sidebar style</a>
                <h3>{user}</h3>
                <input type="image" className='avatar-btn' src={avatar} />
                <button>Cart</button>
            </div>
            <nav className={useBurgerStyle ? (sidebarActive ? 'nav-menu-burger active' : 'nav-menu-burger') : (sidebarActive ? 'nav-menu active' : 'nav-menu')}>
                <ul className='nav-menu-items'>
                    <li className={useBurgerStyle ? 'navbar-toggle-burger' : 'navbar-toggle'} >
                        <Link to='#' className={useBurgerStyle ? 'menu-bars-burger' : 'menu-bars'}>
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