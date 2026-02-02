import React from "react";
import "./Services-IT.css";

const ServicesIT: React.FC = () => {
    return (
        <section className="it-page">

            {/* ================= OUR SERVICES ================= */}
            <section className="section-services-card">
                <h2>Our Services</h2>

                <div className="services-card-section">
                    <div className="s-card">Internet Leased Lines (ILL)</div>
                    <div className="s-card">Telephones (Landline)</div>
                    <div className="s-card">VoIP Services</div>
                    <div className="s-card">Cloud Collaboration</div>
                    <div className="s-card">In Building Solutions (IBS)</div>
                    <div className="s-card">DTH Service for Corporate Offices</div>
                    <div className="s-card">24/7 Support</div>
                    <div className="s-card">Maintain Infrastructure</div>
                </div>
            </section>

            {/* ================= BUILDINGS ================= */}
            <section className="section-buildings">
                <h2>Major IT Buildings Currently Handled By STPL</h2>

                <p className="para">
                    STPL is operating in all major IT buildings across the Hyderabad region.
                    With a highly qualified team and extensive experience in ISP and cloud
                    services, we continue to expand gateway services to every IT and ITES
                    building in Telangana. Experience lightning-fast speeds, unmatched
                    reliability, and enterprise-grade connectivity with our dedicated
                    Internet Leased Lines.
                </p>

                <h4>
                    Below are the projects connected and maintained by{" "}
                    <strong>Sudhana Telecommunications Pvt Ltd</strong>
                </h4>

                <ul className="building-list">
                    <li>AUROBINDO ORBIT</li>
                    <li>AUROBINDO REALITY GALAXY</li>
                    <li>DSL ABACUS IT PARK</li>
                    <li>GOWRA FOUNTAINHEAD</li>
                    <li>GOWRA PALLADIUM</li>
                    <li>GOWRA PLAZA</li>
                    <li>PURAVANKARA - PURVA SUMMIT</li>
                    <li>RAJAPUSHPA PARADIGM</li>
                    <li>RAJAPUSHPA SUMMIT</li>
                    <li>RMZ MY HOME - SKYVIEW - TOWER 10 (NON-SEZ)</li>
                    <li>RMZ MY HOME - SKYVIEW TOWER 20 (SEZ)</li>
                    <li>RMZ NEXITY</li>
                    <li>THE SPIRE</li>
                    <li>SALARPURIA SATTVA KNOWLEDGE CITY (PARCEL 4 AND ORWELL)</li>
                    <li>SANDHYA ELITE</li>
                    <li>SANDHYA TECHNO PARK & SBR SIRI</li>
                    <li>SLN ONE WEST</li>
                    <li>DALLAS CENTER</li>
                    <li>CMR ONE VAJRAM</li>
                    <li>MEENAKSHI TOWERS</li>
                </ul>
            </section>

            {/* ================= TELECOM PARTNERS ================= */}
            <section className="section partners">
                <h2>Our Telecom Partners</h2>

                <div className="partners-grid">
                    {[
                        { src: "Tata.png", alt: "Tata Communications" },
                        { src: "airtel.png", alt: "Airtel" },
                        { src: "ttsl.jpg", alt: "Tata Tele Business Services" },
                        { src: "bsnl.png", alt: "BSNL" },
                        { src: "jio.png", alt: "Jio" },
                        { src: "Sify--1.png", alt: "Sify" },
                        { src: "act.png", alt: "ACT" },
                        { src: "vi.png", alt: "Vodafone Idea" },
                    ].map((logo) => (
                        <div className="partner-card" key={logo.alt}>
                            <img src={`//${logo.src}`} alt={logo.alt} />
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= INFRA PARTNERS ================= */}
            <section className="section-infrapartners">
                <h2>Our Infrastructure Partners</h2>

                <div className="infrapartners-grid">
                    {[
                        { src: "PURVA.png", alt: "Puravankara" },
                        { src: "gowra_ventures_logo.jpg", alt: "Gowra Ventures" },
                        { src: "rmz.png", alt: "RMZ Corp" },
                        { src: "auroreality.jpg", alt: "Aurobindo Realty" },
                        { src: "rajpushap.png", alt: "Rajapushpa Properties" },
                        { src: "terminus.png", alt: "Terminus" },
                        { src: "dsl.jpg", alt: "DSL" },
                        { src: "salarpuria-sattva.png", alt: "Salarpuria Sattva" },
                        { src: "preston-developers.jpeg", alt: "Preston Developers" },
                    ].map((logo) => (
                        <div className="infrapartner-card" key={logo.alt}>
                            <img src={`//${logo.src}`} alt={logo.alt} />
                        </div>
                    ))}
                </div>
            </section>

        </section>
    );
};

export default ServicesIT;
