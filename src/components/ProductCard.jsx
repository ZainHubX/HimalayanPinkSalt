import { motion } from 'framer-motion';
import { useState } from 'react';

export function ProductCard({ product, delay = 0 }) {
    const [imageError, setImageError] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    const placeholderImage = `https://via.placeholder.com/400x400/FF4800/ffffff?text=${encodeURIComponent(product.name)}`;

    return (
        <motion.div
            className="col-lg-4 col-md-6 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay }}
        >
            <motion.div 
                className="card product-card h-100"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
            >
                <div className="product-image-wrapper">
                    <motion.img 
                        src={imageError ? placeholderImage : product.image} 
                        className="card-img-top product-image" 
                        alt={product.name}
                        onError={handleImageError}
                        animate={{ scale: isHovered ? 1.05 : 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-3">{product.name}</h5>
                    <p className="card-text flex-grow-1">{product.description}</p>
                    <motion.button 
                        className="btn btn-primary mt-3 w-100"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Learn More
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
}