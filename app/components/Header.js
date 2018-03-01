import React from 'react'
import { Link } from 'react-router-dom'
// import { Button } from 'react-bootstrap'

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/savings'>Savings</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header