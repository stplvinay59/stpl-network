import React from "react";
import "./RequestCallback.css";

interface Card {
  title: string;
  description: string;
  buttonText: string;
  href: string;
  external?: boolean;
}

const cards: Card[] = [
  {
    title: "Request a Call Back",
    description: "We will be happy to address your queries.",
    buttonText: "Click Here",
    href: "/cust-support",
  },
  {
    title: "Connect on WhatsApp",
    description: "📱 1800 266 1111",
    buttonText: "WhatsApp",
    href: "https://wa.me/7337369743",
    external: true,
  },
  {
    title: "Support",
    description: "support@stpl.network",
    buttonText: "Email Us",
    href: "mailto:support@stpl.network",
  },
];

const RequestCallback: React.FC = () => {
  return (
    <section className="connect-section">
      <div className="connect-container">
        <h2 className="connect-heading">Connect With Us</h2>

        <div className="card-container">
          {cards.map((card, index) => (
            <div key={index} className="card blue-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a
                href={card.href}
                className="card-btn"
                {...(card.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {card.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequestCallback;
