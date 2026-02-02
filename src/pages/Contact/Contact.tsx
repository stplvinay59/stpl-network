import "./Contact.css";

const Contact = () => {
  return (
    <main>
      {/* ================= Contact Section ================= */}
      <section className="contact-wrapper">
        <div className="contact-content">

          {/* Left Section */}
          <div className="left-section">
            <button className="contact-btn" type="button">
              Contact Us
            </button>

            <h1>We’d love to hear from you</h1>

            <p>
              Have a general inquiry about STPL or need quick support?
              We’re here to help.
            </p>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <h2>Tell us how we can help</h2>

            <form className="contact-form">
              {/* Inquiry Type */}
              <div className="form-field">
                <label htmlFor="inquiry">Inquiry Type</label>
                <select id="inquiry" name="inquiry" required>
                  <option value="">Select</option>
                  <option value="general">General</option>
                  <option value="support">Support</option>
                  <option value="sales">Sales</option>
                </select>
              </div>

              {/* Name */}
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" name="firstName" type="text" required />
                </div>

                <div className="form-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" name="lastName" type="text" required />
                </div>
              </div>

              {/* Contact */}
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" />
                </div>
              </div>

              {/* Message */}
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required />
              </div>

              <button className="submit-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= Middle Section ================= */}
      <section className="middleheading">
        <h1>Wherever you are, we are close to you</h1>

        <div className="contact-links">
          <div className="contact-item">
            <strong>Business Enquiry</strong>
            <a href="mailto:sales@stpl.network">sales@stpl.network</a>
          </div>

          <div className="contact-item">
            <strong>Support</strong>
            <a href="mailto:support@stpl.network">support@stpl.network</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
