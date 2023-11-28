import React from 'react';
import "./Navigation.css";


const Navigation = () => {

  return (
    <nav className = "navbar">
      <img src={`${process.env.PUBLIC_URL}/Group 2.png`} alt="ACME logo" className = "logo"/>
      <div className = "navbar-items">
        <a href="/" className = "nav-item">Home</a>
        <a href="#/projectlist" className = "nav-item">Projects</a> {/* Orange color for active or highlighted item */}
        <a href="#/projectform" className = "nav-item">New Project</a>
      </div>
      <div className = "profile">
        <a href="#/login">
            <img src={`${process.env.PUBLIC_URL}/Customer.png`} alt="Profile" className = "profile"/> 
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
