import { motion } from 'framer-motion';
import { ProductCard } from '../components/ProductCard';
import '../assets/css/Products.css';

export function Products() {
    const products = [
        {
            id: 1,
            name: 'Himalayan Pink Salt Lamps',
            description: 'Natural salt crystal lamps that purify air and create a warm, calming ambiance.',
            image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400'
        },
        {
            id: 2,
            name: 'Himalayan Cooking Salt',
            description: 'Pure, unrefined pink salt rich in minerals. Perfect for cooking and seasoning.',
            image: 'https://images.unsplash.com/photo-1587677968781-e6f8ab49ef86?w=400'
        },
        {
            id: 3,
            name: 'Salt Bricks & Tiles',
            description: 'Premium salt blocks for building therapeutic salt rooms and wellness spaces.',
            image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400'
        },
        {
            id: 4,
            name: 'Bath Salt & Spa Products',
            description: 'Relaxing bath salts and spa essentials infused with Himalayan minerals.',
            image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400'
        },
        {
            id: 5,
            name: 'Salt Candle Holders',
            description: 'Hand-carved natural salt candle holders for ambient lighting and décor.',
            image: 'https://images.unsplash.com/photo-1602874801006-0fbb830a0fd8?w=400'
        },
        {
            id: 6,
            name: 'Animal Salt Licks',
            description: 'Natural salt blocks providing essential minerals for livestock and pets.',
            image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=400'
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
                    <h2 className="text-center mb-3">Our Products</h2>
                    <p className="text-center text-muted mb-5">
                        Premium Himalayan salt products for wellness, décor, and commercial use
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
                        Interested in bulk orders? <a href="/distributor" className="alert-link">Become a Distributor</a>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}