import React, { useRef, useEffect } from "react";
import {
  FaIndustry,
  FaCogs,
  FaClipboardCheck,
  FaTruck,
  FaUserTie,
  FaWarehouse,
} from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../E-commerce/E-commerce.css"; // Reusing your shared CSS

function Manufacturing() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const solutions = [
    {
      text: (
        <>
          <strong>Manufacturing plant setup support</strong>
          <br />
          From location scouting and licensing to construction, Apex guides your
          factory launch.
        </>
      ),
      icon: <FaIndustry size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Local vendor sourcing & onboarding</strong>
          <br />
          We verify, negotiate, and manage raw material suppliers regionally.
        </>
      ),
      icon: <FaClipboardCheck size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Factory workforce hiring & training</strong>
          <br />
          We source and train skilled laborers, supervisors, and plant managers.
        </>
      ),
      icon: <FaUserTie size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Industrial logistics & delivery planning</strong>
          <br />
          Integrated B2B transport, cold chain, and freight handling from
          factory to port or buyer.
        </>
      ),
      icon: <FaTruck size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Warehouse & inventory management</strong>
          <br />
          We build and run industrial warehousing for finished goods, spare
          parts, and more.
        </>
      ),
      icon: <FaWarehouse size={28} color="#2e7d32" />,
    },
    {
      text: (
        <>
          <strong>Quality control audits & reporting</strong>
          <br />
          We implement QA protocols, inspections, and digital reporting for
          transparency.
        </>
      ),
      icon: <FaCogs size={28} color="#2e7d32" />,
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
              src="/industries-pics/manufacturing.jpg"
              alt="Manufacturing India"
            />
          </div>
          <div className="ecommerce-hero-text">
            <h1>
              Power Indian Manufacturing with Apex
              <br />
              From Plant Setup to Workforce Deployment
            </h1>
            <p className="ecommerce-subheadline">
              Apex helps global manufacturers build, source, and operate across
              India’s industrial zones.
            </p>
            <p className="ecommerce-overview">
              With complex regulation, fragmented vendors, and regional
              differences, launching or scaling manufacturing in India requires
              strong local execution. Apex handles this with experience,
              precision, and people.
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
              Setting up or expanding manufacturing operations in India involves
              navigating compliance, sourcing, labor, and logistics — often
              across multiple regions. Apex handles this complexity for you.
            </p>
          </div>
          <div className="ecom-challenges-cards">
            {[
              {
                title: "Local supplier & raw material sourcing",
                description:
                  "Finding verified, consistent suppliers across India’s fragmented vendor base is difficult and risky.",
                image:
                  "/industries-pics/manufacturing vendors.jpg",
              },
              {
                title: "Regulatory approvals & industrial licenses",
                description:
                  "Each region has different regulations and permits for plant setup, operations, and labor compliance.",
                image:
                  "/industries-pics/manufacturing approvalsjpg.jpg",
              },
              {
                title: "Skilled labor availability & training",
                description:
                  "Staffing factories with skilled or semi-skilled workers who meet quality and safety standards is hard without local networks.",
                image:
                  "/industries-pics/manufacturing traning.jpg",
              },
              {
                title: "Logistics from factory to customer",
                description:
                  "Managing transportation, storage, and returns across states is costly without integrated planning.",
                image:
                  "/industries-pics/manufacturing shipping.jpg",
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

      {/* Our Solutions Section */}
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
          Case Studies: Apex in Indian Manufacturing
        </h2>

        {/* Case 1 */}
        <div className="case-row">
          <div className="case-image">
            <img
              src="/industries-pics/manufacturing factory.jpg"
              alt="Factory Setup"
            />
          </div>
          <div className="case-content">
            <h3>🏗️ Full Factory Setup for German Auto Brand</h3>
            <p>
              Apex handled site selection, registration, contractor hiring, and
              team training to set up a Tier-2 auto part manufacturing plant in
              Pune within 10 months.
            </p>
          </div>
        </div>

        {/* Case 2 */}
        <div className="case-row reverse">
          <div className="case-image">
            <img
              src="/industries-pics/manufacturing chemical factory.jpg"
              alt="Compliance and Audit"
            />
          </div>
          <div className="case-content">
            <h3>📝 Compliance Management for Chemical Plant</h3>
            <p>
              A European company used Apex to manage pollution board filings,
              ISO certification, and bi-monthly QA audits for its new chemical
              unit in Gujarat.
            </p>
          </div>
        </div>

        {/* Case 3 */}
        <div className="case-row">
          <div className="case-image">
            <img
              src="/industries-pics/manufacturing hiring.jpg"
              alt="Workforce"
            />
          </div>
          <div className="case-content">
            <h3>👷 Hiring 350+ Workers for FMCG Plant</h3>
            <p>
              Apex recruited and trained operators, supervisors, and line
              managers for a UK-headquartered FMCG plant in Tamil Nadu, meeting
              all safety and language standards.
            </p>
          </div>
        </div>

        {/* Case 4 */}
        <div className="case-row reverse">
          <div className="case-image">
            <img
              src="/industries-pics/manufacturing partnership.jpg"
              alt="Industrial Logistics"
            />
          </div>
          <div className="case-content">
            <h3>🚛 Logistics Partnership for US Electronics Brand</h3>
            <p>
              Apex managed warehouse setup, freight contracts, and reverse
              logistics for an electronics manufacturer expanding into northern
              India.
            </p>
          </div>
        </div>
      </div>

      {/* Why Apex Section */}
      <div className="why-apex-section">
        <h2 className="why-apex-title">Why Manufacturers Trust Apex</h2>
        <div className="why-apex-layout">
          <div className="why-apex-column left">
            <div className="why-apex-card">
              🏭 <strong>Pan-India Manufacturing Reach</strong>
              <br />
              We operate across industrial clusters in Maharashtra, Tamil Nadu,
              Gujarat, Punjab, and more.
            </div>
            <div className="why-apex-card">
              🔍 <strong>Verified Vendor Ecosystem</strong>
              <br />
              Apex connects you to vetted local suppliers, transporters, and
              compliance agents.
            </div>
          </div>

          <div className="why-apex-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/263/263107.png"
              alt="Why Apex Manufacturing"
            />
          </div>

          <div className="why-apex-column right">
            <div className="why-apex-card">
              ⚙️ <strong>Execution with QA Standards</strong>
              <br />
              Our team ensures consistency, documentation, and quality across
              every site.
            </div>
            <div className="why-apex-card">
              👷 <strong>Workforce + Ops = One Partner</strong>
              <br />
              Hire, train, operate, and scale — all through one reliable local
              partner.
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
              title: "Share Your Manufacturing Plan",
              desc: "Tell us about the product, region, scale, and services you need on-ground in India.",
            },
            {
              title: "Get a Local Execution Blueprint",
              desc: "We create a regional roadmap — licenses, vendors, hiring, and factory ops.",
            },
            {
              title: "Build + Operate With Apex",
              desc: "Our teams help you build plants, recruit labor, source inputs, and go live.",
            },
            {
              title: "Monitor + Scale Operations",
              desc: "Track metrics, optimize supply chain, and expand confidently across India.",
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
        <h2>Ready to Build or Expand Your Manufacturing Ops in India?</h2>
        <p>
          Apex is your on-ground partner for workforce, compliance, and supply
          chain execution — anywhere in India.
        </p>
        <div className="ecom-cta-buttons">
          <a href="/consultant" className="ecom-btn-primary">
            Book a Free Manufacturing Consultation
          </a>
          <a href="/services" className="ecom-btn-secondary">
            Explore Manufacturing Services
          </a>
        </div>
      </div>
    </div>
  );
}

export default Manufacturing;
