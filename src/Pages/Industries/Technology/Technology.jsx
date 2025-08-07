import React, { useRef, useEffect } from "react";
import {
  FaLaptopCode,
  FaUserShield,
  FaChartLine,
  FaHandsHelping,
  FaRegBuilding,
  FaNetworkWired,
} from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../E-commerce/E-commerce.css"; // Shared styling

function Technology() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const solutions = [
    {
      text: (
        <>
          <strong>Inside Sales & B2B Lead Gen</strong>
          <br />
          Apex recruits, trains, and manages your India-based SaaS sales team.
        </>
      ),
      icon: <FaChartLine size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Entity setup & compliance for SaaS</strong>
          <br />
          Apex handles GST, RBI, MCA registration, and contracts for Indian
          customers.
        </>
      ),
      icon: <FaRegBuilding size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Customer success & onboarding</strong>
          <br />
          We provide multilingual call/chat/email support teams to help reduce
          churn.
        </>
      ),
      icon: <FaHandsHelping size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Remote tech team hiring (India)</strong>
          <br />
          Find React, Node, Python, and QA engineers across major cities with
          Apex’s hiring engine.
        </>
      ),
      icon: <FaLaptopCode size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Cloud security & data compliance</strong>
          <br />
          We assist with India-specific hosting, data privacy, and SOC-2 prep.
        </>
      ),
      icon: <FaUserShield size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Local cloud infra & backups</strong>
          <br />
          We deploy and maintain cloud zones in India for latency and legal
          compliance.
        </>
      ),
      icon: <FaNetworkWired size={28} color="#2e7d32" />,
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
              src="/industries-pics/saas.webp"
              alt="Technology and SaaS in India"
            />
          </div>
          <div className="ecommerce-hero-text">
            <h1>
              Scale Your Tech & SaaS Business in India
              <br />
              with Apex’s On-Ground Execution
            </h1>
            <p className="ecommerce-subheadline">
              Apex helps global tech and SaaS companies enter, support, and grow
              in India’s digital-first economy.
            </p>
            <p className="ecommerce-overview">
              Whether you're launching cloud services, building an offshore
              team, or selling SaaS to Indian enterprises, Apex provides the
              workforce, legal, and operational expertise to execute — on the
              ground.
            </p>
            <a href="/consultant" className="ecommerce-cta-btn">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="ecom-challenges-section" ref={containerRef}>
        <div className="ecom-challenges-content">
          <div className="ecom-challenges-text">
            <h2>Key Challenges We Solve</h2>
            <p>
              Entering and scaling in India's SaaS and tech ecosystem requires
              local knowledge, regulatory clarity, and an operational footprint.
              Apex helps you bridge all of it.
            </p>
          </div>
          <div className="ecom-challenges-cards">
            {[
              {
                title: "Enterprise SaaS Sales Execution",
                description:
                  "Selling B2B SaaS in India requires local teams, partner networks, and region-wise lead generation.",
                image:
                  "/industries-pics/saas sales.jpg",
              },
              {
                title: "Hiring Skilled Tech Teams at Scale",
                description:
                  "Scaling tech, product, or support teams quickly and compliantly is hard without local HR and legal infra.",
                image:
                  "/industries-pics/saas tech team.jpg",
              },
              {
                title: "Localization & Multi-language Support",
                description:
                  "User adoption requires translation, regional UX tweaks, and 24/7 multilingual onboarding and care.",
                image:
                  "/industries-pics/saas language.jpg",
              },
              {
                title: "Legal Entity & Compliance Setup",
                description:
                  "From GST filings to cloud data laws, every SaaS firm needs a compliant structure and local bank accounts.",
                image:
                  "/industries-pics/saas legal.jpg",
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

      {/* Case Studies Section */}
      <div className="ecom-case-studies-section-alt">
        <h2 className="case-section-title">
          Case Studies: Apex for Global Tech
        </h2>

        {/* Case 1 */}
        <div className="case-row">
          <div className="case-image">
            <img
              src="/industries-pics/saas b2b.jpg"
              alt="SaaS Sales Team India"
            />
          </div>
          <div className="case-content">
            <h3>📈 B2B SaaS Sales Team for US Startup</h3>
            <p>
              Apex built and managed a sales team for a US-based SaaS CRM tool —
              including hiring, training, local GST billing, and demo scheduling
              in 7 Indian cities.
            </p>
          </div>
        </div>

        {/* Case 2 */}
        <div className="case-row reverse">
          <div className="case-image">
            <img
              src="/industries-pics/saas data.jpg"
              alt="Cloud Compliance India"
            />
          </div>
          <div className="case-content">
            <h3>🔐 Data Compliance for German SaaS Platform</h3>
            <p>
              Apex helped set up Indian hosting zones, SOC-2 audit prep, and
              legal documentation for a Berlin-based productivity suite
              operating in BFSI sectors.
            </p>
          </div>
        </div>

        {/* Case 3 */}
        <div className="case-row">
          <div className="case-image">
            <img
              src="/industries-pics/saas hiring.jpg"
              alt="Tech Hiring"
            />
          </div>
          <div className="case-content">
            <h3>👩‍💻 50+ Engineers Hired for UK HealthTech</h3>
            <p>
              A London-based health startup hired over 50 frontend/backend
              engineers in India through Apex — complete with payroll,
              equipment, and weekly reports.
            </p>
          </div>
        </div>

        {/* Case 4 */}
        <div className="case-row reverse">
          <div className="case-image">
            <img
              src="/industries-pics/saas support.jpg"
              alt="Support Team"
            />
          </div>
          <div className="case-content">
            <h3>🗣️ Multilingual Support for SaaS Tool</h3>
            <p>
              Apex deployed a multilingual onboarding + retention support team
              for a French SaaS company expanding into Indian Tier 2 cities.
            </p>
          </div>
        </div>
      </div>

      {/* Why Apex Section */}
      <div className="why-apex-section">
        <h2 className="why-apex-title">Why Tech & SaaS Companies Trust Apex</h2>
        <div className="why-apex-layout">
          <div className="why-apex-column left">
            <div className="why-apex-card">
              💻 <strong>End-to-End Execution</strong>
              <br />
              Apex doesn’t just advise — we build, hire, support, and track your
              India operations.
            </div>
            <div className="why-apex-card">
              🌐 <strong>Pan-India Tech Reach</strong>
              <br />
              We have hiring, cloud, legal, and ops capacity across all major
              tech hubs.
            </div>
          </div>

          <div className="why-apex-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
              alt="Why Apex Tech"
            />
          </div>

          <div className="why-apex-column right">
            <div className="why-apex-card">
              📊 <strong>Transparent SLA Reporting</strong>
              <br />
              Real-time reporting on performance, tickets, demos, support, and
              NPS.
            </div>
            <div className="why-apex-card">
              🤝 <strong>We Act as Your India HQ</strong>
              <br />
              Apex represents your team here — to vendors, clients, regulators,
              and hires.
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
              title: "Define Your India Objectives",
              desc: "Whether it’s hiring, selling, hosting, or support — we tailor your entry plan.",
            },
            {
              title: "Get Legal + Hiring Setup",
              desc: "Apex registers your entity, opens accounts, and starts onboarding hires or vendors.",
            },
            {
              title: "Launch Ops & Scale GTM",
              desc: "We start sales outreach, staff customer teams, and track key metrics with SLAs.",
            },
            {
              title: "Support, Report & Iterate",
              desc: "Ongoing visibility, compliance, and growth — with Apex as your local India HQ.",
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

      {/* CTA Section */}
      <div className="ecom-cta-section">
        <h2>Ready to Launch or Scale Your SaaS in India?</h2>
        <p>
          Apex is your single partner for hiring, compliance, GTM, and support —
          tailored for global SaaS success in India.
        </p>
        <div className="ecom-cta-buttons">
          <a href="/consultant" className="ecom-btn-primary">
            Book a Free SaaS Strategy Call
          </a>
          <a href="/services" className="ecom-btn-secondary">
            Explore Tech & SaaS Solutions
          </a>
        </div>
      </div>
    </div>
  );
}

export default Technology;
