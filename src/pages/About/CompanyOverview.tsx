import { useEffect, useRef } from "react";
import "./About.css";
import "./CompanyOverview.css";

const CompanyOverview = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="main-about-heading">
      <div ref={sectionRef} className="about-heading scroll-reveal">
        <h1>
          Reliable Connectivity May Seem Unattainable—But It Can Be Achieved
        </h1>
        <p>
          Businesses struggle with inconsistent speeds and downtime.
          <br />
          At STPL, we eliminate fragmented infrastructure with integrated
          connectivity solutions.
        </p>
      </div>
    </section>
  );
};

export default CompanyOverview;
