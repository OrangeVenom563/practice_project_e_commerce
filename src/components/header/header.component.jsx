import React from 'react';
import { Link } from 'react-router-dom';
import divPic from './orange.jpg';
import './header.style.scss';

const Header = () => (
    <div className='header'>
        <Link to='/'>
        <img className='logo-container' src={divPic} alt='logo'/>
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>

            <Link className='option' to='/contact'>
                CONTACT
            </Link>
        </div>
    </div>
);

export default Header;