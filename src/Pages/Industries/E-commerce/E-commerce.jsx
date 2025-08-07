import React, { useRef, useEffect } from "react";
import {
  FaIndustry,
  FaTruck,
  FaSearchDollar,
  FaHeadset,
  FaBoxes,
  FaCogs,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./E-commerce.css";

function Ecommerce() {
  gsap.registerPlugin(ScrollTrigger);
  const solutions = [
    {
      text: (
        <>
          <strong>Vendor discovery, quality control, warehousing</strong>
          <br />
          We help identify reliable vendors, ensure quality compliance, and
          optimize warehouse operations for efficient stock management.
        </>
      ),
      icon: <FaIndustry size={28} color="#00796b" />,
    },
    {
      text: (
        <>
          <strong>Last-mile logistics setup & freight management</strong>
          <br />
          Com prehensive logistics solutions including route planning, delivery
          tracking, and freight cost optimization.
        </>
      ),
      icon: <FaTruck size={28} color="#00796b" />,
    },
    {
      text: (
        <>
          <strong>SEO & paid ads for Indian markets</strong>
          <br />
          Targeted digital marketing strategies to boost brand visibility and
          customer engagement across India.
        </>
      ),
      icon: <FaSearchDollar size={28} color="#00796b" />,
    },
    {
      text: (
        <>
          <strong>Customer support (phone, email, chat)</strong>
          <br />
          Multi-channel support services ensuring timely and helpful customer
          interactions to increase satisfaction.
        </>
      ),
      icon: <FaHeadset size={28} color="#00796b" />,
    },
    {
      text: (
        <>
          <strong>Inventory coordination & compliance handling</strong>
          <br />
          Efficient inventory tracking, regulatory compliance management, and
          seamless coordination across supply chain stages.
        </>
      ),
      icon: <FaBoxes size={28} color="#00796b" />,
    },
    {
      text: (
        <>
          <strong>Platform Integration & Tech Setup</strong>
          <br />
          Seamless integration with Shopify, WooCommerce, Magento, and custom
          platforms for automation and smooth operations.
        </>
      ),
      icon: <FaCogs size={28} color="#2e7d32" />,
    },
  ];

  const cardData = [
    {
      title: "Finding reliable suppliers",
      description:
        "Identifying trustworthy and consistent suppliers in India’s fragmented market can be difficult, especially without on-ground presence.",
      image:
        "/industries-pics/freepik__transform-the-minimalist-graphic-into-a-more-reali__17416.png",
    },
    {
      title: "Warehousing and local logistics",
      description:
        "Coordinating inventory, storage, and last-mile delivery across diverse regions presents operational and cost challenges.",
      image:
        "industries-pics/freepik__a-professional-and-clean-graphic-design-for-a-card__17417.png",
    },
    {
      title: "Targeting Indian comsumers effectively online",
      description:
        "Reaching the right audiences requires deep knowledge of regional preferences, languages, and digital behavior.",
      image: "/industries-pics/targeting.png",
    },
    {
      title: "Managing returns, payments, and support",
      description:
        "Handling reverse logistics, COD payments, and multilingual customer service demands dedicated local systems.",
      image:
        "/industries-pics/new-mobile-banking-app-and-e-payment-vector-37936565.jpg",
    },
    {
      title: "Navigating regional compliance and regulations",
      description:
        "Different states have varying tax, trade, and consumer laws that require localized expertise for smooth operation.",
      image: "/industries-pics/pay-taxes-graphic-vector-7468181.jpg",
    },
    {
      title: "Building trust with local customers",
      description:
        "Gaining consumer confidence in a highly competitive market involves cultural understanding, responsive service, and strong brand presence.",
      image:
        "/industries-pics/3d-render-cash-back-concept-260nw-2090517058.webp",
    },
  ];

  const containerRef = useRef(null);

  const cardRefs = useRef([]);

  useEffect(() => {
    // Ensure the challenges section stays visible by modifying the animation
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none", // play, reverse, restart, reset on scroll
        },
      }
    );

    // Add animations for each card with a slight delay between them
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1, // stagger the animations
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

  // Helper function to set card refs
  const setCardRef = (el, index) => {
    cardRefs.current[index] = el;
  };

  return (
    <div className="e-commerce-section">
      <div className="ecommerce-hero">
        <div className="ecommerce-hero-content">
          <div className="ecommerce-hero-illustration">
            <img
              src="/industries-pics/no-time-concept-illustration_114360-3974.png"
              alt="E-commerce Illustration"
            />
          </div>
          <div className="ecommerce-hero-text">
            <h1>
              Unlock India’s E-commerce & Retail Market
              <br />
              with Expert On-Ground Support
            </h1>
            <p className="ecommerce-subheadline">
              From sourcing to fulfillment, Apex Infotech helps global retail
              brands operate seamlessly in India.
            </p>
            <p className="ecommerce-overview">
              India’s retail and e-commerce industry is one of the
              fastest-growing markets globally, yet it comes with complexities
              like fragmented supply chains, regional preferences, and
              challenging logistics. Apex bridges these gaps with complete
              sourcing, marketing, and customer service solutions.
            </p>
            <Link to="/consultant" className="ecommerce-cta-btn">Get In Touch</Link>
          </div>
        </div>
      </div>
      <div className="ecom-challenges-section" ref={containerRef}>
        <div className="ecom-challenges-content">
          <div className="ecom-challenges-text">
            <h2>Key Challenges We Solve</h2>
            <p>
              Expanding your e-commerce business to India presents unique
              hurdles that require local expertise and strategic solutions. Here
              are the major challenges we help you overcome:
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
              src="/industries-pics/2150196692.jpg"
              alt="Eco Textiles Sourcing"
            />
          </div>
          <div className="case-content">
            <h3>🌿 Sourcing Eco-Textiles for a Retail Brand</h3>
            <p>
              We managed end-to-end sourcing for e-commerce brand looking to
              import eco-friendly textiles from India. From vendor selection to
              shipping, we ensured full transparency and quality control.
            </p>
          </div>
        </div>

        {/* Case 2 */}
        <div className="case-row reverse">
          <div className="case-image">
            <img
              src="/industries-pics/2150377131.jpg"
              alt="Remote Dev Team"
            />
          </div>
          <div className="case-content">
            <h3>🧑‍💻 Remote Dev Team for US SaaS Startup</h3>
            <p>
              We built a full-stack backend team in India for a California SaaS
              company in under 3 weeks. Our dedicated HR and payroll support
              enabled fast onboarding and high retention.
            </p>
          </div>
        </div>

        {/* Case 3 */}
        <div className="case-row">
          <div className="case-image">
            <img
              src="/industries-pics/47.jpg"
              alt="Accounting Outsourcing"
            />
          </div>
          <div className="case-content">
            <h3>📊 Accounting Outsourcing for Canadian Firm</h3>
            <p>
              Apex took over full accounting operations for a mid-sized Canadian
              business. We delivered cost savings, better compliance, and more
              accurate financial reporting.
            </p>
          </div>
        </div>

        {/* Case 4 */}
        <div className="case-row reverse">
          <div className="case-image">
            <img
              src="/industries-pics/2149853161.jpg"
              alt="Logistics for Retailer"
            />
          </div>
          <div className="case-content">
            <h3>🚚 Logistics Setup for UK E-Commerce Retailer</h3>
            <p>
              We designed a complete warehouse and last-mile delivery pipeline
              for a UK-based retailer expanding into India. Result: 28% faster
              deliveries and happier customers.
            </p>
          </div>
        </div>
      </div>

      <div className="why-apex-section">
        <h2 className="why-apex-title">Why E-commerce Companies Choose Apex</h2>
        <div className="why-apex-layout">
          <div className="why-apex-column left">
            <div className="why-apex-card">
              🧠 <strong>Local Market Insights</strong>
              <br />
              Deep understanding of India’s diverse buyer behavior and trends.
            </div>
            <div className="why-apex-card">
              ⚙️ <strong>End-to-End Execution</strong>
              <br />
              From sourcing to support — we implement, not just advise.
            </div>
          </div>

          <div className="why-apex-image">
            <img
              src="industries-pics/13297308_5176880-removebg-preview.png"
              alt="Why Choose Apex"
            />
          </div>

          <div className="why-apex-column right">
            <div className="why-apex-card">
              🚀 <strong>Speed & Scalability</strong>
              <br />
              Start fast, grow faster — no need for local infrastructure.
            </div>
            <div className="why-apex-card">
              🌍 <strong>Global Standards</strong>
              <br />
              Operations aligned with international transparency & quality.
            </div>
          </div>
        </div>
      </div>

      <div className="ecom-how-it-works-section">
        <h2 className="how-title">How It Works</h2>
        <div className="how-timeline">
          {[
            {
              title: "Share Requirements",
              desc: "Tell us what you need — sourcing, logistics, tech, or support.",
            },
            {
              title: "Get a Custom Plan",
              desc: "We provide a detailed proposal with pricing, timeline, and roadmap.",
            },
            {
              title: "We Execute Locally",
              desc: "Your on-ground team in India starts execution with regular updates.",
            },
            {
              title: "Grow & Scale",
              desc: "Easily expand services or increase volume as you grow.",
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
        <h2>Ready to Take Your E-commerce Business Global?</h2>
        <p>
          Let Apex simplify sourcing, logistics, and local execution while you
          focus on scaling.
        </p>
        <div className="ecom-cta-buttons">
          <Link to="/consultant" className="ecom-btn-primary">
            Book a Free Consultation
          </Link>
          <Link to="/services" className="ecom-btn-secondary">
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
