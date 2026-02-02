// src/pages/Home/CTASection.tsx
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section" aria-label="Call to Action">
      <div className="cta-container">
        <h2>Introducing Sudhana Telecommunications Private Limited</h2>
        <p>
          Join thousands of businesses that trust Sudhana Telecommunications
          for reliable and innovative solutions. The STPL Unified Platform
          delivers comprehensive IT infrastructure, managed services, and
          advanced security solutions for enterprises. Our certified engineers
          provide 24/7 support, ensuring seamless operations and
          high-performance services. We are committed to offering the most
          advanced and unique telecommunications solutions across Telangana,
          backed by a team of highly skilled and certified professionals.
        </p>
        <a href="/" className="btn-cta">
          Get Started Today
        </a>
      </div>
    </section>
  );
};

export default CTASection;
