import React, { useEffect, useRef, useState } from "react";
import "./CompanyInfo.css";

interface SectionContent {
  heading?: string;
  paragraphs: string[];
}

const companyContent: SectionContent = {
  paragraphs: [
    "Sudhana Telecommunications Private Limited (STPL) operates across all major IT buildings located in Hyderabad and is expanding gateway services to every IT/ITES building in Telangana. Our highly qualified team brings esteemed experience in ISP and Cloud services.",
    "We specialize in deploying multiple services including Data, Voice, Video, and IBS—offering both wired and wireless solutions like DSL, ADSL, Metro Ethernet, and GPON with triple play services, ILL, and Broadband. With strong onsite support and 24/7 certified network administrators, STPL ensures reliability and unique solutions for every customer.",
    "STPL is operating in all Major IT Buildings located in Hyderabad Region. We have a Highly Qualified Team with Esteem Experience in ISP and Cloud Services, and we are expanding our Gateway Services to each and every IT/ITES Building in Telangana Region. We deliver the mobility benefits of truly wired/wireless internet, whether inside or outside the office. The STPL team has strong dedicated Onsite Support with 24/7 Trained and Certified Network & System Administrators."
  ]
};

const transformContent: SectionContent = {
  heading: "Transforming the Way IT Infrastructure Connects, Communicates, and Grows",
  paragraphs: [
    "At STPL, we are redefining connectivity for the digital age. With operations rooted in the heart of Hyderabad's major IT hubs, we are on a mission to revolutionize how businesses experience internet and communication technologies. Founded with a vision to bridge every IT/ITES building in Telangana with high-quality internet and telecom services, Sudhana Telecommunications Pvt Ltd brings together a team of highly qualified professionals with deep expertise in ISP, cloud, and infrastructure solutions."
  ]
};

// Scroll fade-in hook
const useScrollFadeIn = (direction = "up", duration = 1, delay = 0) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    style: {
      transform: visible
        ? "translateY(0)"
        : direction === "up"
        ? "translateY(20px)"
        : "translateY(-20px)",
      opacity: visible ? 1 : 0,
      transition: `all ${duration}s ease ${delay}s`,
    },
  };
};

const CompanyInfo: React.FC = () => {
  const fadeInCompany = useScrollFadeIn("up", 1, 0.2);
  const fadeInTransform = useScrollFadeIn("up", 1, 0.4);

  return (
    <>
      <section {...fadeInCompany} className="company-section">
        <header className="company-header">
          <h1>
            <span className="highlight-orange">Sudhana</span>{" "}
            <span className="highlight-blue">Telecommunications</span>{" "}
            <span className="highlight-green">Private</span>{" "}
            <span className="highlight-brown">Limited</span> (STPL)
          </h1>
        </header>
        {companyContent.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </section>

      <section {...fadeInTransform} className="transform-section">
        {transformContent.heading && <h2>{transformContent.heading}</h2>}
        {transformContent.paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </section>
    </>
  );
};

export default CompanyInfo;
