// import React from 'react'

import "./BusinessSupport.css";

const BusinessSupport = () => {
  return (
    <main>
      {/* Business Support Hero Section */}
      <section className="stpl-business-hero-banner">
        <div className="stpl-business-hero-content-wrapper">
          <h1 className="stpl-business-hero-main-heading">Enterprise Business Support</h1>
          <p className="stpl-business-hero-subtitle-text">Comprehensive solutions for your telecommunications infrastructure</p>
          <div className="stpl-business-hero-cta-buttons-container">
            <a href="contact.html#getintouch" className="stpl-business-cta-btn stpl-business-cta-primary-btn">Schedule Consultation</a>
            <a href="#solutions" className="stpl-business-cta-btn stpl-business-cta-secondary-btn">Explore Solutions</a>
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="stpl-business-solutions-section" id="solutions">
        <div className="stpl-solutions-content-container">
          <div className="stpl-business-section-header">
            <h2 className="stpl-business-section-title">Enterprise Solutions</h2>
            <p className="stpl-business-section-description">Tailored telecommunications solutions for your business needs</p>
          </div>
          <div className="stpl-business-solutions-grid">
            <div className="stpl-business-solution-card">
              <div className="stpl-solution-card-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <div className="stpl-solution-card-content">
                <h3 className="stpl-solution-card-title">Network Infrastructure</h3>
                <p className="stpl-solution-card-description">Enterprise-grade networking solutions with high availability and redundancy</p>
                <ul className="stpl-solution-feature-list">
                  <li className="stpl-solution-feature-item">High-speed Fiber Connectivity</li>
                  <li className="stpl-solution-feature-item">Network Architecture Design</li>
                  <li className="stpl-solution-feature-item">24/7 Infrastructure Support</li>
                </ul>
              </div>
            </div>
            <div className="stpl-business-solution-card">
              <div className="stpl-solution-card-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="stpl-solution-card-content">
                <h3 className="stpl-solution-card-title">Security Services</h3>
                <p className="stpl-solution-card-description">Comprehensive security solutions for enterprise networks</p>
                <ul className="stpl-solution-feature-list">
                  <li className="stpl-solution-feature-item">Advanced Firewall Protection</li>
                  <li className="stpl-solution-feature-item">Threat Detection & Response</li>
                  <li className="stpl-solution-feature-item">Compliance Management</li>
                </ul>
              </div>
            </div>
            <div className="stpl-business-solution-card">
              <div className="stpl-solution-card-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <div className="stpl-solution-card-content">
                <h3 className="stpl-solution-card-title">Cloud Integration</h3>
                <p className="stpl-solution-card-description">Seamless cloud connectivity and hybrid solutions</p>
                <ul className="stpl-solution-feature-list">
                  <li className="stpl-solution-feature-item">Cloud Network Design</li>
                  <li className="stpl-solution-feature-item">Hybrid Cloud Solutions</li>
                  <li className="stpl-solution-feature-item">Cloud Security Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Support Services */}
      <section className="stpl-enterprise-support-section">
        <div className="stpl-enterprise-support-container">
          <div className="stpl-business-section-header">
            <h2 className="stpl-business-section-title">Enterprise Support Services</h2>
            <p className="stpl-business-section-description">Dedicated support for your business operations</p>
          </div>
          <div className="stpl-enterprise-support-grid">
            <div className="stpl-enterprise-support-item">
              <div className="stpl-enterprise-support-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="stpl-enterprise-support-item-title">24/7 Technical Support</h3>
              <p className="stpl-enterprise-support-item-description">Round-the-clock assistance from our expert engineering team</p>
            </div>
            <div className="stpl-enterprise-support-item">
              <div className="stpl-enterprise-support-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="stpl-enterprise-support-item-title">Performance Monitoring</h3>
              <p className="stpl-enterprise-support-item-description">Proactive monitoring and performance optimization</p>
            </div>
            <div className="stpl-enterprise-support-item">
              <div className="stpl-enterprise-support-icon">
                <i className="fas fa-users-cog"></i>
              </div>
              <h3 className="stpl-enterprise-support-item-title">Dedicated Account Team</h3>
              <p className="stpl-enterprise-support-item-description">Personalized support and account management</p>
            </div>
            <div className="stpl-enterprise-support-item">
              <div className="stpl-enterprise-support-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="stpl-enterprise-support-item-title">Maintenance Services</h3>
              <p className="stpl-enterprise-support-item-description">Regular maintenance and system updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Level Agreements */}
      <section className="stpl-business-sla-section">
        <div className="stpl-business-sla-container">
          <div className="stpl-business-section-header">
            <h2 className="stpl-business-section-title">Service Level Agreements</h2>
            <p className="stpl-business-section-description">Our commitment to enterprise service excellence</p>
          </div>
          <div className="stpl-business-sla-grid">
            <div className="stpl-business-sla-card">
              <h3 className="stpl-sla-card-title">Response Time</h3>
              <div className="stpl-sla-card-value">&lt; 15 min</div>
              <p className="stpl-sla-card-description">Critical issue response time</p>
            </div>
            <div className="stpl-business-sla-card">
              <h3 className="stpl-sla-card-title">Network Uptime</h3>
              <div className="stpl-sla-card-value">99.99%</div>
              <p className="stpl-sla-card-description">Guaranteed network availability</p>
            </div>
            <div className="stpl-business-sla-card">
              <h3 className="stpl-sla-card-title">Resolution Time</h3>
              <div className="stpl-sla-card-value">4 hours</div>
              <p className="stpl-sla-card-description">Average issue resolution time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="stpl-business-contact-section" id="consult">
        <div className="stpl-business-contact-container">
          <div className="stpl-business-section-header">
            <h2 className="stpl-business-section-title">Enterprise Support Contacts</h2>
            <p className="stpl-business-section-description">Get in touch with our business support team</p>
          </div>
          <div className="stpl-business-contact-grid">
            <div className="stpl-business-contact-card">
              <i className="fas fa-phone-alt stpl-business-contact-icon"></i>
              <h3 className="stpl-business-contact-card-title">Enterprise Support Line</h3>
              <div className="stpl-business-contact-numbers">
                <p className="stpl-business-contact-number-item">
                  <a href="tel:04045474747">040-45474747</a>
                </p>
                <p className="stpl-business-contact-number-item">
                  <a href="tel:+917337369743">+91 7337369743</a>
                </p>
              </div>
            </div>
            <div className="stpl-business-contact-card">
              <i className="fas fa-envelope stpl-business-contact-icon"></i>
              <h3 className="stpl-business-contact-card-title">Business Email</h3>
              <p className="stpl-business-contact-email">enterprise@stpl.network</p>
            </div>
            <div className="stpl-business-contact-card">
              <i className="fas fa-calendar-alt stpl-business-contact-icon"></i>
              <h3 className="stpl-business-contact-card-title">Schedule Meeting</h3>
              <button className="stpl-business-schedule-btn" onClick={() => window.location.href='contact.html#contact'}>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BusinessSupport