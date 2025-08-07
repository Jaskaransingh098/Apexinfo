import React, { useRef, useEffect } from "react";
import {
  FaChartLine,
  FaUserTie,
  FaBullhorn,
  FaPhoneAlt,
  FaClipboardCheck,
  FaUniversity,
} from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../E-commerce/E-commerce.css"; // Reuse same CSS

function Financial() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const solutions = [
    {
      text: (
        <>
          <strong>On-ground KYC & documentation support</strong>
          <br />
          Physical verification, in-person onboarding, and ID collection via
          verified agents.
        </>
      ),
      icon: <FaUserTie size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Financial service compliance handling</strong>
          <br />
          Apex manages RBI filings, audit trails, and data localization
          compliance.
        </>
      ),
      icon: <FaClipboardCheck size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Multilingual financial outreach</strong>
          <br />
          Paid ads, influencer campaigns, and educational content in local
          languages.
        </>
      ),
      icon: <FaBullhorn size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Customer support for BFSI</strong>
          <br />
          Phone, chat, and WhatsApp support for banking, loans, crypto, and
          insurance brands.
        </>
      ),
      icon: <FaPhoneAlt size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Finance-focused hiring & payroll</strong>
          <br />
          We hire relationship managers, analysts, and sales teams for your
          Indian branch.
        </>
      ),
      icon: <FaChartLine size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Local entity setup & partnerships</strong>
          <br />
          Apex helps register NBFCs, set up bank partners, and manage legal
          operations.
        </>
      ),
      icon: <FaUniversity size={28} color="#2e7d32" />,
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const setCardRef = (el, index) => {
    cardRefs.current[index] = el;
  };

  return (
    <div className="e-commerce-section">
      {/* Hero Section */}
      <div className="ecommerce-hero">
        <div className="ecommerce-hero-content">
          <div className="ecommerce-hero-illustration">
            <img
              src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1400&q=80"
              alt="Financial Services Illustration"
            />
          </div>
          <div className="ecommerce-hero-text">
            <h1>
              Expand Financial Services in India
              <br />
              with Apex’s Local Execution
            </h1>
            <p className="ecommerce-subheadline">
              From compliance to customer acquisition, Apex helps financial
              brands grow in India.
            </p>
            <p className="ecommerce-overview">
              The Indian financial market is diverse, regulated, and
              trust-driven. Apex enables your fintech, banking, or insurance
              brand to launch and scale securely through compliant operations
              and human support.
            </p>
            <a href="/consultant" className="ecommerce-cta-btn">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="ecom-challenges-section" ref={containerRef}>
        <div className="ecom-challenges-content">
          <div className="ecom-challenges-text">
            <h2>Key Challenges We Solve</h2>
            <p>
              India’s financial sector is highly regulated and trust-driven.
              Apex helps you enter and scale securely with local expertise and
              people-led execution.
            </p>
          </div>
          <div className="ecom-challenges-cards">
            {[
              {
                title: "Navigating RBI & compliance norms",
                description:
                  "Working across India's financial sector requires deep knowledge of local banking, fintech, and RBI regulations.",
                image:
                  "/industries-pics/financial.jpg",
              },
              {
                title: "Building trust in digital finance",
                description:
                  "Establishing credibility for foreign fintech and wealth brands is key to adoption in urban and semi-urban markets.",
                image:
                  "/industries-pics/financial 1.jpg",
              },
              {
                title: "Multilingual customer onboarding",
                description:
                  "We help localize user onboarding, support, and marketing in 8+ Indian languages for wider outreach.",
                image:
                  "/industries-pics/financial 2.jpg",
              },
              {
                title: "Remote KYC & agent networks",
                description:
                  "Apex deploys verified field agents and tools for in-person KYC collection, training, and expansion.",
                image:
                  "/industries-pics/financial 3.jpg",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="ecom-challenge-card"
                ref={(el) => setCardRef(el, index)}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="ecom-card-image"
                />
                <div className="ecom-card-overlay">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ecom-solutions-section-modern">
        <h2 className="ecom-solutions-title">Our Solutions</h2>
        <div className="ecom-solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card-modern">
              <div className="icon-wrap">{solution.icon}</div>
              <div className="solution-text">{solution.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="ecom-case-studies-section-alt">
        <h2 className="case-section-title">
          Case Studies: Real Impact in Finance
        </h2>

        {/* Case 1 */}
        <div className="case-row">
          <div className="case-image">
            <img
              src="/industries-pics/digital kyc.jpg"
              alt="Digital KYC for NBFC"
            />
          </div>
          <div className="case-content">
            <h3>📲 Digital KYC for Leading NBFC</h3>
            <p>
              Apex onboarded over 12,000 users via agent-assisted KYC
              verification for a new-age lending firm. Compliance checks, field
              audits, and biometric capture were handled end-to-end.
            </p>
          </div>
        </div>

        {/* Case 2 */}
        <div className="case-row reverse">
          <div className="case-image">
            <img
              src="/industries-pics/bank.jpg"
              alt="Compliance Rollout"
            />
          </div>
          <div className="case-content">
            <h3>📋 RBI-Compliant Launch for EU Fintech</h3>
            <p>
              A European digital wallet partnered with Apex to enter India with
              proper RBI categorization, data center setup, and partner bank
              arrangements.
            </p>
          </div>
        </div>

        {/* Case 3 */}
        <div className="case-row">
          <div className="case-image">
            <img
              src="/industries-pics/crypto.jpg"
              alt="Multilingual Outreach"
            />
          </div>
          <div className="case-content">
            <h3>📣 Regional Growth for a Crypto Exchange</h3>
            <p>
              Apex led regional influencer campaigns and customer onboarding in
              6 languages across Tier 2–3 cities for a global crypto platform.
            </p>
          </div>
        </div>

        {/* Case 4 */}
        <div className="case-row reverse">
          <div className="case-image">
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1400&q=80"
              alt="Bank Partnership Setup"
            />
          </div>
          <div className="case-content">
            <h3>🏦 Bank Partnership Setup for Insurtech</h3>
            <p>
              A UK-based insurtech used Apex to establish B2B partnerships with
              4 banks, plus hiring and compliance filings for their embedded
              insurance model.
            </p>
          </div>
        </div>
      </div>

      <div className="why-apex-section">
        <h2 className="why-apex-title">Why Financial Companies Choose Apex</h2>
        <div className="why-apex-layout">
          {/* Left Column */}
          <div className="why-apex-column left">
            <div className="why-apex-card">
              🧾 <strong>Finance-Specific Compliance Expertise</strong>
              <br />
              From RBI to SEBI and GDPR, we help you stay compliant across every
              state and vertical.
            </div>
            <div className="why-apex-card">
              👥 <strong>Local Workforce You Can Trust</strong>
              <br />
              Apex hires and manages agents, analysts, and managers to represent
              your brand professionally.
            </div>
          </div>

          {/* Center Image */}
          <div className="why-apex-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1023/1023816.png"
              alt="Why Choose Apex Financial"
            />
          </div>

          {/* Right Column */}
          <div className="why-apex-column right">
            <div className="why-apex-card">
              🧠 <strong>Strategy + Execution</strong>
              <br />
              Our team doesn’t just plan — we execute, report, and iterate with
              your HQ.
            </div>
            <div className="why-apex-card">
              🔒 <strong>Data Localization & Security</strong>
              <br />
              We help you stay fully secure and compliant with India's growing
              financial data norms.
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="ecom-how-it-works-section">
        <h2 className="how-title">How It Works</h2>
        <div className="how-timeline">
          {[
            {
              title: "Share Your India Strategy",
              desc: "Tell us what you want to achieve — KYC, compliance, hiring, or expansion.",
            },
            {
              title: "We Build the Execution Plan",
              desc: "Get a step-by-step roadmap with legal, logistical, and staffing plans.",
            },
            {
              title: "Local Ops Go Live",
              desc: "We hire, deploy, and track on-ground teams and services across regions.",
            },
            {
              title: "Scale, Monitor & Comply",
              desc: "Use dashboards, reports, and feedback loops to grow responsibly and securely.",
            },
          ].map((step, index) => (
            <div key={index} className="how-step">
              <div className="step-circle">{index + 1}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ecom-cta-section">
        <h2>Ready to Launch Your Financial Services in India?</h2>
        <p>
          Apex is your end-to-end execution partner for entering and scaling in
          the Indian financial ecosystem.
        </p>
        <div className="ecom-cta-buttons">
          <a href="/consultant" className="ecom-btn-primary">
            Book a Free Strategy Call
          </a>
          <a href="/services" className="ecom-btn-secondary">
            Explore Financial Solutions
          </a>
        </div>
      </div>
    </div>
  );
}

export default Financial;
