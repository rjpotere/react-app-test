import React from 'react';

function Header({ currentPage, handlePageChange }) {
    return (
        <div>
        <header>
            <h1>Ryan Potere</h1>
        </header>
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <a href="#home" onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
                    Home
                </a>
            </li>
            <li className='nav-item'>
                <a href="#projects" onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
                    Projects
                </a>
            </li>
            <li className='nav-item'>
                <a href="#about" onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </a>
            </li>
            <li className='nav-item'>
                <a href="#conactMe" onClick={() => handlePageChange('ContactMe')}
                className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </a>
            </li>
        </ul>
        </div>
    )
}

export default Header;