import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import '../assets/css/Products.css';

// Import product images
import edibleSalt from '../assets/images/edibleSalt.jpg';
import pinkSalt from '../assets/images/PinkSalt.png';
import lickSalt from '../assets/images/LickSalt.jpg';
import himalayanLamp from '../assets/images/HimalayanLamp.png';
import blackSalt from '../assets/images/BlackSalt.png';
import saltLamps from '../assets/images/SaltLamps.jpg';

export function Products() {
    const products = [
        {
            id: 1,
            name: 'Organic Edible Salt',
            description: 'Pure, unrefined Himalayan pink salt rich in minerals. Perfect for cooking and seasoning.',
            image: edibleSalt
        },
        {
            id: 2,
            name: 'Pink Bath Salts',
            description: 'Relaxing bath salts infused with natural Himalayan minerals for ultimate spa experience.',
            image: pinkSalt
        },
        {
            id: 3,
            name: 'Lick Salt for Animals',
            description: 'Natural salt blocks providing essential minerals for livestock and pets.',
            image: lickSalt
        },
        {
            id: 4,
            name: 'Himalayan Salt Lamps',
            description: 'Natural salt crystal lamps that purify air and create a warm, calming ambiance.',
            image: himalayanLamp
        },
        {
            id: 5,
            name: 'Natural Himalayan Lamps',
            description: 'Authentic Himalayan salt lamps for natural air purification and ambient lighting.',
            image: saltLamps
        },
        {
            id: 6,
            name: 'Himalayan Black Salt',
            description: 'Premium black salt with unique flavor and health benefits. Ideal for cooking.',
            image: blackSalt
        }
    ];

    return (
        <motion.section 
            id="products" 
            className="py-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-center mb-3">Our Premium Products</h2>
                    <p className="text-center text-muted mb-5">
                        Authentic Himalayan salt products for wellness, décor, and commercial use
                    </p>
                </motion.div>

                <div className="row">
                    {products.map((product, index) => (
                        <ProductCard 
                            key={product.id}
                            product={product}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                <motion.div 
                    className="text-center mt-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="alert alert-info d-inline-block">
                        <i className="fas fa-info-circle me-2"></i>
                        Interested in bulk orders? <a href="/distributor" className="alert-link fw-bold">Become a Distributor</a>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}