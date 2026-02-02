import "./TeamSupport.css";

const TeamSupport = () => {
  return (
    <main>
      {/* ================= TEAM SECTION ================= */}
      <section className="team-section">
        <div className="team-container">
          <h2 className="team-title">Meet Our Team</h2>
          <p className="team-description">
            Our dedicated professionals work together to deliver innovative solutions and excellent service.
          </p>
          <div className="team-cards">
            <div className="team-card">
              <img src="//avatar.jpg" alt="Naveen" className="team-photo" />
              <h3 className="team-name">Naveen</h3>
              <p className="team-role">Techno Commercial Manager</p>
            </div>
            <div className="team-card">
              <img src="//avatar.jpg" alt="Yuva Narasimha" className="team-photo" />
              <h3 className="team-name">Yuva Narasimha</h3>
              <p className="team-role">NOC Support Head</p>
            </div>
            <div className="team-card">
              <img src="//avatar.jpg" alt="Naathan" className="team-photo" />
              <h3 className="team-name">Naathan</h3>
              <p className="team-role">Support Manager</p>
            </div>
            <div className="team-card">
              <img src="//avatar.jpg" alt="Aditya" className="team-photo" />
              <h3 className="team-name">Aditya</h3>
              <p className="team-role">Assistant Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            Have a question or request? Fill out the form below, and our team will respond promptly.
          </p>
          <form className="contact-form" action="mailto:admin@stpl.network" method="post" encType="text/plain">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="Name" placeholder="Your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="Email" placeholder="Your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="Subject" placeholder="Subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message / Request</label>
              <textarea id="message" name="Message" placeholder="Write your message here..." required />
            </div>
            <button type="submit" className="contact-btn">Send Request</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default TeamSupport;
