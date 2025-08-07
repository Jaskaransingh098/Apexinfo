import React, { useRef, useEffect } from "react";
import {
  FaTruck,
  FaMapMarkedAlt,
  FaWarehouse,
  FaPhoneAlt,
  FaTools,
  FaClipboardCheck,
} from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../E-commerce/E-commerce.css"; // Reuse shared styles

function Logistics() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const solutions = [
    {
      text: (
        <>
          <strong>Last-mile delivery network setup</strong>
          <br />
          Apex builds and manages hyperlocal courier networks with trained staff
          and tracking.
        </>
      ),
      icon: <FaTruck size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Warehouse staffing & inventory handling</strong>
          <br />
          From hiring pick-pack teams to managing stock flows — Apex handles
          your hub operations.
        </>
      ),
      icon: <FaWarehouse size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Route optimization & GPS fleet tracking</strong>
          <br />
          Our tech tools improve route efficiency, fuel costs, and delivery
          times.
        </>
      ),
      icon: <FaMapMarkedAlt size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Customer service & call center setup</strong>
          <br />
          Apex runs multilingual support for delivery issues, ETA, and returns.
        </>
      ),
      icon: <FaPhoneAlt size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Repair & maintenance crew on-ground</strong>
          <br />
          We manage field techs for vehicle maintenance, installation, and
          repairs.
        </>
      ),
      icon: <FaTools size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Compliance & documentation handling</strong>
          <br />
          From road permits to tax filings, Apex handles region-specific
          logistics compliance.
        </>
      ),
      icon: <FaClipboardCheck size={28} color="#2e7d32" />,
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
              src="/industries-pics/logisctics.jpg"
              alt="Logistics Illustration"
            />
          </div>
          <div className="ecommerce-hero-text">
            <h1>
              Accelerate Logistics & Supply Chains in India
              <br />
              with Apex On-Ground Execution
            </h1>
            <p className="ecommerce-subheadline">
              From freight to fulfillment, Apex helps logistics and transport
              firms operate smarter across India.
            </p>
            <p className="ecommerce-overview">
              India’s logistics landscape is fragmented and fast-moving. Apex
              provides the local network, staffing, and infrastructure to build
              end-to-end reliability at scale.
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
              India's logistics industry is vast but unorganized. Whether it's
              cold chain, last-mile, or freight — Apex helps you overcome the
              physical and regulatory hurdles.
            </p>
          </div>
          <div className="ecom-challenges-cards">
            {[
              {
                title: "Fragmented last-mile infrastructure",
                description:
                  "Coordinating timely delivery in rural and semi-urban regions is difficult without local partners and tech.",
                image:
                  "/industries-pics/logisctics delivery.jpg",
              },
              {
                title: "Cold chain reliability issues",
                description:
                  "Managing temperature-sensitive transport across states is costly and prone to loss without verified vendors.",
                image:
                  "/industries-pics/logisctics delivery 2.jpg",
              },
              {
                title: "Warehouse visibility gaps",
                description:
                  "Stockouts and excesses occur without synchronized inventory across regional hubs and warehouses.",
                image:
                  "/industries-pics/logisctics delivery 3.jpg",
              },
              {
                title: "Driver management and route planning",
                description:
                  "Finding, training, and retaining drivers while optimizing delivery routes remains a daily challenge.",
                image:
                  "/industries-pics/logisctics delivery 4.jpg",
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
          Case Studies: On-Ground Logistics in Action
        </h2>

        {/* Case 1 */}
        <div className="case-row">
          <div className="case-image">
            <img
              src="/industries-pics/delivery network.jpg"
              alt="Hyperlocal Delivery Network"
            />
          </div>
          <div className="case-content">
            <h3>🏍️ Hyperlocal Delivery Network Setup</h3>
            <p>
              Apex helped a UAE-based delivery brand launch in 9 Indian cities
              by setting up last-mile agent hiring, training, and routing with
              local fleet partners in just 6 weeks.
            </p>
          </div>
        </div>

        {/* Case 2 */}
        <div className="case-row reverse">
          <div className="case-image">
            <img
              src="/industries-pics/pharma delivery.jpg"
              alt="Cold Chain Expansion"
            />
          </div>
          <div className="case-content">
            <h3>❄️ Cold Chain Expansion for Pharma 3PL</h3>
            <p>
              We enabled a logistics company to handle frozen and chilled
              delivery for healthcare clients, including cold box procurement,
              driver training, and SLA monitoring.
            </p>
          </div>
        </div>

        {/* Case 3 */}
        <div className="case-row">
          <div className="case-image">
            <img
              src="/industries-pics/delivery chain.jpg"
              alt="Warehousing Ops"
            />
          </div>
          <div className="case-content">
            <h3>🏪 Multi-Warehouse Ops for E-commerce Player</h3>
            <p>
              Apex managed 5 regional warehouses for a cross-border e-commerce
              company, including pick-pack staff, inventory syncing, and returns
              management.
            </p>
          </div>
        </div>

        {/* Case 4 */}
        <div className="case-row reverse">
          <div className="case-image">
            <img
              src="/industries-pics/vehicle.jpg"
              alt="Fleet Maintenance"
            />
          </div>
          <div className="case-content">
            <h3>🔧 Fleet Maintenance Network for Transporter</h3>
            <p>
              For a heavy vehicle transport firm, Apex deployed mobile mechanics
              and technicians across routes to reduce breakdown time and improve
              on-road service levels.
            </p>
          </div>
        </div>
      </div>

      <div className="why-apex-section">
        <h2 className="why-apex-title">Why Logistics Companies Choose Apex</h2>
        <div className="why-apex-layout">
          {/* Left Column */}
          <div className="why-apex-column left">
            <div className="why-apex-card">
              🚚 <strong>Execution at Scale</strong>
              <br />
              We deploy warehousing, last-mile, and transport teams across
              metros and Tier 2 cities.
            </div>
            <div className="why-apex-card">
              ⚙️ <strong>Integrated Tech + Manpower</strong>
              <br />
              Track, optimize, and respond in real-time with connected
              dashboards and trained field ops.
            </div>
          </div>

          {/* Center Image */}
          <div className="why-apex-image">
            <img
              src="/industries-pics/distribution.png"
              alt="Why Choose Apex Logistics"
            />
          </div>

          {/* Right Column */}
          <div className="why-apex-column right">
            <div className="why-apex-card">
              📦 <strong>Reliable Fulfillment</strong>
              <br />
              Our warehouse-to-doorchain service ensures your SLAs are
              consistently met.
            </div>
            <div className="why-apex-card">
              📊 <strong>Transparent Reporting</strong>
              <br />
              Get visibility into delivery, issues, costs, and ops — with zero
              micromanagement.
            </div>
          </div>
        </div>
      </div>

      <div className="ecom-how-it-works-section">
        <h2 className="how-title">How It Works</h2>
        <div className="how-timeline">
          {[
            {
              title: "Define Geographic Coverage",
              desc: "You share the zones and services you want to operate — last-mile, warehousing, fleet, etc.",
            },
            {
              title: "Get an Ops Blueprint",
              desc: "We create a local execution plan: staffing, vendor onboarding, routing, and compliance.",
            },
            {
              title: "Deploy Teams and Systems",
              desc: "Our agents and partners execute on-ground while tech dashboards track performance.",
            },
            {
              title: "Scale & Optimize",
              desc: "You scale reliably with regional data, local support, and zero micro-management.",
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
        <h2>Ready to Expand Your Logistics Network in India?</h2>
        <p>
          Apex helps you move faster — with people, partners, and execution
          tailored to India's ground realities.
        </p>
        <div className="ecom-cta-buttons">
          <a href="/consultant" className="ecom-btn-primary">
            Book a Free Logistics Consultation
          </a>
          <a href="/services" className="ecom-btn-secondary">
            Explore Transportation Solutions
          </a>
        </div>
      </div>
    </div>
  );
}

export default Logistics;
