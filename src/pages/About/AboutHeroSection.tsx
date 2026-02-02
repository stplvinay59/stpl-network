import { useEffect, useRef } from "react";
import "./About.css";
import "./AboutHeroSection.css";

const AboutHeroSection = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section-main">
      <div
        ref={heroRef}
        className="content-wrapper-about hero-scroll-reveal"
      >
        {/* Text */}
        <div className="container-right-about">
          <div className="text-container-about">
            <h1><strong>Sudhana's Messaging Solutions That Matter.</strong></h1>
            <h4>Driving Growth Through Seamless Connectivity.</h4>

            <p>
              Sudhana Telecommunications Pvt Ltd (STPL) is a leading provider of
              secure and efficient messaging solutions, specializing in SMS,
              Email, and Voice services.
            </p>

            <p>
              <strong>
                At STPL, we pride ourselves on our commitment to quality and
                customer satisfaction.
              </strong>
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="container-left-about">
          <div className="image-container-about">
            <img
              src="About-img-02.png"
              alt="STPL illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
