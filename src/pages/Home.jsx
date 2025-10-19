import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FeatureBox } from '../components/FeatureBox';
import '../assets/css/Home.css';

export function Home() {
    const features = [
        {
            icon: 'fas fa-leaf',
            title: '100% Natural',
            description: 'Pure and authentic products'
        },
        {
            icon: 'fas fa-mountain',
            title: 'Himalayan Origin',
            description: 'Sourced from the heights'
        },
        {
            icon: 'fas fa-award',
            title: 'Premium Quality',
            description: 'Certified excellence'
        }
    ];

    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content text-center">
                    <motion.h1 
                        className="display-1 fw-bold"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Pure Himalayan Products
                    </motion.h1>
                    
                    <motion.p 
                        className="lead mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Discover the natural essence of the Himalayas
                    </motion.p>
                    
                    <motion.div 
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link to="/products" className="btn btn-primary btn-lg me-3">
                            Explore Products
                        </Link>
                        <Link to="/about" className="btn btn-outline-light btn-lg">
                            Learn More
                        </Link>
                    </motion.div>
                    
                    <div className="hero-features mt-5">
                        <div className="row g-4">
                            {features.map((feature, index) => (
                                <div className="col-md-4" key={index}>
                                    <FeatureBox 
                                        icon={feature.icon}
                                        title={feature.title}
                                        description={feature.description}
                                        delay={0.8 + (index * 0.2)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}