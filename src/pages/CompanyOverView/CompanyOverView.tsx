import "./CompanyOverView.css";
const CompanyOverView = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="stpl-company-hero-banner">
        <div className="stpl-company-hero-content-wrapper">
          <h1 className="stpl-company-hero-main-heading">Welcome to STPL</h1>
          <p className="stpl-company-hero-tagline">Empowering Connections, Enabling Progress</p>
          <div className="stpl-company-hero-stats-container">
            <div className="stpl-company-stat-item">
              <span className="stpl-stat-number-display">7+</span>
              <span className="stpl-stat-label-text">Years Experience</span>
            </div>
            <div className="stpl-company-stat-item">
              <span className="stpl-stat-number-display">1000+</span>
              <span className="stpl-stat-label-text">Happy Clients</span>
            </div>
            <div className="stpl-company-stat-item">
              <span className="stpl-stat-number-display">24/7</span>
              <span className="stpl-stat-label-text">Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description Section */}
      <section className="stpl-company-description-section">
        <div className="stpl-company-description-container">
          <div className="stpl-company-section-header">
            <h2 className="stpl-company-section-title">About STPL</h2>
            <p className="stpl-company-section-subtitle">Leading the Future of Telecommunications</p>
          </div>
          <div className="stpl-company-description-content">
            <div className="stpl-company-description-image">
              <img src="//building-connections.webp" alt="STPL Office Building" />
            </div>
            <div className="stpl-company-description-text">
              <p className="stpl-company-highlight-text">Sudhana Telecommunications Private Limited (STPL) is a premier provider of comprehensive telecommunications solutions, serving businesses across India.</p>
              <p>Founded with a vision to revolutionize the telecommunications industry, STPL has grown into a trusted partner for businesses seeking reliable, innovative, and secure communication solutions. Our state-of-the-art infrastructure and dedicated team of experts ensure that we deliver excellence in every project we undertake.</p>
              <div className="stpl-company-key-points">
                <div className="stpl-company-key-point-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Industry-leading telecommunications solutions</span>
                </div>
                <div className="stpl-company-key-point-item">
                  <i className="fas fa-check-circle"></i>
                  <span>24/7 technical support and maintenance</span>
                </div>
                <div className="stpl-company-key-point-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Nationwide network coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="stpl-company-services-overview-section">
        <div className="stpl-company-services-container">
          <div className="stpl-company-section-header">
            <h2 className="stpl-company-section-title">Our Core Services</h2>
            <p className="stpl-company-section-subtitle">Comprehensive Solutions for Modern Business</p>
          </div>
          <div className="stpl-company-services-grid">
            <div className="stpl-company-service-card">
              <i className="fas fa-network-wired stpl-company-service-icon"></i>
              <h3 className="stpl-company-service-title">Network Solutions</h3>
              <p className="stpl-company-service-description">Enterprise-grade networking infrastructure with high reliability</p>
            </div>
            <div className="stpl-company-service-card">
              <i className="fas fa-cloud stpl-company-service-icon"></i>
              <h3 className="stpl-company-service-title">Cloud Services</h3>
              <p className="stpl-company-service-description">Scalable cloud solutions for growing businesses</p>
            </div>
            <div className="stpl-company-service-card">
              <i className="fas fa-shield-alt stpl-company-service-icon"></i>
              <h3 className="stpl-company-service-title">Security Systems</h3>
              <p className="stpl-company-service-description">Advanced security protocols and protection</p>
            </div>
            <div className="stpl-company-service-card">
              <i className="fas fa-phone-alt stpl-company-service-icon"></i>
              <h3 className="stpl-company-service-title">VoIP Services</h3>
              <p className="stpl-company-service-description">Modern voice communication solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="stpl-company-vision-mission-section">
        <div className="stpl-company-vision-container">
          <div className="stpl-company-section-header stpl-company-section-header-light">
            <h2 className="stpl-company-section-title stpl-company-section-title-light">Vision & Mission</h2>
            <p className="stpl-company-section-subtitle stpl-company-section-subtitle-light">Building Tomorrow's Communication Infrastructure</p>
          </div>
          <div className="stpl-company-vision-grid">
            <div className="stpl-company-vision-card">
              <div className="stpl-company-vision-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3 className="stpl-company-vision-card-title">Our Vision</h3>
              <p className="stpl-company-vision-card-description">To be Hyderabad leading telecommunications provider, setting industry standards in innovation, reliability, and customer service.</p>
            </div>
            <div className="stpl-company-vision-card">
              <div className="stpl-company-vision-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className="stpl-company-vision-card-title">Our Mission</h3>
              <p className="stpl-company-vision-card-description">To deliver cutting-edge telecommunications solutions that empower businesses to thrive in the digital age.</p>
            </div>
            <div className="stpl-company-vision-card">
              <div className="stpl-company-vision-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="stpl-company-vision-card-title">Our Values</h3>
              <ul className="stpl-company-values-list">
                <li className="stpl-company-values-list-item">Innovation Excellence</li>
                <li className="stpl-company-values-list-item">Customer Focus</li>
                <li className="stpl-company-values-list-item">Integrity & Trust</li>
                <li className="stpl-company-values-list-item">Quality Service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="stpl-company-leadership-section">
        <div className="stpl-company-leadership-container">
          <div className="stpl-company-section-header">
            <h2 className="stpl-company-section-title">Our Leadership</h2>
            <p className="stpl-company-section-subtitle">The Visionaries Behind STPL</p>
          </div>
          <div className="stpl-company-leadership-grid">
            {/* Founder & CEO */}
            <div className="stpl-company-leader-card">
              <div className="stpl-company-leader-image">
                <img src="/avatar.jpg" alt="Founder & CEO" />
                <div className="stpl-company-leader-social-links">
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <div className="stpl-company-leader-info">
                <h3 className="stpl-company-leader-name">Sudhanshu Vardhan</h3>
                <span className="stpl-company-leader-position">Founder & CEO</span>
                <p className="stpl-company-leader-bio">With over 15 years of experience in telecommunications, leads STPL's strategic vision and growth initiatives.</p>
                <div className="stpl-company-leader-expertise">
                  <span className="stpl-company-expertise-tag">Strategic Planning</span>
                  <span className="stpl-company-expertise-tag">Innovation</span>
                  <span className="stpl-company-expertise-tag">Leadership</span>
                </div>
              </div>
            </div>

            {/* Co-Founder & CTO */}
            <div className="stpl-company-leader-card">
              <div className="stpl-company-leader-image">
                <img src="//avatar.jpg" alt="Co-Founder & CTO" />
                <div className="stpl-company-leader-social-links">
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <div className="stpl-company-leader-info">
                <h3 className="stpl-company-leader-name">Raj Kumar</h3>
                <span className="stpl-company-leader-position">Co-Founder & CTO</span>
                <p className="stpl-company-leader-bio">Technical visionary with expertise in network infrastructure and cloud solutions, driving STPL's technological advancement.</p>
                <div className="stpl-company-leader-expertise">
                  <span className="stpl-company-expertise-tag">Network Architecture</span>
                  <span className="stpl-company-expertise-tag">Cloud Computing</span>
                  <span className="stpl-company-expertise-tag">Innovation</span>
                </div>
              </div>
            </div>

            {/* Head of Business Development */}
            <div className="stpl-company-leader-card">
              <div className="stpl-company-leader-image">
                <img src="//avatar.jpg" alt="Head of Business Development" />
                <div className="stpl-company-leader-social-links">
                  <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                  <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
              <div className="stpl-company-leader-info">
                <h3 className="stpl-company-leader-name">Arun Patel</h3>
                <span className="stpl-company-leader-position">Head of Business Development</span>
                <p className="stpl-company-leader-bio">Leads strategic partnerships and expansion initiatives across new markets and sectors.</p>
                <div className="stpl-company-leader-expertise">
                  <span className="stpl-company-expertise-tag">Business Strategy</span>
                  <span className="stpl-company-expertise-tag">Market Analysis</span>
                  <span className="stpl-company-expertise-tag">Partnership Building</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CompanyOverView