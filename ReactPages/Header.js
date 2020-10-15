import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink exact to='/'>React</NavLink>
                <NavLink to='/doc'>文档</NavLink>
                <NavLink to='/tuto'>教程</NavLink>
                <NavLink to='/blog'>博客</NavLink>
                <NavLink to='/comm'>社区</NavLink>
            </nav>
        </header>
    )
}

export default Header