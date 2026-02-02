import React from "react";
import "./Trust.css";

const Trust: React.FC = () => {
  return (
    <main>
      {/* TRUST HERO */}
      <section className="trust-section">
        <div className="container-trust-homepage">
          <h1 className="headline">Enablement Starts With Trust</h1>
          <p className="description">
            At Sudhana Telecommunications Pvt Ltd (STPL), we earn trust through
            security, compliance, and privacy-driven telecom solutions.
          </p>

          <div className="btn-homepage">
            <a href="#request-demo" className="btn-h btn-primary">
              Request a Demo
            </a>
            <a href="#download-security" className="btn-h btn-outline">
              Download Security Overview
            </a>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="compliance">
        <h2>Compliance</h2>
        <p>We follow strict regulatory and security standards.</p>

        <div className="compliance-grid">
          <div className="compliance-item">
            <i className="fas fa-shield-halved compliance-icon"></i>
            <h3>Secure Network</h3>
            <p>Encrypted and resilient infrastructure.</p>
          </div>

          <div className="compliance-item">
            <i className="fas fa-building-shield compliance-icon"></i>
            <h3>DOT Compliant</h3>
            <p>Aligned with Department of Telecommunications.</p>
          </div>

          <div className="compliance-item">
            <i className="fas fa-balance-scale compliance-icon"></i>
            <h3>TRAI Aligned</h3>
            <p>Ensuring fairness and privacy.</p>
          </div>
        </div>
      </section>

      {/* TRUST CONNECTION */}
      <section className="trust-connection">
        <div className="trust-text">
          <h2>Trusted Connections</h2>
          <p>Reliable, secure, and high-performance connectivity.</p>
        </div>

        <div className="trust-video">
          <video src="/Trust-Video.mp4" autoPlay muted loop playsInline />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <h2>See How STPL Can Help You Connect Faster</h2>
        <div className="cta-buttons-advanced">
          <a href="#request-demo" className="cta-button">
            Request Demo
          </a>
          <a href="/contact" className="cta-button">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default Trust;
