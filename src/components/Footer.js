import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";


function Footer() {
  return (
    <footer>
      <label className="textemail">Subscribe to our Newsletter</label>
      <br></br>
      <input
        type="text"
        placeholder="Email"
        style={{ margin: "20px auto", textAlign: "center" }}
      />
      <button>Subscribe</button>
      <div className="footerContent">
        <div className="horizontal-section">
          <div className="headings">
          <Link to="/" style={{ color: "white" }}>
              Home
            </Link>
            </div>
        </div>
        <div className="horizontal-section">
          <div className="headings">Our Company</div>
          <div className="vertical-section">
            {/* Replace anchor tag with Link */}
            <Link to="/about" style={{ color: "white" }}>
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
            </Link></div>
        </div>
        <div className="horizontal-section">
  <div className="headings">Follow Us</div>
  <div className="vertical-section">
    <a href="https://www.instagram.com/">
      <img
        className="XNo5Ab"
        src="https://image.flaticon.com/icons/png/512/87/87390.png"
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
        src="https://image.flaticon.com/icons/png/512/87/87390.png"
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
        src="https://image.flaticon.com/icons/png/512/87/87390.png"
        style={{ height: "30px", width: "30px" }}
        alt="Twitter"
        data-csiid="9"
        data-atf="1"
      />
    </a>
  </div>
</div>

      </div>
    </footer>
  );
}

export default Footer;
