import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import "./Footer.css";

const Footer = () => {
  return (
    <section
      className="stpl-footer-section"
      id="stpl-footer-section"
    >
      <div className="stpl-footer-wrapper">
        <footer className="stpl-footer" id="stpl-footer">
          <div className="stpl-footer-container">

            {/* About */}
            <div className="stpl-footer-about" id="stpl-footer-about">
              <img
                src="logo.png"
                alt="STPL Logo"
                className="stpl-footer-logo"
              />

              <p className="stpl-footer-para">
                Sudhana Telecommunications Pvt Ltd (STPL) is committed to delivering
                secure and efficient messaging solutions globally.
              </p>

              <div className="stpl-footer-social-icons">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
              </div>
            </div>

            {/* Links */}
            <FooterLinks />

            {/* Contact */}
            <FooterContact />
          </div>

          {/* Bottom Bar */}
          <div
            className="stpl-footer-bottom"
            id="stpl-footer-bottom"
          >
            <p className="stpl-footer-para">
              © 2025 Sudhana Telecommunications Pvt Ltd. All rights reserved.
            </p>

            <ul className="stpl-footer-legal">
              <li><a href="/terms">Terms</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/trust">Trust</a></li>
              <li><a href="/cookies">Cookie Preferences</a></li>
              <li><a href="/donotsellmyinfo">Do Not Sell My Info</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
