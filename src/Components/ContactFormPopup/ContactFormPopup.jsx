import React, { useState } from "react";
import "./ContactFormPopup.css";

const ContactFormPopup = ({  onClose }) => {

  const [loading, setLoading ] = useState(false);
  // if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      onClose();
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // You can add form handling logic here
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;

    setLoading(true);

    try{
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email,message})
      });

      if(res.ok) {
        alert("Message sent successfully!");
        onClose();
      } else{
        alert("Failed to send message.");
      }
    } catch(error) {
      alert("An error occured.");
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-form">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? (
              <span className="spinner"> Sending....</span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormPopup;
