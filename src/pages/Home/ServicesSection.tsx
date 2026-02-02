import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <section className="core-services">
      <div className="core-services-header">
        <h2>Our Core Services</h2>
        <p>
          Internet, Cloud, Security & IT Services all delivered through a reliable, scalable, and future-ready digital infrastructure.
        </p>
      </div>

      <div className="core-services-grid">
        <div className="core-service-card">
          <h3>Managed IT Services</h3>
          <p>
            Optimize your IT infrastructure with professional managed services
            that reduce operational burden and improve performance.
          </p>
          <span className="service-tag">IT Infrastructure</span>
        </div>

        <div className="core-service-card">
          <h3>Internet Leased Line</h3>
          <p>
            Reliable, high-speed, dual-redundancy internet leased lines designed
            to boost business productivity.
          </p>
          <span className="service-tag">High Availability</span>
        </div>

        <div className="core-service-card">
          <h3>SIP Trunking Solutions</h3>
          <p>
            Advanced SIP trunking with call analytics, auto attendants, real-time
            monitoring, and call recording.
          </p>
          <span className="service-tag">Voice Solutions</span>
        </div>

        <div className="core-service-card">
          <h3>In-Building Solutions</h3>
          <p>
            Strong in-building networks for offices, hospitals, and commercial
            spaces ensuring seamless connectivity.
          </p>
          <span className="service-tag">Enterprise Coverage</span>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
