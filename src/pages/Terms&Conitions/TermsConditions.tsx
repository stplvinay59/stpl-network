import "./TermsConditions.css";

const TermsConditions = () => {
  return (
    <main id="stpl-terms-root">

      {/* HERO SECTION */}
      <section
        className="stpl-terms-banner"
        id="stpl-terms-banner"
      >
        <div className="stpl-terms-content" id="stpl-terms-hero-content">
          <h1 id="stpl-terms-company-name">
            Sudhana Telecommunications Pvt Ltd
          </h1>
          <p>
            Your trusted partner for{" "}
            <strong>
              High-Speed Internet, Cloud, and Secure Telecom Solutions
            </strong>.
          </p>
        </div>
      </section>

      {/* TERMS */}
      <section
        className="stpl-terms-section"
        id="stpl-terms-main"
      >
        <div className="stpl-terms-container">
          <h2 className="stpl-terms-title">
            📜 Terms & Conditions
          </h2>

          <p className="stpl-terms-intro">
            Please read these Terms & Conditions carefully before using
            <strong> Sudhana Telecommunications Pvt Ltd (STPL)</strong> services.
          </p>

          {[
            "Customers must provide accurate personal information.",
            "STPL may modify or suspend services due to maintenance or legal needs.",
            "Late payments may lead to service suspension.",
            "Illegal usage, hacking, spamming, or malware is prohibited.",
            "Content must comply with copyright and local laws.",
            "Service availability may vary due to network conditions.",
            "Customers must protect account credentials.",
            "Disputes fall under Hyderabad jurisdiction.",
            "STPL may update these terms periodically.",
            "Non-compliance may lead to termination.",
            "Customers indemnify STPL against misuse claims.",
            "Continued usage confirms acceptance of these terms."
          ].map((text, index) => (
            <div
              className="stpl-terms-card"
              key={index}
              id={`stpl-terms-card-${index}`}
            >
              <p>{text}</p>
            </div>
          ))}

          <details
            className="stpl-terms-details"
            id="stpl-terms-highlights"
          >
            <summary>👁 Key Highlights</summary>
            <ul>
              <li>Accurate personal information required</li>
              <li>Transparent billing</li>
              <li>Usage data collected responsibly</li>
              <li>Indian legal jurisdiction</li>
            </ul>
          </details>
        </div>
      </section>

      {/* PRIVACY */}
      <section
        className="stpl-terms-privacy-section"
        id="stpl-terms-privacy"
      >
        <h2>🔒 Privacy Policy</h2>
        <p>
          STPL protects your personal data using industry-grade encryption.
          Read our <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>

      {/* AUP */}
      <section
        className="stpl-terms-aup-section"
        id="stpl-terms-aup"
      >
        <h2>🌐 Acceptable Use Policy</h2>
        <ul>
          <li>No spamming or phishing</li>
          <li>No hacking or exploits</li>
          <li>Respect community standards</li>
        </ul>
      </section>

      {/* BILLING */}
      <section
        className="stpl-terms-billing-section"
        id="stpl-terms-billing"
      >
        <h2>💳 Billing & Payments</h2>
        <p>
          Payments must follow the billing cycle. Late payments may suspend services.
        </p>
      </section>

      {/* LEGAL */}
      <section
        className="stpl-terms-legal-section"
        id="stpl-terms-legal"
      >
        <h2>⚖ Legal & Jurisdiction</h2>
        <p>
          Governed under Indian law with Hyderabad jurisdiction.
        </p>
      </section>

      {/* CONTACT */}
      <section
        className="stpl-terms-contact-section"
        id="stpl-terms-contact"
      >
        <h2>📞 Contact Us</h2>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:support@stpl.network">
              support@stpl.network
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href="tel:+917337369746">
              +91-7337369746
            </a>
          </li>
          <li>Hyderabad, Telangana</li>
        </ul>
      </section>

    </main>
  );
};

export default TermsConditions;
