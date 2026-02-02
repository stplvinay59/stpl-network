// TechnicalSupport.tsx
import React from "react";
import "./TechnicalSupport.css";

const TechnicalSupport: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="tech-support-hero"
        aria-labelledby="tech-support-title"
      >
        <div className="hero-content">
          <h1 id="tech-support-title">Technical Support Center</h1>
          <p>
            Get expert help and resources for all your telecommunications needs
          </p>
        </div>
      </section>

      {/* Quick Support */}
      <section id="quick-support" className="quick-support">
        <div className="support-container">
          <h2>Quick Support Actions</h2>

          <div className="support-cards">
            <div className="support-card">
              <i className="fas fa-headset" aria-hidden="true"></i>
              <h3>24/7 Support</h3>
              <p>Contact our technical team anytime</p>
              <a href="#contact" className="support-btn">
                Get Help
              </a>
            </div>

            <div className="support-card">
              <i className="fas fa-ticket-alt" aria-hidden="true"></i>
              <h3>Submit Ticket</h3>
              <p>Create a support ticket for detailed assistance</p>
              <a href="#ticket" className="support-btn">
                Raise Ticket
              </a>
            </div>

            <div className="support-card">
              <i className="fas fa-book" aria-hidden="true"></i>
              <h3>Knowledge Base</h3>
              <p>Access our technical documentation</p>
              <a href="#kb" className="support-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section id="solutions" className="common-issues">
        <div className="issues-container">
          <h2>Support & Solutions</h2>

          <div className="issues-grid">
            <div className="issue-item">
              <h3>Network Connectivity</h3>
              <ul>
                <li>Internet Connection Issues</li>
                <li>Network Configuration</li>
                <li>Speed Optimization</li>
                <li>Router Setup</li>
              </ul>
            </div>

            <div className="issue-item">
              <h3>VoIP Services</h3>
              <ul>
                <li>Voice Quality Issues</li>
                <li>Call Setup Problems</li>
                <li>SIP Configuration</li>
                <li>Echo Troubleshooting</li>
              </ul>
            </div>

            <div className="issue-item">
              <h3>Security Solutions</h3>
              <ul>
                <li>Firewall Configuration</li>
                <li>VPN Setup</li>
                <li>Security Patches</li>
                <li>Threat Prevention</li>
              </ul>
            </div>

            <div className="issue-item">
              <h3>Data Services</h3>
              <ul>
                <li>Data Backup Solutions</li>
                <li>Cloud Integration</li>
                <li>Storage Management</li>
                <li>Data Recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Resources */}
      <section id="resources" className="tech-resources">
        <div className="resources-container">
          <h2>Technical Resources</h2>

          <div className="resources-grid">
            <div className="resource-card">
              <i className="fas fa-file-pdf"></i>
              <h3>Product Manuals</h3>
              <p>Detailed documentation for all our products</p>
              <a href="#manuals">View Manuals</a>
            </div>

            <div className="resource-card">
              <i className="fas fa-video"></i>
              <h3>Video Tutorials</h3>
              <p>Step-by-step guides and tutorials</p>
              <a href="#tutorials">Watch Now</a>
            </div>

            <div className="resource-card">
              <i className="fas fa-tools"></i>
              <h3>Troubleshooting Tools</h3>
              <p>Diagnostic and repair tools</p>
              <a href="#tools">Access Tools</a>
            </div>

            <div className="resource-card">
              <i className="fas fa-download"></i>
              <h3>Downloads</h3>
              <p>Software updates and utilities</p>
              <a href="#downloads">Download Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section id="contact" className="contact-support">
        <div className="contact-container">
          <h2>Need Additional Help?</h2>

          <div className="contact-options">
            <div className="contact-option">
              <i className="fas fa-phone-alt"></i>
              <h3>Call Support</h3>
              <p><a href="tel:04045474747">040-45474747</a></p>
              <p><a href="tel:+919515999449">+91 9515999449</a></p>
            </div>

            <div className="contact-option">
              <i className="fas fa-envelope"></i>
              <h3>Email Support</h3>
              <p><a href="mailto:support@stpl.network">support@stpl.network</a></p>
              <p><a href="mailto:tech@stpl.network">tech@stpl.network</a></p>
            </div>

            <div className="contact-option">
              <i className="fas fa-comments"></i>
              <h3>Live Chat</h3>
              <p>Available 24/7</p>
              <button className="chat-btn">Start Chat</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnicalSupport;
