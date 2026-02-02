import './PrivacyPolicy.css'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
    return (
        <main className="privacy-main">
            <div className="privacy-container">
                <h1 className="privacy-title">STPL Company Norms & Terms</h1>

                {/* ================= Company Norms ================= */}
                <section className="privacy-section">
                    <h2 className="section-heading">Company Norms</h2>
                    <ul className="terms-list">
                        <li className="terms-list-item">Respond promptly to emails and messages; provide clear updates.</li>
                        <li className="terms-list-item">Be punctual, responsible, and take ownership of your tasks.</li>
                        <li className="terms-list-item">Respect colleagues, collaborate, and celebrate team successes.</li>
                        <li className="terms-list-item">Maintain a clean, safe, and professional workspace.</li>
                        <li className="terms-list-item">Uphold integrity, honesty, and ethical behavior.</li>
                        <li className="terms-list-item">Continuously improve skills and contribute to growth.</li>
                        <li className="terms-list-item">Follow workplace safety and health policies.</li>
                    </ul>
                </section>

                {/* ================= Terms & Conditions ================= */}
                <section className="privacy-section">
                    <h2 className="section-heading">Terms & Conditions</h2>
                    <ul className="terms-list">
                        <li className="terms-list-item">Clients must use our services legally and responsibly.</li>
                        <li className="terms-list-item">
                            Personal data is handled per our{' '}
                            <Link to="/privacy-policy" className="privacy-link">
                                Privacy Policy
                            </Link>.
                        </li>
                        <li className="terms-list-item">All content and branding remain the property of STPL.</li>
                        <li className="terms-list-item">STPL is not liable for indirect damages from service use.</li>
                        <li className="terms-list-item">All invoices must be paid in the agreed timeline.</li>
                        <li className="terms-list-item">Disputes will be resolved under Indian law.</li>
                        <li className="terms-list-item">STPL can update these terms anytime; users will be notified.</li>
                    </ul>
                </section>

                <section className="middleheading">
                    <h2>Wherever you are, we are close to you</h2>

                    <div className="contact-links">
                        {/* Left */}
                        <div className="contact-item">
                            <strong>Business Enquiry</strong>
                            <i className="fa-solid fa-envelope"></i> <a href="mailto:sales@stpl.network">sales@stpl.network</a>
                        </div>
                        <div className="contact-item contact-item-center">
                            <strong>Support</strong>
                            <i className="fa-solid fa-envelope"></i>  <a href="mailto:support@stpl.network">support@stpl.network</a>
                        </div>
                    </div>

                    <br />
                    {/* CENTER */}
                    <p className="contact-info-1">
                        Contact us at{' '}
                        <i className="fa-solid fa-envelope"></i> <a href="mailto:admin@stpl.network" className="privacy-link-1">
                            admin@stpl.network
                        </a>
                        <br />
                        <i className="fa-solid fa-phone"></i> <a href="tel:04045474747" className="privacy-link-1">
                            040-45474747
                        </a>
                        {' | '}
                        <i className="fa-solid fa-phone"></i>  <a href="tel:+919515999449" className="privacy-link-1">
                            +91 9515999449
                        </a>
                    </p>

                </section >

            </div >
        </main >
    )
}

export default PrivacyPolicy
