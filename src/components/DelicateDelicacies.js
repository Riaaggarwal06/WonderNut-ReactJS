import './DelicateDelicacies.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import React from 'react';

function DelicateDelicacies() {
  return (
    <div className="ftmenu">
      <div className="row mt-5">
        <div className="col-md-12 text-center">
          <h3 className="mb-4 featured-menu">
            <div className="featured-menu">
              <span className="feat">D</span>elicate<br />
              <span className="menu">Delicacies</span>
            </div>
          </h3>
          <p className="description">Taste the best of our elaborate spread that has been our customer's favorite made with
            only the best and the freshest ingredients.</p>
          <p className="description">Click on the dish to order.</p>
        </div>
      </div>
      <div id="carouselFeaturedMenu" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex justify-content-between align-items-center" style={{ marginRight: '150px', marginLeft: '150px' }}>
            <Link to="/menu">
                <img src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1712299356_Belgian.jpg" className="d-block mx-3" style={{ width: '350px', height: '250px', border:'1px solid black'}} alt="..." />
              </Link>
              <Link to="/menu">
                <img src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1689651225_PowderedStrawberry.jpg" className="d-block mx-3" style={{ width: '350px', height: '250px', border:'1px solid black'}} alt="..." />
              </Link>
              <Link to="/menu">
                <img src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1697275428_1627485363Mangomasti.jpg" className="d-block mx-3" style={{ width: '350px', height: '250px', border:'1px solid black'}} alt="..." />
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-between align-items-center" style={{ marginRight: '150px', marginLeft: '150px' }}>
              <Link to="/menu">
                <img src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1712299330_ChocoFudge.jpg" className="d-block mx-3" style={{ width: '350px', height: '250px', border:'1px solid black'}} alt="..." />
              </Link>
              <Link to="/menu">
                <img src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1617352206_Originalglazed1.jpg" className="d-block mx-3" style={{ width: '350px', height: '250px', border:'1px solid black'}} alt="..." />
              </Link>
              <Link to="/menu">
                <img src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1697275684_1627485303Chocolatedreamcake1.jpg" className="d-block mx-3" style={{ width: '350px', height: '250px', border:'1px solid black'}} alt="..." />
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex justify-content-between align-items-center" style={{ marginRight: '150px', marginLeft: '150px' }}>
              <Link to="/menu">
                <img src="https://www.thespruceeats.com/thmb/qB63P8d50_HR5JMhdbwGvcFgKjE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolate-milkshake-4587581-hero-1-22c8a039103c413dafd75f4f4c39ddd4.JPG" className="d-block mx-3" style={{ width: '350px', height: '250px', border:'1px solid black'}} alt="..." />
              </Link>
              <Link to="/menu">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGEJzyJDR6_inDtjzve_edLCkv4ycCVc2Rk0cQD6ze9A&s" className="d-block mx-3" style={{ width: '350px', height: '250px', border:'1px solid black'}} alt="..." />
              </Link>
              <Link to="/menu">
                <img src="https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/menus/original/1622559018_FilterCoffee.jpg" className="d-block mx-3" style={{ width: '350px', height: '250px', border:'1px solid black'}} alt="..." />
              </Link>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselFeaturedMenu" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselFeaturedMenu" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default DelicateDelicacies;
