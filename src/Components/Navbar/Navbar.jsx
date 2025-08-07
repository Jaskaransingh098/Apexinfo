import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import ContactFormPopup from "../ContactFormPopup/ContactFormPopup";

function Navbar() {
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo-text">
            ApexInfoTech
            <br />
            <span className="logo-subtext">Solutions</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About us</a>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Career</Link>
          </li>
        </ul>
        <button className="demo-button">
          <a href="/consultant">Contact Us</a>
        </button>
      </nav>
      <div className="services-bar">
        <Link to="/annotion">Annotion & Labelling Services</Link>
        <Link to="/domestic">Domestic & International Trade Assistance</Link>
        <Link to="/callcenter">Call Center Services</Link>
        <Link to="/data">Data Management & Support Services</Link>
        <Link to="/services/creative-design">Creative Design Services</Link>
        <Link to="/services/creative-design">Software development</Link>
        <Link to="/accounting">Accounting Services</Link>
        <Link to="/services/creative-design">Website Development Services</Link>
        <Link to="/services/creative-design">Digital Marketing Services</Link>
        <Link to="/services/creative-design">Import & Export Assistance</Link>
      </div>
      {/* {showForm && <ContactFormPopup onClose={() => setShowForm(false)} />} */}
    </>
  );
}

export default Navbar;
