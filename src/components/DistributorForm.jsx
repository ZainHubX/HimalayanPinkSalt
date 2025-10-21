import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../assets/css/DistributorForm.css';

export function DistributorForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        country: '',
        businessType: '',
        orderVolume: '',
        website: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // Replace these with your EmailJS credentials
            const serviceId = 'YOUR_SERVICE_ID';
            const templateId = 'YOUR_TEMPLATE_ID';
            const publicKey = 'YOUR_PUBLIC_KEY';

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: formData.fullName,
                    from_email: formData.email,
                    phone: formData.phone,
                    company_name: formData.companyName,
                    country: formData.country,
                    business_type: formData.businessType,
                    order_volume: formData.orderVolume,
                    website: formData.website,
                    message: formData.message
                },
                publicKey
            );

            setStatus({
                type: 'success',
                message: 'Thank you! Your application has been submitted. We will contact you soon.'
            });

            // Reset form
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                companyName: '',
                country: '',
                businessType: '',
                orderVolume: '',
                website: '',
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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <section className="distributor-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <motion.div
                                className="distributor-form-wrapper"
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2 className="distributor-title text-center mb-3">Become a Distributor</h2>
                                <p className="distributor-tagline text-center mb-5">
                                    Join our network of trusted distributors and bring premium Himalayan products to your market.
                                </p>

                                {status.message && (
                                    <div 
                                        className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-danger'} mb-4`}
                                        role="alert"
                                    >
                                        {status.message}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="needs-validation">
                                    <div className="row">
                                        {/* Full Name */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Full Name *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Email Address *</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Phone Number *</label>
                                            <input
                                                type="tel"
                                                className="form-control"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* Company Name */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Company Name *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="companyName"
                                                value={formData.companyName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* Country */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Country/Location *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleChange}
                                                placeholder="e.g., United Kingdom"
                                                required
                                            />
                                        </div>

                                        {/* Business Type */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Business Type *</label>
                                            <select
                                                className="form-select"
                                                name="businessType"
                                                value={formData.businessType}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select...</option>
                                                <option value="Retailer">Retailer</option>
                                                <option value="Wholesaler">Wholesaler</option>
                                                <option value="E-commerce">E-commerce Store</option>
                                                <option value="Spa/Wellness">Spa/Wellness Center</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        {/* Order Volume */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Estimated Monthly Order Volume *</label>
                                            <select
                                                className="form-select"
                                                name="orderVolume"
                                                value={formData.orderVolume}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select...</option>
                                                <option value="Small (1-50 units)">Small (1-50 units)</option>
                                                <option value="Medium (51-200 units)">Medium (51-200 units)</option>
                                                <option value="Large (200+ units)">Large (200+ units)</option>
                                            </select>
                                        </div>

                                        {/* Website */}
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Website/Social Media (Optional)</label>
                                            <input
                                                type="url"
                                                className="form-control"
                                                name="website"
                                                value={formData.website}
                                                onChange={handleChange}
                                                placeholder="https://..."
                                            />
                                        </div>

                                        {/* Message */}
                                        <div className="col-12 mb-3">
                                            <label className="form-label">Additional Information (Optional)</label>
                                            <textarea
                                                className="form-control"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="4"
                                                placeholder="Tell us more about your business and requirements..."
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="col-12 text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg px-5"
                                                disabled={loading}
                                            >
                                                {loading ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    'Submit Application'
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}