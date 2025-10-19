import { Link } from 'react-router-dom';
import '../assets/css/footer.css';

export function Footer() {
    return (
        <footer className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5>Himalayan Products</h5>
                        <p className="text-muted">
                            Bringing the finest natural products from the Himalayas to the UK and beyond.
                        </p>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-muted">Home</Link></li>
                            <li><Link to="/about" className="text-muted">About Us</Link></li>
                            <li><Link to="/products" className="text-muted">Products</Link></li>
                            <li><Link to="/contact" className="text-muted">Contact</Link></li>
                            <li><Link to="/distributor" className="text-muted">Become a Distributor</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Connect With Us</h5>
                        <div className="social-links">
                            <a href="#" className="text-white me-3" aria-label="Facebook">
                                <i className="fab fa-facebook fa-lg"></i>
                            </a>
                            <a href="#" className="text-white me-3" aria-label="Instagram">
                                <i className="fab fa-instagram fa-lg"></i>
                            </a>
                            <a href="#" className="text-white me-3" aria-label="Twitter">
                                <i className="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="#" className="text-white" aria-label="LinkedIn">
                                <i className="fab fa-linkedin fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <hr className="bg-light my-4" />
                <div className="text-center">
                    <p className="mb-0">&copy; 2025 Himalayan Products. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}