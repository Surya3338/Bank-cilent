import React from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div>
      <header className="hero">
        <h1 className="animate__animated animate__fadeInDown">Welcome to Your Bank</h1>
        <p className="animate__animated animate__fadeInUp">Secure, Reliable, and Convenient Banking.</p>
      </header>
      <div className="conat">

      <section className="services">
        <h2 className="animate__animated animate__fadeIn">Our Services</h2>
        <div className="service animate__animated animate__zoomIn">
          <h3>Personal Banking</h3>
          <p>Manage your account, pay bills, and more.</p>
        </div>
        <div className="service animate__animated animate__zoomIn">
          <h3>Loans</h3>
          <p>Apply for personal, home, and auto loans.</p>
        </div>
        <div className="service animate__animated animate__zoomIn">
          <h3>Investment</h3>
          <p>Plan your future with our investment services.</p>
        </div>
      </section>
      <div className="imageBox">
        <img src="C:\Users\surya\Downloads\Unlock Top Best Passive Income Ideas to Boost Your Earnings in 2024.jpeg"/>
      </div>
      </div>
      
    </div>
  );
}

export default Home;