import { motion } from 'framer-motion';
import '../assets/css/features.css';

export function FeatureBox({ icon, title, description, delay = 0 }) {
    return (
        <motion.div
            className="feature-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -10 }}
        >
            <i className={`${icon} fa-2x mb-3`}></i>
            <h3>{title}</h3>
            <p>{description}</p>
        </motion.div>
    );
}