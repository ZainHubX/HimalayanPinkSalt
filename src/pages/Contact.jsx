import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../assets/css/Contact.css';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: '', message: '' });

        // Validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
                type: 'error',
                message: 'Please fill in all fields'
            });
            return;
        }

        if (!isValidEmail(formData.email)) {
            setStatus({
                type: 'error',
                message: 'Please enter a valid email address'
            });
            return;
        }

        setLoading(true);

        try {
            // Replace with your EmailJS credentials
            const serviceId = 'YOUR_SERVICE_ID';
            const templateId = 'YOUR_TEMPLATE_ID';
            const publicKey = 'YOUR_PUBLIC_KEY';

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message
                },
                publicKey
            );

            setStatus({
                type: 'success',
                message: 'Thank you for your message! We will get back to you soon.'
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });

        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.'
            });
            console.error('EmailJS Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: 'fas fa-map-marker-alt',
            label: 'Location',
            value: '46 Staple Hill Road, Bristol, BS16 5BS'
        },
        {
            icon: 'fas fa-envelope',
            label: 'Email',
            value: 'info@himalayan.co.uk'
        },
        {
            icon: 'fas fa-phone',
            label: 'Phone',
            value: '+44 7402 733330'
        }
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Side - Contact Information */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <motion.div
                            className="contact-info-container"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="contact-title mb-3">Get in Touch with Us</h2>
                            <p className="contact-subtitle mb-5">
                                We're here to help and answer any questions you might have. 
                                We look forward to hearing from you and building a successful partnership.
                            </p>

                            <div className="contact-details">
                                {contactInfo.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="contact-item"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                    >
                                        <div className="contact-icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div className="contact-text">
                                            <h6>{item.label}</h6>
                                            <p>{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="col-lg-6">
                        <motion.div
                            className="contact-form-container"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="form-title mb-4">Send us a Message</h3>

                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`alert ${status.type === 'success' ? 'success-message' : 'error-message'} mb-4`}
                                    role="alert"
                                >
                                    {status.message}
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="form-label">Your Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="form-label">Your Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="message" className="form-label">Your Message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Tell us what you're thinking..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            Sending...
                                        </>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}