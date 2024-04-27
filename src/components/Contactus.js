import React from 'react';
import './Contactus.css'; 

function Contactus() {
  return (
    <section className="contact-section" id='testimonials'>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-details">
            <h4 className="title">Corporate Office</h4>
            <p className="address">Plot No. 825, Udyog Vihar, Phase - V<br />Gurgaon - 122016, Haryana, India<br /></p>
            <a href="https://farzicafe.com/contact/" className="contact-button" target="_self">Contact Us</a>
          </div>
        </div>
        <div className="contact-details">
          <h4 className="title">Boardline</h4>
          <p className="subtitle">
            <a href="tel:+91-124-4235057">+91-124-4235057</a> / <a href="tel:+91-124-4235058">58</a>
          </p>
          <h4 className="title">Email</h4>
          <p className="subtitle">
            <a href="mailto:marketing@massiverestaurants.com">marketing@massiverestaurants.com</a><br />
            <a href="mailto:marcomm@massiverestaurants.com">marcomm@massiverestaurants.com</a><br />
            <a href="mailto:franchising@massiverestaurants.com">franchising@massiverestaurants.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
