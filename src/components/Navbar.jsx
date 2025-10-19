// import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#home" onClick={closeNavbar}>
                    Himalayan Products
                </a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={toggleNavbar}
                    aria-controls="navbarNav" 
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className='nav-link' href="#home" onClick={closeNavbar}>Home</a>
                         </li>

                            <li className="nav-item">
                            <a className='nav-link' href="#about" onClick={closeNavbar}>About</a>
                         </li>

                          <li className="nav-item">
                            <a className='nav-link' href="#products" onClick={closeNavbar}>Products</a>
                         </li>

                          <li className="nav-item">
                            <a className='nav-link' href="#contact" onClick={closeNavbar}>Contact</a>
                         </li>

                          <li className="nav-item">
                            <a className='nav-link' href="#distributionform" onClick={closeNavbar}>Become a Distributor</a>
                         </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}