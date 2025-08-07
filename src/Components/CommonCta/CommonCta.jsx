import React from "react";
import "./commonCta.css";

function CommonCta() {
  const PhoneIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  const MailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );

  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M16.75 13.96c.25.13.42.2.55.35.13.15.2.33.2.55s-.07.4-.2.55c-.13.15-.3.23-.55.35-.25.13-.58.2-.98.2h-.2c-.48 0-.95-.08-1.4-.23-.45-.15-.85-.38-1.2-.68-.35-.3-.65-.65-.9-1-.25-.35-.45-.75-.6-1.2-.15-.45-.23-.93-.23-1.43s.08-.95.23-1.4c.15-.45.38-.85.68-1.2.3-.35.65-.65 1-.9.35-.25.75-.45 1.2-.6.45-.15.93-.23 1.43-.23h.2c.4 0 .73.07.98.2.25.13.42.2.55.35.13.15.2.33.2.55s-.07.4-.2.55c-.13.15-.3.23-.55.35-.25.13-.5.2-.7.2h-.1c-.25 0-.48.04-.68.13-.2.08-.38.2-.5.35-.13.15-.23.34-.3.55-.08.2-.13.43-.13.68s.05.48.13.68c.08.2.2.38.3.5.13.13.28.23.45.3.18.08.38.13.58.13h.1c.2 0 .43-.04.68-.13.25-.08.45-.2.6-.35.15-.15.25-.3.3-.5.05-.18.08-.38.08-.58s-.03-.38-.08-.53zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.73 0 3.37-.44 4.8-1.25l3.2 1.25-1.25-3.2C19.56 17.37 20 15.73 20 14c0-5.52-4.48-10-10-10zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
    </svg>
  );

  
  return (
    <div className="commonCta-section-container">
      <div className="commonCta-left-panel">
        <h2>Talk to Our Experts</h2>
        <p>Schedule Your Free Consultation</p>
      </div>
      <div className="commonCta-right-panel">
        <div className="commonCta-info-item">
          <PhoneIcon />
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </div>
        <div className="commonCta-info-item">
          <MailIcon />
          <a href="mailto:experts@example.com">experts@example.com</a>
        </div>
        <div className="commonCta-info-item">
          <WhatsAppIcon />
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
        <div className="commonCta-privacy-policy">
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}

export default CommonCta;
