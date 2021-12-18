import React from 'react';
import './Navbar.css'

export default function Navbar() {
    return(
        <div className='nav'>
            <i className='menu-icon'>=</i>
            <a href='/' className='home-link'>
                PUBLIC
                <br />
                GOODS
            </a>
            <i className='search-icon'>@</i>
            <a href='/' className='cart-link'>Cart 0</a>
        </div>
    )
}