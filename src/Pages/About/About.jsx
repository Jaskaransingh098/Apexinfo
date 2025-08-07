import React, { useEffect, useState } from "react";
import { FaMapMarkedAlt, FaBalanceScale, FaHeadset } from "react-icons/fa";
import "./About.css";
import { motion } from "framer-motion";

function About() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Sarah Lee",
      role: "Founder",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Marco Ramirez",
      role: "Marketing",
      img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&h=400&q=80",
    },
    {
      name: "Jessica Murphy",
      role: "Service",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&h=400&q=80",
    },
  ];

  const aboutTestimonials = [
    {
      name: "Alex Foster",
      position: "CTO, Global Solutions Inc.",
      image: "/Pics/female.jpg",
      text: "Working with this team has transformed our business. Their attention to detail and commitment to excellence has resulted in a platform that not only meets our needs but exceeds our expectations in every way.",
    },
    {
      name: "Emily Carter",
      position: "CEO, TechNova",
      image: "/Pics/female.jpg",
      text: "Their team has been instrumental in our product launch. The professionalism and dedication they brought were unmatched.",
    },
    {
      name: "Daniel Reed",
      position: "Product Manager, FinLogic",
      image: "/Pics/male.jpg",
      text: "They delivered on time, with high quality and great support. We’ll definitely work with them again.",
    },
    {
      name: "Sophia Green",
      position: "Founder, GreenTech Solutions",
      image: "/Pics/female.jpg",
      text: "Impressed by their creativity and depth of knowledge. They truly understand modern tech challenges.",
    },
    {
      name: "Liam Patel",
      position: "COO, NextStep Inc.",
      image: "/Pics/male.jpg",
      text: "Our digital transformation became a reality thanks to their expert team and agile process.",
    },
  ];

  const services = [
    {
      title: "On-Ground Operations",
      text: "We help you execute at scale across India — from warehousing and delivery to staffing and infrastructure setup.",
      icon: <FaMapMarkedAlt size={32} color="#2e7d32" />,
    },
    {
      title: "Market Entry & Compliance",
      text: "Navigate complex regulations, register entities, and stay compliant across Indian states with Apex’s legal and operational support.",
      icon: <FaBalanceScale size={32} color="#2e7d32" />,
    },
    {
      title: "Customer & Tech Support",
      text: "Deliver multilingual support, onboarding, and field engagement — tailored for Indian consumers and enterprise clients.",
      icon: <FaHeadset size={32} color="#2e7d32" />,
    },
  ];

  const features = [
    {
      title: "Execution Expertise",
      description:
        "From field ops to legal filings, we bring on-ground muscle to turn strategies into real results.",
      icon: "fa-cogs",
    },
    {
      title: "Pan-India Reach",
      description:
        "We operate in metros and remote regions alike — bridging scale with consistency.",
      icon: "fa-route",
    },
    {
      title: "End-to-End Ownership",
      description:
        "We don’t just consult — we execute, manage, report, and improve continuously.",
      icon: "fa-hands-helping",
    },
    {
      title: "Trust & Transparency",
      description:
        "Track every step of your India operations with real-time reports and clear SLAs.",
      icon: "fa-shield-alt",
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) =>
        prevIndex === aboutTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonialIndex, isHovered]);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section
        className="about-hero-section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.6 }}
      >
        <div className="about-hero-overlay"></div>
        <div className="about-container about-hero-content">
          {/* <p className="about-hero-tagline">Learn • Innovate • Grow</p>  */}
        </div>
      </motion.section>

      <section className="innovative-text">
        <h2 className="about-section-title">
          Innovative Solutions for the Future
        </h2>
      </section>

      {/* Solutions Section */}
      <motion.section
        className="about-solutions-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <div className="about-container">
          <div className="about-solutions-flex">
            <motion.div
              className="about-solutions-content"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="about-solutions-info">
                <h3 className="about-subsection-title">
                  Grounded Solutions for Global Scale
                </h3>
                <p className="about-section-text">
                  At Apex, we bridge the gap between strategy and execution
                  across India. Whether you're building digital platforms,
                  managing logistics, or entering new markets, we provide the
                  operational muscle and local insight to help your business
                  grow — reliably, efficiently, and compliantly.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="about-solutions-image"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img
                src="/Pics/online-remote-video-conference-call-260nw-2201625089 1.webp"
                alt="Technology Illustration"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="about-services-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className="about-container">
          <motion.h2
            className="about-section-title about-text-center"
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Local Execution. Global Vision.
          </motion.h2>

          <div className="about-services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="about-service-card"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="about-service-icon">{service.icon}</div>
                <h3 className="about-service-title">{service.title}</h3>
                <p className="about-service-text">{service.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Ingenuity Section */}
      <motion.section
        className="about-ingenuity-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <div className="about-container">
          <div className="about-ingenuity-flex">
            <motion.div
              className="about-ingenuity-video"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="about-video-container">
                <video
                  src="/Pics/About-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="about-video"
                />
              </div>
            </motion.div>
            <motion.div
              className="about-ingenuity-content"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="about-section-title">
                Built for Complexity. Trusted for Delivery.
              </h2>
              <p className="about-section-text">
                Apex exists to solve real-world challenges through structured
                execution. From startups entering India to global enterprises
                scaling across it, we combine local intelligence with
                disciplined operations to deliver results — faster, cleaner, and
                fully compliant.
              </p>
              <button className="about-primary-button">Discover More</button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="about-experience-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="about-container">
          <h2 className="about-section-title about-text-center">
            Where Experience Meets Execution
          </h2>
          <div className="about-features-grid">
            {features.map((feature, i) => {
              const sizeClasses = [
                "card-size-small",
                "card-size-medium",
                "card-size-large",
              ];
              const randomSizeClass =
                sizeClasses[Math.floor(Math.random() * sizeClasses.length)];

              return (
                <motion.div
                  className={`about-feature-card ${randomSizeClass}`}
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 20 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="about-feature-icon">
                    <i className={`fas ${feature.icon}`}></i>
                  </div>
                  <h3 className="about-feature-title">{feature.title}</h3>
                  <p className="about-feature-text">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="about-testimonials-section">
        <div className="about-container">
          <h2 className="about-section-title about-text-center">
            Genuine Feedback, Honest Opinions
          </h2>
          <div className="about-testimonial-card">
            <div
              className="about-testimonial-content"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="about-quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <p className="about-testimonial-text">
                {aboutTestimonials[testimonialIndex].text}
              </p>

              <div className="about-client-avatars">
                {aboutTestimonials.map((t, index) => (
                  <img
                    key={index}
                    src={t.image}
                    alt={t.name}
                    className={`about-client-avatar ${
                      index === testimonialIndex ? "active-avatar" : ""
                    }`}
                    onMouseEnter={() => setTestimonialIndex(index)}
                  />
                ))}
              </div>

              <div className="about-client-info">
                <p className="about-client-name">
                  {aboutTestimonials[testimonialIndex].name}
                </p>
                <p className="about-client-position">
                  {aboutTestimonials[testimonialIndex].position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <motion.section
        className="about-team-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="about-container">
          <h2 className="about-section-title about-text-center">
            Our Dedicated Team
          </h2>
          <div className="about-team-grid">
            {teamMembers.map((member, i) => (
              <motion.div
                className="about-team-member"
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="about-member-image"
                />
                <h3 className="about-member-name">{member.name}</h3>
                <p className="about-member-position">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}
    </div>
  );
}

export default About;
