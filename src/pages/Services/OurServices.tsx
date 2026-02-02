// import React from "react";
import "./OurServices.css";

const servicesData = [
  {
    icon: "fa-solid fa-wifi",
    title: "Internet Bandwidth",
    description:
      "High-speed, reliable internet connectivity for businesses of all sizes, with scalable plans and 24/7 support.",
  },
  {
    icon: "fa-solid fa-network-wired",
    title: "Managed Networks",
    description:
      "End-to-end network management, monitoring, and optimization to ensure seamless business operations.",
  },
  {
    icon: "fa-solid fa-server",
    title: "IT Infrastructure",
    description:
      "Comprehensive IT infrastructure solutions including servers, storage, and cloud integration tailored to your needs.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Security",
    description:
      "Ensuring physical security of server rooms and enforcing standardized protocols across the system environment.",
  },
];

const OurServices = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2>Our IT & Networking Services</h2>
        <p className="services-intro">
          Explore our comprehensive suite of <span className="highlight">IT and networking solutions</span> designed to
          empower your business.
        </p>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
