import React from 'react';
import "./ReservationPage.css"

function ReservationPage() {
  function submitForm() {
    var nameInput = document.getElementById('name').value;
    var phoneInput = document.getElementById('phone').value;
    var dateInput = document.getElementById('date').value;
    var timeInput = document.getElementById('time').value;
    var numberOfPeopleInput = document.getElementById('numberOfPeople').value;
    var errorMessage = document.getElementById('errorMessage');

    errorMessage.innerText = "";
    
    if (!nameInput || !phoneInput || !dateInput || !timeInput || !numberOfPeopleInput) {
      errorMessage.innerText = "Please fill out all fields";
      return;
    }
    
    if (phoneInput.length !== 10 || isNaN(phoneInput)) {
      errorMessage.innerText = "Phone number must be a 10-digit number";
      return;
    }

    var currentTime = new Date();
    var selectedTime = new Date(dateInput + " " + timeInput);
    if (selectedTime < currentTime) {
      errorMessage.innerText = "Booking Unavailable";
      return;
    }
    errorMessage.innerText = "Table Reserved"; 
  }

  return (
    <>
      <div className="mt-5 reservation">
        <h1 className="mb-4 text-center" style={{ fontSize: "50px" , textAlign: 'center'}}>Reservation Form</h1>
        <form className="reservationform">
          <div className="mb-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="date" className="col-sm-2 col-form-label">Date</label>
            <div className="col-sm-10">
              <input type="date" className="form-control" id="date" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="time" className="col-sm-2 col-form-label">Time</label>
            <div className="col-sm-10">
              <input type="time" className="form-control" id="time" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="numberOfPeople" className="col-sm-2 col-form-label" >Number of People</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                id="numberOfPeople"
                min="1"
              />
            </div>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-primary book" style={{ fontSize: "30px"}} onClick={submitForm}>Book</button>
          </div>
          <br />
          <p id="errorMessage" className="text-center text-danger"></p>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default ReservationPage;
