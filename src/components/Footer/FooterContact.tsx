import "./Footer.css";

const FooterContact = () => {
  return (
    <div
      className="stpl-footer-contact"
      id="stpl-footer-contact"
    >
      <h4>Contact Us</h4>

      <p>
        <i className="fa-solid fa-envelope" />
        <a href="mailto:admin@stpl.network">admin@stpl.network</a>
      </p>

      <p>
        <i className="fa-solid fa-phone" />
        <a href="tel:04045474747">040-45474747</a>
      </p>

      <p>
        <i className="fa-solid fa-phone" />
        <a href="tel:+919515999449">+91 9515999449</a>
      </p>

      <p>
        <i className="fa-solid fa-location-dot" />
        <a
          href="https://www.google.com/maps/place/SUDHANA+TELECOMMUNICATIONS+PVT+LTD/"
          target="_blank"
          rel="noreferrer"
        >
          Hyderabad, Telangana, India.
        </a>
      </p>
    </div>
  );
};

export default FooterContact;
