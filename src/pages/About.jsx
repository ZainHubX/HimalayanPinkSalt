import { motion } from 'framer-motion';
import '../assets/css/About.css';

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
        <motion.section 
            id="about" 
            className="about py-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <motion.div 
                        className="col-md-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img 
                            src="https://source.unsplash.com/600x400/?himalayas,mountains" 
                            alt="Himalayan Mountains" 
                            className="img-fluid rounded shadow"
                        />
                    </motion.div>
                    
                    <motion.div 
                        className="col-md-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="about-content ps-md-4">
                            <h6 className="text-primary">About Us</h6>
                            <h2 className="display-4 mb-4">Bringing Nature's Best to Your Doorstep</h2>
                            <p className="lead">
                                Since 1995, we've been harvesting the finest natural products from the 
                                Himalayan region, ensuring quality and authenticity in every item we offer.
                            </p>
                            
                            <div className="mt-4">
                                <div className="row g-4">
                                    {achievements.map((achievement, index) => (
                                        <div className="col-6" key={index}>
                                            <motion.div 
                                                className="achievement"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                            >
                                                <h3>
                                                    <i className={`${achievement.icon} text-primary`}></i> {achievement.number}
                                                </h3>
                                                <p>{achievement.label}</p>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="about-features mt-4">
                                {features.map((feature, index) => (
                                    <motion.p
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                    >
                                        <i className="fas fa-check-circle text-primary me-2"></i>
                                        {feature}
                                    </motion.p>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}