import React, { useState, useRef } from "react";
import "./Consultant.css";
import {
  FaMapMarkedAlt,
  FaProjectDiagram,
  FaShieldAlt,
  FaRegFileAlt,
  FaUserFriends,
  FaChartLine,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Consultant() {
  const [loading, setLoading] = useState(false);
  const faqs = [
    {
      question: "How do I get started?",
      answer:
        "Just email us at xyz@gmail.com or WhatsApp us directly — we’ll get back to you quickly.",
    },
    {
      question: "Do I need to be in India to work with you?",
      answer:
        "No, we work with international clients remotely and provide end-to-end local support.",
    },
    {
      question: "Is the consultation really free?",
      answer:
        "Yes, our first consultation is completely free — just contact us by email or WhatsApp, no commitment needed.",
    },
    {
      question: "What industries do you support?",
      answer:
        "We support IT, retail, manufacturing, logistics, digital services, and more.",
    },
    {
      question: "How long is each consultation?",
      answer:
        "Typically, consultations last between 30-45 minutes depending on your goals.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page-content">
      <section className="consultation-hero-section">
        {/* Background Image */}
        <div className="consult-hero-image" />

        {/* Floating Cards */}
        <motion.div
          className="floating-contact-cards"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="contact-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaEnvelope className="contact-icon" />
            <h3>Email Us</h3>
            <p>
              Have questions or ideas to discuss? Drop us a mail and our team
              will get back within 24 hrs.
            </p>
            <a href="mailto:xyz@gmail.com">
              contact@apexinfotechsolutions.com{" "}
            </a>
          </motion.div>

          <motion.div
            className="contact-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            <FaWhatsapp className="contact-icon" />
            <h3>WhatsApp Us</h3>
            <p>
              Want a quick conversation? Chat with our support team anytime on
              WhatsApp.
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91-7895663417
            </a>
          </motion.div>

          <motion.div
            className="contact-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <FaPhoneAlt className="contact-icon" />
            <h3>Discovery Call</h3>
            <p>
              No forms, no hassle. Just ping us and we'll schedule a quick call
              tailored to your goals.
            </p>
            <span style={{ color: "#2eb1e5", fontWeight: 600 }}>
              Let’s connect today.
            </span>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        className="contact-us-consult-section contact-us-why-section contact-us-fade-in"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          Why Reach Out to Us?
        </motion.h2>

        <motion.div
          className="contact-us-zigzag-grid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-us-info-card contact-us-large-card contact-us-align-start">
            <FaMapMarkedAlt size={40} color="#2eb1e5" />
            <h3>Localized Insight</h3>
            <p>
              Understand the Indian market with expert guidance tailored to your
              business domain. Our team brings in-depth regional knowledge,
              including regulatory nuances, cultural buying behavior, and local
              competition. Whether you're entering a Tier 1 metro or targeting
              an emerging city, We equip you with actionable, on-ground
              intelligence — just reach out to get started.
            </p>
          </div>

          <div className="contact-us-info-card contact-us-medium-card contact-us-align-end">
            <FaProjectDiagram size={36} color="#2eb1e5" />
            <h3>Custom Strategy</h3>
            <p>
              Get actionable, personalized solutions across trade, staffing, or
              digital needs. We don't believe in cookie-cutter approaches —
              every plan is crafted to align with your business goals,
              operational model, and growth stage. From go-to-market roadmaps to
              digital transformation blueprints, we turn your challenges into
              opportunities. Just email or WhatsApp us to begin.
            </p>
          </div>

          <div className="contact-us-info-card contact-us-small-card contact-us-align-start">
            <FaShieldAlt size={32} color="#2eb1e5" />
            <h3>Zero Risk</h3>
            <p>
              It's free, fast, and focused — no strings attached, just insight
              and opportunity. You walk away with clarity, not commitments.
              Think of it as your strategic first step to validate your idea,
              test the waters, or explore possibilities — without investing
              resources upfront. There’s no cost, no pressure — just real
              insights shared over a quick call. Contact us anytime via email or
              WhatsApp.
            </p>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="consult-section how-section fade-in"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="how-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>

        <div className="how-flex-container">
          {/* Left Image */}
          <motion.div
            className="how-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <img src="/Pics/how it works,jpg.jpg" alt="" />
          </motion.div>

          {/* Steps Column */}
          <div className="how-steps-column">
            {[
              {
                icon: <FaRegFileAlt className="step-icon" />,
                title: "1. Reach Out",
                desc: "Email or WhatsApp us with your query or business goals.",
                delay: 0.2,
              },
              {
                icon: <FaUserFriends className="step-icon" />,
                title: "2. We'll Connect",
                desc: "We’ll respond promptly to schedule a virtual consultation.",
                delay: 0.4,
              },
              {
                icon: <FaChartLine className="step-icon" />,
                title: "3. Get Expert Guidance",
                desc: "Receive tailored advice and actionable strategies based on your needs.",
                delay: 0.6,
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                className="step-card fade-slide"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: step.delay }}
              >
                {step.icon}
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        className="consult-faq-section fade-in"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Frequently Asked Questions</h2>
        <div className="consult-faq-container">
          {faqs.map((faq, index) => {
            const contentRef = useRef(null);
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                className={`consult-faq-item ${isActive ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="consult-faq-question">
                  <span>{faq.question}</span>
                  {isActive ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <div
                  ref={contentRef}
                  className="consult-faq-answer"
                  style={{
                    maxHeight: isActive
                      ? `${contentRef.current?.scrollHeight}px`
                      : "0px",
                    transition: "max-height 0.4s ease",
                    overflow: "hidden",
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
}

export default Consultant;
