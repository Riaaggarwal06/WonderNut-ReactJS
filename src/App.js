import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import ReservationPage from './components/ReservationPage';
import Menu from './components/Menu'; 
import Feedback from './components/Feedback';
import Contactus from './components/Contactus';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
