import React from 'react';
import Story from './Story'
import DelicateDelicacies from './DelicateDelicacies';
import './LandingPage.css'


function LandingPage() {
  return (
    <div className='wholeLanding'>
    <div id="carouselExample" className="carousel slide landing" style={{margin:'0px 200px'}}>
      <div className="carousel-inner ">
        <div className="carousel-item active" style={{border:'1px solid black'}}>
        <img src="https://images.unsplash.com/photo-1533137015-38dbe301e281?q=80&w=2982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100 " alt="Fifth slide" style={{ height: "675px", width: "1200px" }}/>
        </div>
        <div className="carousel-item " style={{border:'1px solid black'}}>
        <img src="https://cdn.britannica.com/38/230838-050-D0173E79/doughnuts-donuts.jpg" className="d-block w-100 " alt="Fourth slide" style={{ height: "675px", width: "1200px" }} />
        </div>
        <div className="carousel-item " style={{border:'1px solid black'}}>
        <img src="https://www.brproud.com/wp-content/uploads/sites/80/2022/06/donuts-g72bd71e15_1920.jpg?strip=1" className="d-block w-100 " alt="First slide" style={{ height: "675px", width: "1200px" }} />
        </div>
        <div className="carousel-item " style={{border:'1px solid black'}}>
          <img src="https://media.istockphoto.com/id/465529983/photo/field-of-different-types-of-donuts.jpg?s=612x612&w=0&k=20&c=J1yVwdu0KlQ5JTJ8aEVlFRrshPDDkvYrORfDYsWbIR8=" className="d-block w-100 " alt="Second slide" style={{ height: "675px", width: "1200px" }} />
        </div>
        <div className="carousel-item " style={{border:'1px solid black'}}>
        <img src="https://media.istockphoto.com/id/611902362/photo/one-dozen-glazed-donuts-in-a-box.jpg?s=612x612&w=0&k=20&c=JyZfv7ezBoWcePMTauBEaTMZRfQwL5jMTsBPDpjnzqk=" className="d-block w-100 " alt="Third slide" style={{ height: "675px", width: "1200px" }} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
    </div>
    <DelicateDelicacies/>
    <Story/>
    </div>
  );
}

export default LandingPage;
