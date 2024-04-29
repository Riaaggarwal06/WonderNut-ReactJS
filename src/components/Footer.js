import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle subscribe button click
  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }
    // Open a prompt saying "Subscribed successfully"
    window.alert("Subscribed successfully");
    // Clear the email and error message after successful subscription
    setEmail("");
    setErrorMessage("");
  };

  // Function to validate email format
  const validateEmail = (email) => {
    // Regular expression for email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Function to handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear error message when user starts typing
    setErrorMessage("");
  };

  return (
    <footer>
      <label className="textemail">Subscribe to our Newsletter</label>
      <br></br>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        style={{
          margin: "20px 20px",
          textAlign: "center",
          width: "300px",
          padding: "10px 20px",
        }}
      />
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <button onClick={handleSubscribe} style={{ height: "48px", borderRadius:'10px', backgroundColor:'pink' }}>
        Subscribe
      </button>
      <div className="footerContent">
        <div className="horizontal-section">
          <div className="headings">
            <Link
              to="/"
              style={{ color: "white", width: "300px", padding: "10px 20px" }}
            >
              Home
            </Link>
          </div>
        </div>
        <div className="horizontal-section">
          <div className="headings">Our Company</div>
          <div className="vertical-section">
            {/* Replace anchor tag with Link */}
            <Link to="/aboutus" style={{ color: "white" }}>
              About Us
            </Link>
          </div>
        </div>

        <div className="horizontal-section">
          <div className="headings">
            <Link to="/contactus" style={{ color: "white" }}>
              Contact Us
            </Link>
          </div>
        </div>
        <div className="horizontal-section">
          <div className="headings">
            <Link to="/feedback" style={{ color: "white" }}>
              Feedback
            </Link>
          </div>
        </div>
        <div className="horizontal-section">
          <div className="headings">Follow Us</div>
          <div className="links">
            <div className="vertical-section">
              <a href="https://www.instagram.com/">
                <img
                  className="XNo5Ab"
                  src="https://cdn-icons-png.flaticon.com/512/174/174855.png "
                  style={{ height: "30px", width: "30px" }}
                  alt="Instagram"
                  data-csiid="9"
                  data-atf="1"
                />
              </a>
            </div>
            <div className="vertical-section">
              <a href="https://www.facebook.com/">
                <img
                  className="XNo5Ab"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png "
                  style={{ height: "30px", width: "30px" }}
                  alt="Facebook"
                  data-csiid="9"
                  data-atf="1"
                />
              </a>
            </div>
            <div className="vertical-section">
              <a href="https://twitter.com/">
                <img
                  className="XNo5Ab"
                  src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png"
                  style={{ height: "30px", width: "30px" }}
                  alt="Twitter"
                  data-csiid="9"
                  data-atf="1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
