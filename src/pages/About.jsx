import { motion } from 'framer-motion';
import '../assets/css/About.css';
import videoBackground from '../assets/video/about.mp4';

export function About() {
    const achievements = [
        { icon: 'fas fa-users', number: '50K+', label: 'Happy Customers' },
        { icon: 'fas fa-globe', number: '30+', label: 'Countries Served' }
    ];

    const features = [
        'Direct sourcing from local communities',
        'Sustainable harvesting practices',
        'Quality testing in certified labs',
        'Fair trade certified'
    ];

    return (
        <section id="about" className="about-video-section">
            {/* Background Video */}
            <video autoPlay loop muted playsInline className="about-video-bg">
                <source src={videoBackground} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Split Overlay - Left 50% Solid Black, Right 50% with Gradient */}
            <div className="about-split-overlay"></div>

            {/* Content Container */}
            <div className="about-content-wrapper">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center">
                        {/* Left Side - Content on Solid Black */}
                        <div className="col-lg-6">
                            <motion.div 
                                className="about-content"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.h6 
                                    className="section-label"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                >
                                    About Us
                                </motion.h6>
                                
                                <motion.h2 
                                    className="about-title"
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    Bringing Nature's Best to Your Doorstep
                                </motion.h2>
                                
                                <motion.p 
                                    className="about-description"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    Since 1995, we've been harvesting the finest natural products from the 
                                    Himalayan region, ensuring quality and authenticity in every item we offer.
                                </motion.p>
                                
                                {/* Achievements */}
                                <div className="achievements-grid">
                                    {achievements.map((achievement, index) => (
                                        <motion.div 
                                            key={index}
                                            className="achievement-box"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <i className={`${achievement.icon} achievement-icon`}></i>
                                            <h3 className="achievement-number">{achievement.number}</h3>
                                            <p className="achievement-label">{achievement.label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                                
                                {/* Features */}
                                <div className="about-features">
                                    {features.map((feature, index) => (
                                        <motion.div
                                            key={index}
                                            className="feature-item"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 1 + (index * 0.1) }}
                                        >
                                            <i className="fas fa-check-circle feature-icon"></i>
                                            <span>{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side - Empty (Shows Video) */}
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}