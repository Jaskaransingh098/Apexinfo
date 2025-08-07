import React, { useRef, useEffect } from "react";
import {
  FaTruck, // 🟢 Delivery / Supply Chain
  FaUserMd, // 🟢 Doctor / Telemedicine
  FaBullhorn, // 🟢 Outreach / Marketing
  FaPhoneAlt, // 🟢 Customer Support
  FaClipboardCheck, // 🟢 Compliance / Reporting
  FaHospital,
} from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../E-commerce/E-commerce.css"; // Reusing same CSS

function Healthcare() {
  gsap.registerPlugin(ScrollTrigger);

  const cardData = [
    {
      title: "Reliable sourcing of medical supplies",
      description:
        "Finding certified and affordable suppliers for pharma, equipment, and disposables is complex across India.",
      image:
        "/industries-pics/medical supplies.jpg",
    },
    {
      title: "Patient logistics & cold chain",
      description:
        "Transporting temperature-sensitive medicine and vaccines needs strong logistics support.",
      image:
        "/industries-pics/patient logistics.jpg",
    },
    {
      title: "Doctor-patient digital outreach",
      description:
        "Building localized outreach programs across languages and regions is crucial.",
      image:
        "/industries-pics/doctor patient.jpg",
    },
    {
      title: "Telemedicine support in rural India",
      description:
        "Apex helps enable regional telemedicine hubs for better healthcare accessibility.",
      image:
        "/industries-pics/medicine support.jpg",
    },
  ];

  const solutions = [
    {
      text: (
        <>
          <strong>Clinical supply chain setup</strong>
          <br />
          From sourcing PPE and diagnostic kits to hospital inventory
          management.
        </>
      ),
      icon: <FaTruck size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Telemedicine & rural healthcare support</strong>
          <br />
          Infrastructure and team support for virtual consultations and remote
          care.
        </>
      ),
      icon: <FaUserMd size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Healthcare marketing & outreach</strong>
          <br />
          Multilingual digital campaigns for doctors, hospitals, and pharma
          brands.
        </>
      ),
      icon: <FaBullhorn size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Medical customer support</strong>
          <br />
          Trained agents for prescription help, appointments, and patient
          inquiries.
        </>
      ),
      icon: <FaPhoneAlt size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Healthcare compliance & reporting</strong>
          <br />
          We handle regulatory filings, audits, and ISO/GMP record keeping.
        </>
      ),
      icon: <FaClipboardCheck size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Hospital system integration</strong>
          <br />
          Support for HIS/ERP integrations, appointment software, and local
          backups.
        </>
      ),
      icon: <FaHospital size={28} color="#2e7d32" />,
    },
  ];
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

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
      <div className="ecommerce-hero">
        <div className="ecommerce-hero-content">
          <div className="ecommerce-hero-illustration">
            <img
              src="/industries-pics/healthcare hero.jpg"
              alt="Healthcare Illustration"
            />
          </div>
          <div className="ecommerce-hero-text">
            <h1>
              Transform Healthcare Operations in India
              <br />
              with Apex’s Local Expertise
            </h1>
            <p className="ecommerce-subheadline">
              From clinical sourcing to patient engagement, Apex empowers global
              healthcare firms to deliver in India.
            </p>
            <p className="ecommerce-overview">
              India’s healthcare sector is vast and growing fast — but
              navigating it requires deep local partnerships. Apex helps you
              solve distribution, compliance, and customer care from the ground
              up.
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
              Scaling in India’s healthcare sector is challenging without local
              presence. We handle the on-ground execution so you don’t have to.
            </p>
          </div>
          <div className="ecom-challenges-cards">
            {cardData.map((card, index) => (
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
          Case Studies: Real Results, Real Impact
        </h2>

        {/* Case 1 */}
        <div className="case-row">
          <div className="case-image">
            <img
              src="/industries-pics/medical kits.jpg"
              alt="NGO Sourcing"
            />
          </div>
          <div className="case-content">
            <h3>🏥 Sourcing for Global Health NGO</h3>
            <p>
              We supported a European NGO with sourcing WHO-compliant medical
              kits from India. From procurement to customs clearance, everything
              was managed transparently.
            </p>
          </div>
        </div>

        {/* Case 2 */}
        <div className="case-row reverse">
          <div className="case-image">
            <img
              src="/industries-pics/telemedicine.jpg"
              alt="Telemedicine"
            />
          </div>
          <div className="case-content">
            <h3>💻 Telemedicine Expansion in Tier 2 Cities</h3>
            <p>
              A US health-tech startup expanded into India using Apex's local
              partnerships to install 50+ rural telehealth kiosks and set up
              regional compliance protocols.
            </p>
          </div>
        </div>

        {/* Case 3 */}
        <div className="case-row">
          <div className="case-image">
            <img
              src="/industries-pics/labs.jpg"
              alt="Diagnostics Lab"
            />
          </div>
          <div className="case-content">
            <h3>🧪 Diagnostics Lab Setup for UK Company</h3>
            <p>
              We helped a diagnostics chain from the UK set up labs across metro
              cities in India — with hiring, logistics, compliance, and
              marketing handled end-to-end.
            </p>
          </div>
        </div>

        {/* Case 4 */}
        <div className="case-row reverse">
          <div className="case-image">
            <img
              src="/industries-pics/pharma.jpg"
              alt="Pharma Compliance"
            />
          </div>
          <div className="case-content">
            <h3>📋 Pharma Compliance & Reporting Automation</h3>
            <p>
              A pharma exporter used Apex to manage DGCI documentation, batch
              tracking, and export filing — saving over 40% in cost and
              improving audit outcomes.
            </p>
          </div>
        </div>
      </div>

      <div className="why-apex-section">
        <h2 className="why-apex-title">Why Healthcare Companies Choose Apex</h2>
        <div className="why-apex-layout">
          <div className="why-apex-column left">
            <div className="why-apex-card">
              🧠 <strong>Healthcare Domain Knowledge</strong>
              <br />
              Deep expertise in clinical logistics, pharma sourcing, and rural
              delivery.
            </div>
            <div className="why-apex-card">
              ⚙️ <strong>End-to-End Implementation</strong>
              <br />
              We don't just advise — we operate and execute in real time.
            </div>
          </div>

          <div className="why-apex-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
              alt="Why Choose Apex Healthcare"
            />
          </div>

          <div className="why-apex-column right">
            <div className="why-apex-card">
              🚀 <strong>Speed & Scale</strong>
              <br />
              Launch India operations fast, scale without risk or hassle.
            </div>
            <div className="why-apex-card">
              🏥 <strong>Compliance & Patient Trust</strong>
              <br />
              We help you stay compliant while building credibility with Indian
              patients.
            </div>
          </div>
        </div>
      </div>


      <div className="ecom-how-it-works-section">
        <h2 className="how-title">How It Works</h2>
        <div className="how-timeline">
          {[
            {
              title: "Define Needs & Regions",
              desc: "You share which healthcare services, supplies, or support you need — and where in India.",
            },
            {
              title: "Receive a Local Execution Plan",
              desc: "We send a detailed plan: vendors, staffing, delivery timelines, and compliance routes.",
            },
            {
              title: "Local Deployment Begins",
              desc: "Our on-ground teams start implementation, with full visibility for you.",
            },
            {
              title: "Track & Scale With Confidence",
              desc: "Access dashboards, reports, and scale services as your impact grows.",
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
        <h2>Ready to Improve Healthcare Outcomes in India?</h2>
        <p>
          Let Apex help you reach patients faster, manage logistics, and build
          trust through compliance and care.
        </p>
        <div className="ecom-cta-buttons">
          <a href="/consultant" className="ecom-btn-primary">
            Book a Free Healthcare Consultation
          </a>
          <a href="/services" className="ecom-btn-secondary">
            Explore Healthcare Solutions
          </a>
        </div>
      </div>
    </div>
  );
}

export default Healthcare;
