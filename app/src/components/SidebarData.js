import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as GiIcons from 'react-icons/gi'

export const SidebarData = [
    {
        title: 'Vegetables',
        path: '/vegetables',
        icon: <FaIcons.FaCarrot />,
        className: 'nav-text'
    }, {
        title: 'Fruits',
        path: '/fruits',
        icon: <GiIcons.GiFruitBowl />,
        className: 'nav-text'
    }, {
        title: 'Cheese',
        path: '/cheese',
        icon: <FaIcons.FaCheese />,
        className: 'nav-text'
    }
]
