import { useEffect, useRef } from "react";
import "./About.css";
import "./AboutMain.css";

const AboutMain = () => {
  const revealRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-reveal-active");
        }
      },
      { threshold: 0.3 }
    );

    if (revealRef.current) observer.observe(revealRef.current);

    return () => {
      if (revealRef.current) observer.unobserve(revealRef.current);
    };
  }, []);

  return (
    <section className="about-hero">
      <div className="about-overlay">
        <div ref={revealRef} className="about-hero-content ">
          <span className="about-hero-line"></span>
          <div className="center-left about-reveal">
          <h1>
           | Our story: <span>How we</span>
            <br />
           | <span className="highlight">uncomplicate and innovate</span>
          </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
