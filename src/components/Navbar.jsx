import { useState } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    // Smooth scroll function
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        closeNavbar();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#home" onClick={(e) => handleScroll(e, 'home')}>
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
                            <a className="nav-link" href="#home" onClick={(e) => handleScroll(e, 'home')}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" onClick={(e) => handleScroll(e, 'about')}>
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#products" onClick={(e) => handleScroll(e, 'products')}>
                                Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
                                Contact
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-primary btn-sm ms-lg-2" href="#distributionform" onClick={(e) => handleScroll(e, 'distributionform')}>
                                Become a Distributor
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}