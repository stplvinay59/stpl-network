import React from "react";
import { Link } from "react-router-dom";
import "./DontSellMyInfo.css";


const DontsellMyInfo: React.FC = () => {
  return (
    <main>
      <div className="dnsmi-container">
        <h1>Do Not Sell My Personal Information</h1>

        <p>
          At STPL, we respect your privacy and are committed to protecting your
          personal information. If you are a California resident, you have the
          right to request that we do not sell your personal information to third
          parties.
        </p>

        <p>
          Please use the form below to submit your request. We will process your
          request promptly and ensure your information is not sold.
        </p>

        <form className="dnsmi-form" action="#" method="POST">
          <label htmlFor="dnsmi-name">Full Name:</label>
          <input
            type="text"
            id="dnsmi-name"
            name="name"
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="dnsmi-email">Email Address:</label>
          <input
            type="email"
            id="dnsmi-email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="dnsmi-text">Enter your Text:</label>
          <input
            type="text"
            id="dnsmi-text"
            placeholder="Enter your text"
          />

          <button type="submit">Submit Request</button>
        </form>

        <p className="dnsmi-note">
          Note: Your information will be handled according to our{" "}
         <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
      </div>
    </main>
  );
};

export default DontsellMyInfo;
