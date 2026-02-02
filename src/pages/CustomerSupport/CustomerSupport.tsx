// import React from 'react'
import "./CustomerSupport.css"

const CustomerSupport = () => {
  return (
    <main>
      {/* Customer Support Hero Section */}
      <section className="stpl-support-hero-banner">
        <div className="stpl-hero-content-wrapper">
          <h1 className="stpl-hero-main-heading">24/7 Customer Support</h1>
          <p className="stpl-hero-subtitle-text">Expert engineers available round the clock for your assistance</p>
          <div className="stpl-hero-cta-buttons-container">
            <a href="tel:+917337369743" className="stpl-cta-btn stpl-cta-primary-btn">Call Now</a>
            <a href="https://wa.me/7337369743" className="stpl-cta-btn stpl-cta-secondary-btn">Live Chat</a>
          </div>
        </div>
      </section>

      {/* 24/7 Support Highlight */}
      <section className="stpl-support-highlight-section">
        <div className="stpl-highlight-content-container">
          <div className="stpl-highlight-feature-box">
            <div className="stpl-highlight-animated-icon">
              <i className="fas fa-headset stpl-pulse-animation"></i>
            </div>
            <h2 className="stpl-highlight-main-title">24/7 Engineer Assistance</h2>
            <p className="stpl-highlight-description-text">Our team of expert engineers is available 24 hours a day, 7 days a week to provide immediate assistance for all your telecommunications needs.</p>
            <ul className="stpl-support-features-list">
              <li className="stpl-feature-list-item"><i className="fas fa-check-circle"></i> Instant Technical Support</li>
              <li className="stpl-feature-list-item"><i className="fas fa-check-circle"></i> Remote Troubleshooting</li>
              <li className="stpl-feature-list-item"><i className="fas fa-check-circle"></i> Emergency Response</li>
              <li className="stpl-feature-list-item"><i className="fas fa-check-circle"></i> On-Site Support Available</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="stpl-support-channels-section">
        <div className="stpl-channels-wrapper-container">
          <h2 className="stpl-channels-section-title">Multiple Support Channels</h2>
          <div className="stpl-channel-cards-grid">
            <div className="stpl-channel-card-item">
              <i className="fas fa-phone-alt stpl-channel-icon"></i>
              <h3 className="stpl-channel-card-title">Phone Support</h3>
              <p className="stpl-channel-card-description">Direct line to our engineers</p>
              <a href="tel:+914045474747" className="stpl-phone-number-link">040-45474747</a>
              <a href="tel:+917337369746" className="stpl-phone-number-link">+91 7337369746</a>
            </div>
            <div className="stpl-channel-card-item">
              <i className="fas fa-comments stpl-channel-icon"></i>
              <h3 className="stpl-channel-card-title">Live Chat</h3>
              <p className="stpl-channel-card-description">Instant messaging support</p>
              <a className="stpl-action-btn stpl-ticket-action-btn" onClick={() => window.open('https://wa.me/7337369746', '_blank')}>
                Start Chat
              </a>
            </div>
            <div className="stpl-channel-card-item">
              <i className="fas fa-envelope stpl-channel-icon"></i>
              <h3 className="stpl-channel-card-title">Email Support</h3>
              <p className="stpl-channel-card-description">24/7 email response</p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@stpl.network&su=Inquiry&body=Hello%20Support" target="_blank" rel="noopener noreferrer" className="stpl-email-contact-link">
                support@stpl.network
              </a>
            </div>
            <div className="stpl-channel-card-item">
              <i className="fas fa-ticket-alt stpl-channel-icon"></i>
              <h3 className="stpl-channel-card-title">Support Ticket</h3>
              <p className="stpl-channel-card-description">Create and track issues</p>
              <a href="contact.html" className="stpl-action-btn stpl-ticket-action-btn">Raise Ticket</a>
            </div>
          </div>
        </div>
      </section>

      {/* Priority Support Services */}
      <section className="stpl-priority-support-section">
        <div className="stpl-priority-content-container">
          <h2 className="stpl-priority-section-title">Priority Support Services</h2>
          <div className="stpl-priority-services-grid">
            <div className="stpl-priority-service-card">
              <div className="stpl-priority-service-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="stpl-priority-card-title">Emergency Response</h3>
              <p className="stpl-priority-card-description">Immediate assistance for critical issues with guaranteed response time of 15 minutes or less.</p>
            </div>
            <div className="stpl-priority-service-card">
              <div className="stpl-priority-service-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3 className="stpl-priority-card-title">Remote Diagnostics</h3>
              <p className="stpl-priority-card-description">Advanced remote troubleshooting and quick resolution of technical issues.</p>
            </div>
            <div className="stpl-priority-service-card">
              <div className="stpl-priority-service-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="stpl-priority-card-title">Dedicated Team</h3>
              <p className="stpl-priority-card-description">Assigned team of engineers familiar with your infrastructure and requirements.</p>
            </div>
            <div className="stpl-priority-service-card">
              <div className="stpl-priority-service-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="stpl-priority-card-title">24/7 Monitoring</h3>
              <p className="stpl-priority-card-description">Continuous monitoring of your systems to prevent potential issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Process */}
      <section className="stpl-support-process-section">
        <div className="stpl-process-content-container">
          <h2 className="stpl-process-section-title">Our Support Process</h2>
          <div className="stpl-process-steps-grid">
            <div className="stpl-process-step-item">
              <div className="stpl-process-step-number">1</div>
              <h3 className="stpl-process-step-title">Contact Us</h3>
              <p className="stpl-process-step-description">Reach out through your preferred channel</p>
            </div>
            <div className="stpl-process-step-item">
              <div className="stpl-process-step-number">2</div>
              <h3 className="stpl-process-step-title">Issue Analysis</h3>
              <p className="stpl-process-step-description">Quick assessment by our expert team</p>
            </div>
            <div className="stpl-process-step-item">
              <div className="stpl-process-step-number">3</div>
              <h3 className="stpl-process-step-title">Solution</h3>
              <p className="stpl-process-step-description">Swift implementation of resolution</p>
            </div>
            <div className="stpl-process-step-item">
              <div className="stpl-process-step-number">4</div>
              <h3 className="stpl-process-step-title">Follow-up</h3>
              <p className="stpl-process-step-description">Ensuring complete satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Status */}
      <section className="stpl-realtime-status-section">
        <div className="stpl-status-content-container">
          <h2 className="stpl-status-section-title">Support Status</h2>
          <div className="stpl-status-indicators-grid">
            <div className="stpl-status-indicator-card stpl-status-active-state">
              <i className="fas fa-phone-alt stpl-status-card-icon"></i>
              <h3 className="stpl-status-card-title">Phone Support</h3>
              <span className="stpl-status-availability-badge"><a href="tel:+917337369743">Available Now</a></span>
            </div>
            <div className="stpl-status-indicator-card stpl-status-active-state">
              <i className="fas fa-comments stpl-status-card-icon"></i>
              <h3 className="stpl-status-card-title">Live Chat</h3>
              <span className="stpl-status-availability-badge">Online</span>
            </div>
            <div className="stpl-status-indicator-card stpl-status-active-state">
              <i className="fas fa-user-tie stpl-status-card-icon"></i>
              <h3 className="stpl-status-card-title">Engineers</h3>
              <span className="stpl-status-availability-badge">On Duty</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CustomerSupport