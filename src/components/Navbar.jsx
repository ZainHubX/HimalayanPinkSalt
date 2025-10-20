import { useState, useEffect } from 'react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.getElementById(targetId);
        if (target) {
            const offset = 70; // Navbar height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        closeNavbar();
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                {/* Brand/Logo */}
                <a 
                    className="navbar-brand brand-text" 
                    href="#home" 
                    onClick={(e) => handleScroll(e, 'home')}
                >
                    Himalayan Pink Salt
                </a>

                {/* Mobile Toggle Button */}
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

                {/* Navigation Menu */}
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    {/* Center Menu Items */}
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href="#home" 
                                onClick={(e) => handleScroll(e, 'home')}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href="#about" 
                                onClick={(e) => handleScroll(e, 'about')}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href="#products" 
                                onClick={(e) => handleScroll(e, 'products')}
                            >
                                Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a 
                                className="nav-link" 
                                href="#contact" 
                                onClick={(e) => handleScroll(e, 'contact')}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Right Side Button */}
                    <div className="d-flex">
                        <a 
                            className="btn btn-primary distributor-btn" 
                            href="#distributionform" 
                            onClick={(e) => handleScroll(e, 'distributionform')}
                        >
                            <i className="fas fa-handshake me-2"></i>
                            Become a Distributor
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}