// import Digital from "./Digital";
import "./Home.css";
import { useEffect, useRef } from "react";
import ServicesSection from "./ServicesSection";
import CTASection from "./CTASection";

interface MainCardItem {
  id: number;
  image: string;
  tag: string;
  description: string;
  type: "internet" | "managed" | "infrastructure" | "security";
}

const cards: MainCardItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    tag: "INTERNET",
    description:
      "High-speed, reliable internet connectivity with scalable plans and 24/7 support.",
    type: "internet",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?q=80&w=1171",
    tag: "MANAGED NETWORKS",
    description:
      "End-to-end network monitoring, management, and optimization.",
    type: "managed",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1762163516269-3c143e04175c?q=80&w=1176",
    tag: "IT INFRASTRUCTURE",
    description:
      "Servers, storage, and cloud solutions tailored to your business.",
    type: "infrastructure",
  },
  {
    id: 4,
    image:
      "https://securitybrief.com.au/uploads/story/2022/08/05/GettyImages-1296650655.webp",
    tag: "SECURITY",
    description:
      "Enterprise-grade physical and digital security solutions.",
    type: "security",
  },
];

const Home = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  /* Pause animation on hover */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.addEventListener("mouseenter", () => {
      track.style.animationPlayState = "paused";
    });

    track.addEventListener("mouseleave", () => {
      track.style.animationPlayState = "running";
    });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="Home-wrapper">
        <div className="Home-content">
          <h1 className="Heading">
            Welcome to <span>Sudhana Telecommunications</span>
          </h1>
          <p className="Paragraph">
            Experience the future of communication with your regional messaging
            solutions provider.
          </p>
        </div>
      </section>

      {/* CARD SCROLLER */}
      <section className="maincard">
        <div className="maincard__track" ref={trackRef}>
          {[...cards, ...cards].map((card, index) => (
            <article className="maincard__card" key={`${card.id}-${index}`}>
              <div className="maincard__image">
                <img src={card.image} alt={card.tag} />
              </div>

              <div className="maincard__content">
                <span className={`tag tag--${card.type}`}>{card.tag}</span>
                <p>{card.description}</p>
                <a href="#">Explore More →</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* < Digital /> */}
      < CTASection />
      < ServicesSection />

    </>
  );
};

export default Home;
