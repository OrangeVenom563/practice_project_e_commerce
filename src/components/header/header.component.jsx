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
                Shop
            </Link>

            <Link className='option' to='/contact'>
                contact
            </Link>
        </div>
    </div>
);

export default Header;