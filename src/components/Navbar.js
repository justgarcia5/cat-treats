import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {
    return(
        <div className='nav'>
            <i className='menu-icon'>=</i>
            <a href='/' className='home-link'>
                PUBLIC
                <br />
                GOODS
            </a>
            <i className='search-icon'>
                <FontAwesomeIcon
                    icon={faSearch}
                />
            </i>
            <a href='/' className='cart-link'>Cart 0</a>
        </div>
    )
}