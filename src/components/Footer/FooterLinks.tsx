import { NavLink } from "react-router-dom";
import "./Footer.css";

const FooterLinks = () => {
  return (
    <>
      {/* Company */}
      <div className="stpl-footer-links" id="stpl-footer-links-company">
        <h4>Company</h4>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/company">Company</NavLink></li>
        </ul>
      </div>

      {/* Support */}
      <div className="stpl-footer-help" id="stpl-footer-links-support">
        <h4>Support</h4>
        <ul>
          <li><NavLink to="/faq">FAQ</NavLink></li>
          <li><NavLink to="/team-support">Team Support</NavLink></li>
          <li><NavLink to="/privacypolicy">Privacy Policy</NavLink></li>
          <li><NavLink to="/terms">Terms & Conditions</NavLink></li>
        </ul>
      </div>

      {/* Useful Links */}
      <div className="stpl-footer-help" id="stpl-footer-links-useful">
        <h4>Useful Links</h4>
        <ul>
          <li><NavLink to="/technical-support">Technical Support</NavLink></li>
          <li><NavLink to="/customer-support">Customer Support</NavLink></li>
          <li><NavLink to="/business-support">Business Support</NavLink></li>
          <li><NavLink to="/company-overview">Company Overview</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default FooterLinks;
