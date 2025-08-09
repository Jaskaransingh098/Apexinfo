import React from "react";
import CommonCta from "../../../Components/CommonCta/CommonCta";
import "./Digital.css";

function Digital() {
  const SeoIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
  const PpcIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14l-4-4h8l-4 4z" />
    </svg>
  );
  const SocialIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
  const CheckmarkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const services = [
    {
      icon: <SeoIcon />,
      title: "Search Engine Optimization (SEO)",
      description:
        "We help you climb search rankings through technical audits, on-page optimization, keyword targeting, and high-quality backlinking.",
    },
    {
      icon: <PpcIcon />,
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "We manage Google Ads, Meta Ads, and more — built on lean, conversion-driven strategies that maximize ROI.",
    },
    {
      icon: <SocialIcon />,
      title: "Social Media Marketing",
      description:
        "Our experts create and manage engaging social media campaigns tailored to your audience — increasing brand awareness and conversions.",
    },
    {
      icon: <SeoIcon />,
      title: "Content Marketing & Blogging",
      description:
        "We craft original, SEO-optimized content tailored to your brand tone. From blog posts to whitepapers, every word is written to convert.",
    },
    {
      icon: <PpcIcon />,
      title: "Email Marketing & Automation",
      description:
        "We build and execute email flows that nurture leads, drive sales, and retain customers — all backed by analytics.",
    },
    {
      icon: <SocialIcon />,
      title: "Conversion Rate Optimization (CRO)",
      description:
        "Traffic means little without conversions. Our CRO specialists test every touchpoint to improve form fills, clicks, and purchases.",
    },
    {
      icon: <SeoIcon />,
      title: "Online Reputation Management",
      description:
        "We monitor and manage how your brand appears online — from review sites to forums — ensuring trust and credibility stay intact.",
    },
  ];

  const industries = [
    "Healthcare",
    "Real Estate",
    "eCommerce",
    "Education",
    "Finance",
    "Travel & Hospitality",
    "Legal & Consulting",
  ];

  return (
    <div className="digital-page">
      <section className="digital-hero-section">
        <h2>
          Digital Marketing Services by <br />
          <span>
            <p>Apex InfoTech Solutions</p>
          </span>
        </h2>
        <p className="digital-hero-subtext">
          Get results-driven digital marketing services that combine strategy,
          creativity, and analytics to boost visibility, engage audiences, and
          drive measurable growth.
        </p>

        <div className="common-cta-section">
          <CommonCta />
        </div>
      </section>

      <div className="digital-marketing-section-wrapper">
        <div className="digital-marketing-container">
          {/* Left Panel: Title */}
          <div className="digital-marketing-left-panel">
            <h2 className="digital-marketing-title">
              Digital Marketing Services to Accelerate Brand Growth
            </h2>
          </div>

          {/* Right Panel: Description */}
          <div className="digital-marketing-right-panel">
            <p className="digital-marketing-description">
              At Apex, we deliver results-driven digital marketing services
              powered by a network of trusted partners, cutting-edge tools, and
              performance-focused strategies. While we don't claim to own all
              platforms or tech stacks, we make sure your marketing gets done —
              efficiently, transparently, and with measurable results.
            </p>
            <p className="digital-marketing-description">
              Whether you're looking to improve visibility, generate leads, or
              scale revenue, Apex acts as your single-point solution to plan,
              implement, and manage digital marketing campaigns without the
              overhead of managing it in-house.
            </p>
          </div>
        </div>
      </div>

      <section className="digital-marketing-core-services-wrapper">
        <h2 className="digital-marketing-section-title">
          Our Key Digital Marketing Services
        </h2>
        <div className="digital-marketing-services-grid">
          {services.map((service, index) => (
            <div className="digital-marketing-service-card" key={index}>
              <div className="digital-marketing-service-icon">
                {service.icon}
              </div>
              <h3 className="digital-marketing-service-title">
                {service.title}
              </h3>
              <p className="digital-marketing-service-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Why Apex Section --- */}
      <section className="digital-marketing-why-apex-wrapper">
        <h2 className="digital-marketing-section-title">
          Why Apex for Digital Marketing?
        </h2>
        <div className="digital-marketing-why-apex-container">
          <div className="digital-marketing-why-apex-item">
            <div className="digital-marketing-why-apex-icon">
              <CheckmarkIcon />
            </div>
            <div className="digital-marketing-why-apex-text">
              <h4>Done-for-You Execution</h4>
              <p>
                We manage everything end-to-end through verified partners and
                internal experts — you stay hands-off but informed.
              </p>
            </div>
          </div>
          <div className="digital-marketing-why-apex-item">
            <div className="digital-marketing-why-apex-icon">
              <CheckmarkIcon />
            </div>
            <div className="digital-marketing-why-apex-text">
              <h4>Lean, Outcome-Driven Approach</h4>
              <p>
                Every strategy is built to meet your Critical-to-Quality (CTQ)
                outcomes — more traffic, higher conversions, better ROI.
              </p>
            </div>
          </div>
          <div className="digital-marketing-why-apex-item">
            <div className="digital-marketing-why-apex-icon">
              <CheckmarkIcon />
            </div>
            <div className="digital-marketing-why-apex-text">
              <h4>No False Promises</h4>
              <p>
                We believe in transparency and real results. No vague guarantees
                — just clearly scoped campaigns backed by data.
              </p>
            </div>
          </div>
          <div className="digital-marketing-why-apex-item">
            <div className="digital-marketing-why-apex-icon">
              <CheckmarkIcon />
            </div>
            <div className="digital-marketing-why-apex-text">
              <h4>Flexible Engagement Models</h4>
              <p>
                Choose what you need: Full-service campaigns or select-channel
                support. Scale up or down as your needs evolve.
              </p>
            </div>
          </div>
          <div className="digital-marketing-why-apex-item">
            <div className="digital-marketing-why-apex-icon">
              <CheckmarkIcon />
            </div>
            <div className="digital-marketing-why-apex-text">
              <h4>Real-Time Performance Dashboards</h4>
              <p>
                We give you access to detailed reporting that tracks every KPI —
                from impressions and clicks to conversions and revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Industries Section --- */}
      <section className="digital-marketing-industries-wrapper">
        <h2 className="digital-marketing-section-title">
          Industries We Support
        </h2>
        <p className="digital-marketing-section-subtitle">
          We’ve helped clients in:
        </p>
        <div className="digital-marketing-industries-container">
          {industries.map((industry, index) => (
            <div className="digital-marketing-industry-tag" key={index}>
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section className="digital-marketing-final-cta-wrapper">
        <h2 className="digital-marketing-final-cta-title">
          Let’s Build Your Digital Engine
        </h2>
        <p className="digital-marketing-final-cta-description">
          Let Apex take marketing off your plate so you can focus on scaling
          your business. Our digital team is ready to execute your vision with
          precision — and without false claims.
        </p>
      </section>
    </div>
  );
}

export default Digital;
