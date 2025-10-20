import { motion } from 'framer-motion';
import '../assets/css/Home.css';
import videoBackground from '../assets/video/video.mp4';

export function Home() {
    return (
        <section id="home" className="hero-video">
            {/* Background Video */}
            <video autoPlay loop muted playsInline className="hero-video-bg">
                <source src={videoBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="hero-overlay"></div>

            {/* Content */}
            <div className="hero-content-wrapper">
                <div className="container">
                    <div className="hero-content text-center">
                        {/* Attention Hook */}
                        <motion.div
                            className="hero-hook"
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Crafted by Nature
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1 
                            className="hero-title"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Premium Himalayan Salt
                        </motion.h1>
                        
                        {/* Subheading */}
                        <motion.p 
                            className="hero-subtitle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Direct from the Himalayas to Your Business
                            <span className="divider">|</span>
                            UK-Based
                            <span className="divider">|</span>
                            Trusted by 500+ Global Partners
                        </motion.p>
                        
                        {/* CTA Buttons */}
                        <motion.div 
                            className="hero-buttons"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <a href="#products" className="btn btn-primary btn-elegant">
                                Product Catalog
                            </a>
                            <a href="#about" className="btn btn-outline-light btn-elegant">
                                Learn More
                            </a>
                        </motion.div>

                        {/* Business Stats */}
                        <motion.div 
                            className="business-stats"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                        >
                            <div className="row g-4 justify-content-center">
                                <div className="col-md-4">
                                    <motion.div 
                                        className="stat-box"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 1.2 }}
                                    >
                                        <div className="stat-number">30+</div>
                                        <div className="stat-label">Countries Served</div>
                                    </motion.div>
                                </div>
                                <div className="col-md-4">
                                    <motion.div 
                                        className="stat-box"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 1.4 }}
                                    >
                                        <div className="stat-number">500+</div>
                                        <div className="stat-label">B2B Partners</div>
                                    </motion.div>
                                </div>
                                <div className="col-md-4">
                                    <motion.div 
                                        className="stat-box"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 1.6 }}
                                    >
                                        <div className="stat-number">10K+</div>
                                        <div className="stat-label">Tons Exported</div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
            >
                <a href="#about">
                    <i className="fas fa-chevron-down"></i>
                </a>
            </motion.div>
        </section>
    );
}