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

    return (
        <motion.section 
            id="contact" 
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
                    <h2 className="text-center mb-3">Contact Us</h2>
                    <p className="text-center text-muted mb-5">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </motion.div>

                <div className="row justify-content-center">
                    <div className="col-md-8">
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

                        <motion.form
                            id="contactForm"
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="mb-3">
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

                            <div className="mb-3">
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

                            <div className="mb-3">
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

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
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
                            </div>
                        </motion.form>

                        {/* Contact Information */}
                        <motion.div
                            className="mt-5 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <i className="fas fa-map-marker-alt fa-2x text-primary mb-2"></i>
                                    <p className="mb-0 text-muted">United Kingdom</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <i className="fas fa-envelope fa-2x text-primary mb-2"></i>
                                    <p className="mb-0 text-muted">info@himalayan.co.uk</p>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <i className="fas fa-phone fa-2x text-primary mb-2"></i>
                                    <p className="mb-0 text-muted">+44 (0) XXX XXX XXXX</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}