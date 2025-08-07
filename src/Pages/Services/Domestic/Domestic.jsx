import React from "react";
import CommonCta from "../../../Components/CommonCta/CommonCta";
import "./Domestic.css";

function Domestic() {
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
  const HandshakeIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 17l5-5-1.5-1.5-5 5V17zM8 7l-5 5 1.5 1.5 5-5V7zM12 12l-2-2-6 6h16l-6-6-2 2z" />
    </svg>
  );
  const PhoneIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );

  const whyApexFeatures = [
    "One-stop coordination — You don’t have to deal with 10 different vendors.",
    "Clarity and transparency — We only promise what we know we can deliver.",
    "Trusted execution — We work with proven partners across India and abroad.",
    "Scalable and flexible — No long-term commitments or infrastructure needed.",
    "Compliance-focused — We ensure you meet legal and industry-specific requirements.",
  ];

  const whoForItems = [
    "Foreign companies operating in India",
    "Indian businesses expanding into new states",
    "Exporters/importers seeking process support",
    "SMEs looking to simplify back-end operations",
  ];

  const domesticServices = [
    {
      title: "🏢 Domestic Trade Assistance in India",
      intro:
        "Whether you're a foreign company expanding into India or a growing domestic business, Apex can help you run local operations seamlessly—without building a team on the ground.",
      subHeader:
        "We offer end-to-end coordination through trusted vendors and service providers to help you:",
      details: [
        "📄 Navigate legal and regulatory registrations (GST, FSSAI, MSME, etc.)",
        "🔎 Source local suppliers, vendors, and partners",
        "🚚 Coordinate logistics, warehousing, and last-mile delivery",
        "💼 Manage compliance documentation and filings",
        "📊 Handle invoicing, tax assistance, and reporting",
      ],
      footer: "You stay in control—we manage the workflow behind the scenes.",
    },
    {
      title: "🌍 Import & Export Support",
      intro:
        "Looking to trade internationally? Apex helps businesses move goods across borders with well-coordinated, fully compliant processes.",
      subHeader: "Our services include:",
      details: [
        "📦 Vendor/buyer coordination across countries",
        "📄 Assistance with trade documentation (Invoice, Bill of Lading, etc.)",
        "🛃 Customs clearance via authorized partners",
        "🚢 Freight scheduling and shipment monitoring",
        "📋 Packaging, labeling, and compliance oversight",
        "🔁 Reverse logistics coordination (returns or recalls)",
      ],
      footer:
        "We don’t make unrealistic promises—but we do make international trade far less stressful.",
    },
  ];

  return (
    <div className="domestic-page">
      <section className="domestic-hero-section">
        <h2>
          Domestic & International Trade Assistance by <br />
          <span>
            <p>Apex InfoTech Solutions</p>
          </span>
        </h2>
        <p className="domestic-hero-subtext">
          Accelerate your global reach with comprehensive trade assistance
          services that simplify logistics, navigate regulatory complexities,
          and drive profitable trade outcomes.
        </p>

        <div className="common-cta-section">
          <CommonCta />
        </div>
      </section>

      <div className="trade-operations-section-wrapper">
        <div className="trade-operations-container">
          {/* Left Panel: Title */}
          <div className="trade-operations-left-panel">
            <h2 className="trade-operations-title">
              We Coordinate, You Grow — Reliable Trade Operations Delivered
              Through Our Network
            </h2>
          </div>

          {/* Right Panel: Description */}
          <div className="trade-operations-right-panel">
            <p className="trade-operations-description">
              At Apex, we simplify complex trade operations—both domestic and
              international—by connecting you with the right vendors, service
              providers, and professionals to get the job done smoothly,
              legally, and efficiently.
            </p>
            <p className="trade-operations-description">
              We don’t own warehouses, freight fleets, or factories—but we know
              who does. And we make sure everything is properly managed,
              monitored, and delivered as per your goals.
            </p>
          </div>
        </div>
      </div>

      <div className="domestic-our-services-wrapper">
        <h2 className="domestic-our-services-main-title">Our Support</h2>
        <div className="domestic-our-services-container">
          {domesticServices.map((service, index) => (
            <div className="domestic-our-services-panel" key={index}>
              <h2 className="domestic-our-services-title">{service.title}</h2>
              <p className="domestic-our-services-intro">{service.intro}</p>
              <h3 className="domestic-our-services-sub-header">
                {service.subHeader}
              </h3>
              <ul className="domestic-our-services-list">
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              {service.footer && (
                <p className="domestic-our-services-footer">{service.footer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="domestic-why-apex-features-wrapper">
        <h2 className="domestic-why-apex-features-title">
           Why Work with Apex?
        </h2>
        <div className="domestic-why-apex-features-grid">
          {whyApexFeatures.map((feature, index) => (
            <div className="domestic-why-apex-feature-card" key={index}>
              <div className="domestic-why-apex-feature-icon">
                <CheckmarkIcon />
              </div>
              <p className="domestic-why-apex-feature-text">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="domestic-who-wrapper">
        <div className="domestic-who-container">
          <div className="domestic-who-content">
            <h2 className="domestic-who-title">Who Should Consider This?</h2>
            <ul className="domestic-who-list">
              {whoForItems.map((item, index) => (
                <li key={index}>
                  <CheckmarkIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="domestic-who-graphic">
            {/* <HandshakeIcon /> */}
            {/* <p>Your Trusted Operations Partner</p> */}
          </div>
        </div>
      </div>

      <div className="domestic-cta-wrapper">
        <div className="domestic-cta-content">
          <h2 className="domestic-cta-title">
            🤝 Let’s Help You Get It Done—The Right Way
          </h2>
          <p className="domestic-cta-subtitle">
            Apex is your operations partner, not just a service provider.
          </p>
          <p className="domestic-cta-description">
            If you need real work done, legally and reliably—we’ll coordinate
            everything and keep you updated every step of the way.
          </p>
          <a href="/consultant" className="domestic-cta-button">
            <PhoneIcon />
            Talk to us today to discuss your trade and operational needs.
          </a>
          <p className="domestic-cta-footer">
            No jargon. No fluff. Just clear solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Domestic;
