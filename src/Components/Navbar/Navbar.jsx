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
            Apex Info Tech
            <br />
            <span className="logo-subtext">Solutions</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Career</Link>
          </li>
        </ul>
        <button className="demo-button">
          <Link href="/consultant">Contact Us</Link>
        </button>
      </nav>
      <div className="services-bar">
        <Link to="/annotion">Annotion & Labelling Services</Link>
        <Link to="/domestic">Domestic & International Trade Assistance</Link>
        <Link to="/callcenter">Call Center Services</Link>
        <Link to="/data">Data Management & Support Services</Link>
        <Link to="/creative">Creative Design Services</Link>
        <Link to="/software">Software development</Link>
        <Link to="/accounting">Accounting Services</Link>
        <Link to="/website">Website Development Services</Link>
        <Link to="/digital">Digital Marketing Services</Link>
      </div>
      {/* {showForm && <ContactFormPopup onClose={() => setShowForm(false)} />} */}
    </>
  );
}

export default Navbar;
