import React from 'react';
// import { Carousel } from 'react-bootstrap'; // Import the Carousel component from react-bootstrap

function LandingPage() {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" interval="1500">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="Third slide" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
