import React from "react";
import "./ServiceHome.css";


const ServiceMain: React.FC = () => {
  return (
    <main>
      {/* ==================== HERO SECTION ==================== */}
        <section className="service-hero">
        <h2 id="serviceHeroTitle" className="service-hero__title">
          Everything You Need, All in One Place
        </h2>

        <h4 className="service-hero__subtitle">
          Your trusted partner for internet bandwidth, managed networks, and IT
          infrastructure services.
        </h4>
      </section>

    </main>
  );
};

export default ServiceMain;