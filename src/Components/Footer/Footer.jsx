import React, { useEffect, useRef } from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Script load error for ${src}`));
      document.body.appendChild(script);
    });
  };

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

  const ChatIcon = () => (
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
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

  const LocationIcon = () => (
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
  const mapQuery =
    "Hennur Bagalur Main Rd, Kuvempu Layout, Kothanur, Bengaluru, Karnataka 560077";
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    mapQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <footer className="footer">
      <div className="contact-map-wrapper">
        <h2 className="contact-map-main-title">Get In Touch With Us</h2>
        <p className="contact-map-sub-title">
          We're here to help, 24/7. Reach out to us through any of the channels
          below.
        </p>

        <div className="contact-map-container">
          {/* Left Side: Contact Details */}
          <div className="contact-details-panel">
            <div className="contact-info-group">
              <div className="contact-info-item">
                <PhoneIcon />
                <a href="tel:800-514-7456">800-514-7456</a>
              </div>
              <div className="contact-info-item">
                <ChatIcon />
                <a href="/live-chat">Live chat with us</a>
              </div>
              <div className="contact-info-item">
                <MailIcon />
                <a href="mailto:info@flatworldsolutions.com">
                  info@flatworldsolutions.com
                </a>
              </div>
            </div>

            <div className="address-group">
              <div className="address-item">
                <h3 className="country-title">
                  <LocationIcon /> INDIA
                </h3>
                <p>Survey No.11, 3rd Floor, Indraprastha, Gubbi Cross, 81.</p>
                <p>
                  Hennur Bagalur Main Rd, Kuvempu Layout, Kothanur, Bengaluru,
                  Karnataka 560077
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Google Maps Embed */}
          <div className="google-map-panel">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </div>
      <motion.div
        className="footer-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            id: 1,
            content: (
              <>
                <div className="logo">
                  <div className="logo-icon">🔷</div>
                  <h2>Apex InfoTech Solutions</h2>
                </div>
                <p className="description">
                  Apex Infotech Solutions helps global businesses simplify their
                  India operations. We work with international clients seeking
                  trade support, BPO services, technical staffing, and digital
                  marketing in the Indian market. Our team acts as your local
                  partner, handling the heavy lifting so you can focus on
                  strategy and growth.
                </p>
              </>
            ),
          },
          {
            id: 2,
            content: (
              <>
                <h3>Company</h3>
                <div className="underline"></div>
                <ul>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                  <li>
                    <a href="/consultant">Contact</a>
                  </li>
                  <li>
                    <a href="/privacypolicy">Privacy Policy</a>
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 3,
            content: (
              <>
                <h3>Blog</h3>
                <div className="underline"></div>
                <ul>
                  <li>
                    <a href="/blog">
                      How to Source Safely from India Without Visiting
                    </a>
                  </li>
                  <li>
                    <a href="/blog">
                      The True Cost Benefits of Outsourcing to India in 2025
                    </a>
                  </li>
                  <li>
                    <a href="/blog">
                      Digital Marketing in India: What Global Brands Need to
                      Know
                    </a>
                  </li>
                  <li>
                    <a href="/blog">See More...</a>
                  </li>
                </ul>
              </>
            ),
          },
          {
            id: 4,
            content: (
              <>
                <h3>Connect With Us</h3>
                <div className="underline"></div>
                <div className="contact-info">
                  <span className="contact-icon">📞</span>
                  <span>+91-7895663417</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>contact@apexinfotechsolutions.com</span>
                </div>
                {/* <div className="social-icons">
                  <FaFacebook />
                  <FaTwitter />
                  <FaGithub />
                  <FaYoutube />
                </div> */}
              </>
            ),
          },
        ].map((section, i) => (
          <motion.div
            className="footer-section"
            key={section.id}
            variants={fadeInUp}
            custom={i}
          >
            {section.content}
          </motion.div>
        ))}
      </motion.div>

      <div className="footer-bottom">
        <p>© 2025 Apex Infotech Solutions. All Rights Reserved.</p>
        <p>Designed with care for global business pioneers.</p>
      </div>
    </footer>
  );
}

export default Footer;
