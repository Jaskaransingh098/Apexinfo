import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiGlobe, FiHeadphones, FiTrendingUp } from "react-icons/fi";
import ContactFormPopup from "../ContactFormPopup/ContactFormPopup";
import {
  FaGlobe,
  FaComments,
  FaTools,
  FaWallet,
  FaHandshake,
  FaUserCircle,
  FaInstagram,
  FaCampground,
  FaFire,
  FaTint,
  FaHotTub,
  FaHiking,
  FaPaintBrush,
  FaCalculator,
  FaLaptopCode,
} from "react-icons/fa";
import {
  MdOutlineImportExport,
  MdOutlinePeople,
  MdOutlineCode,
  MdLabel,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import "./Body.css";

function Body() {
  const [showForm, setShowForm] = useState(false);
  const homeVideoRef = useRef(null);
  const MotionLink = motion(Link);

  const [hoveredCard, setHoveredCard] = useState(null);

  const expertiseItems = [
    {
      icon: <MdLabel size={32} />,
      title: "Annotation & Labelling Services",
      description: "Accurate data annotation for AI and machine learning.",
      link: "/annotion",
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: "Domestic Trade Assistance",
      description:
        "Support for local business operation and trade within India.",
        link: "/domestic",
    },
    // {
    //   icon: <MdOutlineImportExport size={32} />,
    //   title: "International Trade Assistance",
    //   description: "End-to-end solutions for global trade operations.",
    //   link: "/",
    // },
    {
      icon: <MdOutlineSupportAgent size={32} />,
      title: "Call Center Services",
      description: "24/7 professional customer support solutions.",
      link: "/callcenter",
    },
    {
      icon: <FaCalculator size={32} />,
      title: "Accounting Services",
      description: "Reliable bookkeeping and financial management services.",
      link: "/accounting",
    },
    {
      icon: <FiGlobe size={32} />,
      title: "Data Management & Support",
      description: "Organized, secure, and scalable data solutions.",
      link: "/data",
    },
    {
      icon: <FaPaintBrush size={32} />,
      title: "Creative Design Services",
      description: "Brand-focused graphic, UI/UX, and visual content design.",
      link: "/creative",
    },
    {
      icon: <MdOutlineCode size={32} />,
      title: "Software Development",
      description: "Custom software and backend solutions tailored to needs.",
      link: "/software",
    },
    {
      icon: <FaLaptopCode size={32} />,
      title: "Website Development Services",
      description: "Fast, responsive, and SEO-ready websites.",
      link: "/website",
    },
  ];

  const features = [
    {
      icon: <FaGlobe />,
      title: "Local Expertise with Global Standards",
      description:
        "We bring local market insights while meeting global benchmarks.",
    },
    {
      icon: <FaComments />,
      title: "Transparent Communication",
      description: "Clear , honest, and timely updates every step of the way.",
    },
    {
      icon: <FaTools />,
      title: "Customized Solutions",
      description: "Tailored strategies to fit your unique business challenges",
    },
    {
      icon: <FaWallet />,
      title: "Affordable & Scalable Support",
      description:
        "Start small and scale seamlessly with cost-effective solutions.",
    },
    {
      icon: <FaHandshake />,
      title: "Trusted by Global Clients",
      description:
        "Our partners trust us to deliver, from startups to enterprises.",
    },
  ];

  const industries = [
    {
      title: "E-commerce & retail",
      img: "/Pics/e-commerce.jpg",
      link: "/e-commerce",
    },
    {
      title: "Healthcare & medical",
      img: "/Pics/healthcare.jpg",
      link: "/healthcare",
    },
    {
      title: "Technology & Saas",
      img: "/Pics/saas.jpg",
      link: "/technology",
    },
    {
      title: "Manufacturing",
      img: "/Pics/manufacturingjpg.jpg",
      link: "/manufacturing",
    },
    {
      title: "Logistics & transportation",
      img: "/Pics/logistics.jpg",
      link: "/logistics",
    },
    {
      title: "Financial services",
      img: "/Pics/Financial services.jpg",
      link: "/financial",
    },
  ];

  const steps = [
    {
      title: "Share Your Requirement",
      description:
        "Tell us what you need - sourcing, outsourcing, marketing, or tech",
    },
    {
      title: "Get a Tailored Plan",
      description: "We'll send a proposal with timeline, pricing, and scope.",
    },
    {
      title: "We Get to Work",
      description: "Your local team starts execution with regular updates.",
    },
    {
      title: "Grow and Scale",
      description: "Expand services or scale volume as you grow.",
    },
  ];

  const services = [
    {
      title: "Domestic Trade Support",
      points: [
        "Sourcing & Vendor identification",
        "Local negotiation & deal finalization",
        "Quality assurance & payment coordination",
        "Warehousing & inventory handling",
      ],
      color: "#6C63FF",
    },
    {
      title: "Import & Export Support",
      points: [
        "Customs clearance & regulatory documentation",
        "Freight coordination (port-to-door)",
        "Partner vetting & compliance management",
        "Real-time shipment updates",
      ],
      color: "#B26CFF",
    },
    {
      title: "Digital Marketing Services",
      points: [
        "SEO for indian search trends",
        "Paid Ads (Meta, Google, LinkedIn India",
        "Local content creation (multi-languages)",
        "Brand reputation & social media growth",
      ],
      color: "#6C63FF",
    },
    {
      title: "Business Process Outsourcing (BPO)",
      points: [
        "Customer service (phone, email, chat)",
        "Lead generation & follow-ups",
        "Back-office operations",
        "Accounting & bookkeeping",
      ],
      color: "#6CB9FF",
    },
    {
      title: "Technical Recruitment & Staffing",
      points: [
        "IT talent sourcing & screening",
        "Offshore team setup",
        "Remote developer placements",
        "Technical project management",
      ],
      color: "#FFD233",
    },
    {
      title: "Software & Backend Work Outsourcing",
      points: [
        "Web & mobile app development",
        "Backend systems & automation",
        "Dedicated development teams",
        "Quality assurance & maintenance",
      ],
      color: "#34C759",
    },
  ];

  const testimonials = [
    {
      text: "Apex Infotech helped us source high-quality products from India with full transparency. We felt confident every step of the way.",
      username: "Amanda R., USA",
    },
    {
      text: "They built our offshore tech team and continue to manage them like clockwork. Highly recommended.",
      username: " Felix B., UK",
    },
    {
      text: "Excellent back-office support. It’s like having a fully-functioning Indian branch without the cost or stress.",
      username: "Natalia W., Canada",
    },
    {
      text: "Apex Infotech helped us source high-quality products from India with full transparency. We felt confident every step of the way.",
      username: "Amanda R., USA",
    },
    {
      text: "They built our offshore tech team and continue to manage them like clockwork. Highly recommended.",
      username: " Felix B., UK",
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question:
        "What makes Apex InfoTech Solutions diffrent from other outsourcing companies?",
      answer:
        "We provide not just services but hands-on, customized execution tailored to each client's goals. Our approach is human, transparent, and results-focused.",
    },
    {
      question: "Is Apex InfoTech Solutions suitable for small businesses?",
      answer:
        "Absolutey. We are desgined to support SMEs looking for trustworthy local execution in india without setting up a full-fledged office.",
    },
    {
      question: "Can I visit the vendors pr team you work with in India?",
      answer:
        "Yes, and we encourage it. We can help you plan factory visits or office meet-ups to build trust and understanding.",
    },
    {
      question: "What are your pricing models?",
      answer:
        "We offer flexible pricing - monthly retainers, per-project rates, or full-time resource billing depending on your need.",
    },
    {
      question: "How quickly can you start?",
      answer:
        "Most projects start within 7 days aafter agreement. Urgent requirements can be prioritized.",
    },
  ];

  const rowVariants = {
    hiddenLeft: { opacity: 0, x: -150 },
    hiddenRight: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay },
    }),
  };
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const smoothScrollToServices = () => {
    const target = document.getElementById("industries");
    if (!target) return;

    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 3000;
    let start = null;

    window.requestAnimationFrame(function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(
        0,
        easeInOutCubic(progress, startPosition, distance, duration)
      );
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    });
  };

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }
  const leftZoomIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.25, duration: 0.6, ease: "easeOut" },
    }),
  };
  const sectionFade = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardStagger = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  const slowDownVideo = () => {
    if (homeVideoRef.current) {
      homeVideoRef.current.playbackRate = 0.6;
    }
  };

  useEffect(() => {
    slowDownVideo();
  }, []);

  const [industryActiveIndex, industrySetActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);

  const options = [
    {
      title: "E-commerce & retail",
      img: "/Pics/e-commerce.jpg",
      link: "/e-commerce",
    },
    {
      title: "Healthcare & medical",
      img: "/Pics/healthcare.jpg",
      link: "/healthcare",
    },
    {
      title: "Technology & Saas",
      img: "/Pics/saas.jpg",
      link: "/technology",
    },
    {
      title: "Manufacturing",
      img: "/Pics/manufacturingjpg.jpg",
      link: "/manufacturing",
    },
    {
      title: "Logistics & transportation",
      img: "/Pics/logistics.jpg",
      link: "/logistics",
    },
    {
      title: "Financial services",
      img: "/Pics/Financial services.jpg",
      link: "/financial",
    },
  ];

  const handleOptionHover = (index) => {
    if (index !== industryActiveIndex) {
      industrySetActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers = [];
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [options.length]);

  return (
    <main>
      <div className="background-wrapper">
        <video
          ref={homeVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          {/* Make sure this path is correct based on your public folder */}
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay">
          <motion.div
            className="homepage-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <div className="hero">
              <h1 className="headline">
                Driving Your Business to its{" "}
                <span className="headline-new">Apex</span>
              </h1>
              <p className="subheadline">
                Transforming the Business Process industry globally to fuel
                growth, expand markets and enhance delivery for our client
                partners
              </p>
              <div className="cta-buttons">
                <button className="btn primary">
                  <a href="/consultant">Book a Free Consultation</a>
                </button>
                <button
                  className="btn secondary"
                  onClick={() => smoothScrollToServices()}
                >
                  Explore Our Industries
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="main-body">
        <section className="expertise-section">
          <h2>Our Expertise</h2>
          <div className="expertise-container">
            {expertiseItems.map((item, index) => {
              const half = Math.floor(expertiseItems.length / 2);
              const fromDirection = index < half ? -100 : 100;

              return (
                <MotionLink
                  to={item.link}
                  key={index}
                  className="expertise-card"
                  // className={`expertise-card ${
                  //   hoveredCard !== null && hoveredCard !== index
                  //     ? "blurred"
                  //     : ""
                  // }`}
                  // onMouseEnter={() => setHoveredCard(index)}
                  // onMouseLeave={() => setHoveredCard(null)}
                  initial={{ opacity: 0, x: fromDirection, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0,
                    ease: "easeOut",
                  }}
                >
                  <div className="expertise-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </MotionLink>
              );
            })}
          </div>
        </section>

        {/* <section className="why-choose-us-section">
          <div className="why-choose-us-header">
            <motion.img
              src="/Pics/why choose us 1.png"
              alt=""
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>

          <div className="why-choose-us-flex">
            {features.map((item, index) => (
              <motion.div
                className="why-card"
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.8, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: index * 0,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.95, rotateX: 0 }}
              >
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section> */}

        <section className="home-cta-section">
          <div className="home-cta-text">
            Ready to embark on a journey of transformation? Your next step to
            success is just a click away.
          </div>
          <button className="home-cta-button">
            <a href="">Unlock Your Transformative Journey</a>
          </button>
        </section>

        <section className="our-services-selector-body" id="industries">
          {/* Header Section */}
          <div className="our-services-header-container">
            <h1 className="our-services-animate-fadeInTop our-services-delay-300">
              Our Industries
            </h1>
          </div>

          <div className="our-services-spacer"></div>

          {/* Options Container */}
          <div className="our-services-options-container">
            {options.map((option, index) => (
              <a
                key={index}
                href={option.link}
                // target="_blank"
                rel="noopener noreferrer"
                className={`our-services-option 
          ${industryActiveIndex === index ? "our-services-active" : ""} 
          ${animatedOptions.includes(index) ? "our-services-visible" : ""}`}
                style={{ backgroundImage: `url('${option.img}')` }}
                onMouseEnter={() => handleOptionHover(index)}
              >
                <div className="our-services-shadow"></div>

                <div className="our-services-label">
                  {/* <div className="our-services-icon">{option.icon}</div> */}
                  <div className="our-services-info">
                    <div className="our-services-main">{option.title}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* <section className="industries-section" id="industries">
          <h2 className="section-title">Industries we serve</h2>
          <div className="industries-grid">
            {[0, 1, 2].map((rowIndex) => {
              const first = industries[rowIndex * 2];
              const second = industries[rowIndex * 2 + 1];
              const isOdd = rowIndex % 2 === 0;

              return (
                <motion.div
                  className="industries-row"
                  key={rowIndex}
                  initial={isOdd ? "hiddenLeft" : "hiddenRight"}
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={rowVariants}
                >
                  <motion.a
                    href={first.link}
                    className={`industries-link ${isOdd ? "sixty" : "forty"}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    custom={0}
                    variants={cardVariants}
                  >
                    <div className="industries-card">
                      <img src={first.img} alt={first.title} />
                      <div className="card-title-overlay">{first.title}</div>
                    </div>
                  </motion.a>
                  <motion.a
                    href={second.link}
                    className={`industries-link ${isOdd ? "sixty" : "forty"}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    custom={0.2}
                    variants={cardVariants}
                  >
                    <div
                      className={`industries-card ${isOdd ? "narrow" : "wide"}`}
                    >
                      <img src={second.img} alt={second.title} />
                      <div className="card-title-overlay">{second.title}</div>
                    </div>
                  </motion.a>
                </motion.div>
              );
            })}
          </div>
        </section> */}

        <section className="how-works-section">
          <div className="how-works-wrapper">
            <motion.div
              className="how-works-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={leftZoomIn}
            >
              <h4 className="how-works-subheading">How It Works</h4>
              <h2 className="how-works-heading">Get started with Ease</h2>
              <p className="how-works-description">
                Follow these simple steps to get your project up and running
                smoothly.
              </p>
              <motion.button
                className="how-we-button"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="/consultant">Get Started</a>
              </motion.button>
            </motion.div>

            <div className="how-works-right">
              {steps.map((step, index) => (
                <motion.div
                  className="how-works-step"
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={stepVariants}
                >
                  <div className="step-number">{index + 1}</div>
                  <div className="step-text">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="services-section">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionFade}
          >
            Services
          </motion.h2>
          <motion.p
            className="services-subtitle"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={sectionFade}
            transition={{ delay: 0.2 }}
          >
            Here are a few of the awesome services we provide.
          </motion.p>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                className="service-card"
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={cardStagger}
                style={{ borderColor: service.color }}
              >
                <h3>{service.title}</h3>
                <hr style={{ borderColor: service.color }} />
                <ul>
                  {service.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section> */}

        <section className="testimonials-section">
          <h2 className="testimonials-title">
            See Why Clients Keep Coming Back
          </h2>

          <div className="testimonials-wrapper">
            <div className="fade-left"></div>
            <div className="fade-right"></div>

            <div className="testimonials-slider">
              {duplicatedTestimonials.map((testimonial, index) => (
                <motion.div
                  className="testimonial-card"
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <p>{testimonial.text}</p>
                  <div className="testimonial-footer">
                    <div className="testimonial-user-info">
                      <FaUserCircle className="user-dp" />
                      <p className="testimonial-username">
                        {testimonial.username}
                      </p>
                    </div>
                    <div className="instagram-icon">
                      {/* <FaInstagram className="instagram-icon-img" /> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="faq-container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            Explore Common Questions
          </motion.h1>

          <div className="faq-list">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                layout
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: false }}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3>{faq.question}</h3>
                  <motion.span
                    className="arrow-icon"
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    &#9662;
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      {showForm && <ContactFormPopup onClose={() => setShowForm(false)} />}
    </main>
  );
}

export default Body;
