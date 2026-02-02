import React from "react";
import "./Company.css";

const Company: React.FC = () => {
  return (
    <main>

      {/* ================= HERO SECTION ================= */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Empowering Connectivity</h1>
          <p className="hero-subtitle">
            Enterprise-Grade Solutions for Seamless Communication
          </p>
          <a
            href="contact-page.html"
            className="cta-button"
            role="button"
            tabIndex={0}
          >
            Get Started Now
          </a>
        </div>
      </header>

      {/* ================= COMPANY OVERVIEW ================= */}
      <section className="company-overview">
        <h2>Company Overview</h2>

        <p>
          Welcome to Sudhana Telecommunications Pvt Ltd (STPL). We deliver secure
          and efficient messaging and telecom solutions globally.
        </p>

        <p>
          STPL operates in all the major IT buildings within the Hyderabad region.
          With a highly qualified team of experts in ISP and Cloud Services, we
          are rapidly expanding our <strong>Gateway Services</strong> to IT/ITES
          buildings across the Telangana region.
        </p>

        <p>
          Our expertise uniquely positions us in telecommunications, enabling us
          to deploy and manage multiple services including{" "}
          <strong>Internet Leased Lines, SIP and IBS</strong>. We provide both
          wired and wireless internet solutions such as{" "}
          <strong>Wireless networks and wired networks</strong>, along with
          triple-play services, internet leased lines, and broadband solutions.
        </p>

        <p>
          With STPL, customers experience the power of seamless and secure
          connectivity whether in the office or on the move. As a dedicated{" "}
          <strong>Gateway Service Provider</strong>, we tailor telecom solutions
          to meet the unique requirements of every customer.
        </p>

        <p>
          Our services are backed by a strong, dedicated onsite support team,
          available <strong>24/7</strong>, consisting of trained and certified
          Network & System Administrators ensuring uninterrupted operations.
        </p>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-choose-us">
        <h2>Why Choose STPL?</h2>

        <div className="features-grid">
          <div className="feature-item">
            <div className="icon-circle">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/network-card.png"
                alt="Reliable Connectivity"
              />
            </div>
            <h3>Reliable Connectivity</h3>
            <p>
              Our network backbone ensures minimal downtime and seamless internet
              experience.
            </p>
          </div>

          <div className="feature-item">
            <div className="icon-circle">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/technical-support.png"
                alt="24/7 Support"
              />
            </div>
            <h3>24/7 Technical Support</h3>
            <p>
              Certified engineers are available around the clock for all support
              needs.
            </p>
          </div>

          <div className="feature-item">
            <div className="icon-circle">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/lock-2.png"
                alt="Secure Infrastructure"
              />
            </div>
            <h3>Secure Infrastructure</h3>
            <p>
              We implement end-to-end encryption and firewall systems for maximum
              security.
            </p>
          </div>

          <div className="feature-item">
            <div className="icon-circle">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/combo-chart--v1.png"
                alt="Scalable Solutions"
              />
            </div>
            <h3>Scalable Solutions</h3>
            <p>
              Our services grow with your business — from startups to large
              enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="mission-vision">
        <div className="mission-container">
          <div className="mission-text">
            <h2>Our Mission & Vision</h2>

            <p>
              At Sudhana Telecommunications Pvt Ltd (STPL), our mission is to
              empower businesses and communities with reliable and secure telecom
              infrastructure.
            </p>

            <p>
              Our vision is to become a leading force in telecommunications,
              recognized for our commitment to excellence, innovation, and
              service.
            </p>

            <p>
              As we grow, we remain rooted in our core values — integrity,
              innovation, and customer-centricity — ensuring that every
              connection we enable contributes to a smarter, more connected
              world.
            </p>
          </div>

          <div className="mission-image">
            <img src="/STPL-Innovation.png" alt="Vision and Mission" />
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="core-values">
        <div className="core-values-container">
          <h2>Our Core Values</h2>

          <div className="values-row">
            <div className="value-item">
              <h3>Integrity</h3>
              <p>
                We uphold the highest standards of integrity in all of our
                actions.
              </p>
            </div>

            <div className="value-item">
              <h3>Innovation</h3>
              <p>
                We continuously explore new technologies to deliver cutting-edge
                telecom solutions.
              </p>
            </div>

            <div className="value-item">
              <h3>Commitment</h3>
              <p>
                Our customers are our priority. We are committed to providing
                dependable service and 24/7 support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="leadership">
        <div className="leadership-container">
          <div className="section-header">
            <h2>Our Leadership</h2>
            <p>The Visionaries Behind STPL</p>
          </div>

          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-image">
                <img src="/avatar.jpg" alt="Founder & CEO" />
              </div>
              <div className="leader-info">
                <h3>Dhanababu</h3>
                <span className="position">Founder & CEO</span>
                <p>
                  With over 15 years of experience in telecommunications, leads
                  STPL's strategic vision.
                </p>
              </div>
            </div>

            <div className="leader-card">
              <div className="leader-image">
                <img src="/avatar.jpg" alt="Co-Founder & CTO" />
              </div>
              <div className="leader-info">
                <h3>Sushant Tirumala</h3>
                <span className="position">Co-Founder & CTO</span>
                <p>
                  Technical visionary with expertise in network infrastructure
                  and cloud solutions.
                </p>
              </div>
            </div>

            <div className="leader-card">
              <div className="leader-image">
                <img src="/avatar.jpg" alt="Head of Business Development" />
              </div>
              <div className="leader-info">
                <h3>Arun Kumar</h3>
                <span className="position">
                  Head of Business Development
                </span>
                <p>
                  Leads strategic partnerships and expansion initiatives across
                  new markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPANY STATS ================= */}
      <section className="company-overview-stat">
        <h2>Company Overview</h2>
        <p>
          Sudhana Telecommunications Pvt Ltd delivers cutting-edge telecom
          infrastructure solutions across Telangana.
        </p>

        <div className="overview__stats-01">
          <div className="stat">
            <h3>50+</h3>
            <p>Enterprise Clients</p>
          </div>

          <div className="stat">
            <h3>15+</h3>
            <p>Connected Buildings</p>
          </div>

          <div className="stat">
            <h3>24/7</h3>
            <p>Network Operations</p>
          </div>

          <div className="stat">
            <h3>7+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Company;
