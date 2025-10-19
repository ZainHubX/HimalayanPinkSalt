import { motion } from 'framer-motion';
import { useState } from 'react';

export function ProductCard({ product, delay = 0 }) {
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };

    const placeholderImage = `https://via.placeholder.com/300x200/FF4800/ffffff?text=${encodeURIComponent(product.name)}`;

    return (
        <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay }}
        >
            <div className="card product-card h-100">
                <img 
                    src={imageError ? placeholderImage : product.image} 
                    className="card-img-top" 
                    alt={product.name}
                    onError={handleImageError}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text flex-grow-1">{product.description}</p>
                    <button className="btn btn-primary mt-2">Learn More</button>
                </div>
            </div>
        </motion.div>
    );
}