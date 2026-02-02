import "./About.css";

import AboutMain from "./AboutMain";
import AboutHeroSection from "./AboutHeroSection";
import CompanyOverview from "./CompanyOverview";
import CompanyInfo from "./CompanyInfo";
import RequestCallback from "./RequestCallback";


const About = () => {
  return (
    <>
      <AboutMain />
      <AboutHeroSection />
      <CompanyOverview />
      <CompanyInfo />
      <RequestCallback />



      {/* ===== Video Section ===== */}
      <section className="video-section">
        <video controls autoPlay muted playsInline>
          <source src="/about-video-01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>





    </>
  );
};

export default About;
