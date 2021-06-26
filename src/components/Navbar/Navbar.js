import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import firebase from "firebase"

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Learnology
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'
                            style={{ textDecoration: "none" }}
                            onClick={closeMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link
                            to='/models'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            style={{ textDecoration: "none" }}
                        >
                            Study
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link
                            to='/models'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            onClick={() => firebase.auth().signOut()}
                            style={{ textDecoration: "none" }}
                        >
                            Logout
                        </Link>
                    </li>

                </ul>
            </nav>
        </>
    );
}

export default Navbar;
