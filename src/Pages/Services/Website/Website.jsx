import React from "react";
import CommonCta from "../../../Components/CommonCta/CommonCta";
import "./Website.css";

function Website() {
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
  const PhoneIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
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

  const services = [
    {
      title: "Custom Website Development",
      details: [
        "Responsive design",
        "Fast loading speed",
        "SEO-friendly architecture",
        "Your preferred stack (React, Laravel, WordPress, etc.)",
      ],
    },
    {
      title: "Ecommerce Development",
      details: [
        "Shopify, WooCommerce, Magento, or custom",
        "Payment gateway integration",
        "Inventory management systems",
        "Conversion-optimized design",
      ],
    },
    {
      title: "CMS Development",
      details: [
        "WordPress, Webflow, Strapi, Ghost, etc.",
        "Multilingual & multisite setups",
        "Custom admin dashboards",
        "Easy CRM/email integrations",
      ],
    },
    {
      title: "UI/UX Design",
      details: [
        "User journey mapping",
        "Wireframes and prototypes",
        "Visual design aligned with your brand",
        "Accessibility and responsiveness",
      ],
    },
    {
      title: "Web App Development",
      details: [
        "API-driven architecture",
        "Authentication & security layers",
        "Real-time data functionality",
        "MERN, Django, Laravel, Next.js, etc.",
      ],
    },
    {
      title: "Website Redesign & Optimization",
      details: [
        "Technical audits & speed improvement",
        "UI/UX enhancements",
        "SEO and content upgrades",
        "Conversion optimization",
      ],
    },
    {
      title: "Landing Page Development",
      details: [
        "Mobile-first, fast-loading templates",
        "Copywriting & CTA optimization",
        "A/B testing capability",
        "Seamless CRM/form integrations",
      ],
    },
  ];

  const setsApartFeatures = [
    "You Don’t Deal with 5 Freelancers",
    "No Cookie-Cutter Templates",
    "No Overpromises — Just Delivery",
    "Ongoing Support Available",
    "Security & Compliance",
  ];

  
  const industries = [
    "B2B and B2C",
    "Healthcare & Clinics",
    "EdTech & eLearning",
    "Real Estate & Construction",
    "Financial Services",
    "eCommerce & Retail",
    "SaaS & Tech Startups",
    "Hospitality, Events & Travel",
  ];

  const techStack = {
    Frontend: "React, Vue.js, HTML5, Tailwind, Bootstrap",
    Backend: "Node.js, PHP, Laravel, Python (Django/Flask)",
    CMS: "WordPress, Webflow, Ghost",
    eCommerce: "Shopify, WooCommerce, Magento",
    Infrastructure: "AWS, DigitalOcean, Vercel, Netlify",
    "Analytics & Integrations":
      "GA4, Hotjar, HubSpot, Stripe, Mailchimp, Zapier",
  };

  return (
    <div className="website-page">
      <section className="website-hero-section">
        <h2>
          Website Development Services by <br />
          <span>
            <p>Apex InfoTech Solutions</p>
          </span>
        </h2>
        <p className="website-hero-subtext">
          Empower your brand with website development solutions tailored for
          modern performance, security, and aesthetic appeal.
        </p>

        <div className="common-cta-section">
          <CommonCta />
        </div>
      </section>

      <div className="website-section-wrapper">
        <div className="website-container">
          {/* Left Panel: Title */}
          <div className="website-left-panel">
            <h2 className="website-title">
              Website Development Services that Deliver — Without the Overhead
            </h2>
          </div>

          {/* Right Panel: Description */}
          <div className="website-right-panel">
            <p className="website-description">
              At Apex, we specialize in building modern, scalable, and
              high-performing websites that align with your business goals —
              without burdening you with technical management. Our role? To get
              your digital presence built the right way through a proven network
              of expert developers, designers, and solution architects. You
              don’t need to deal with multiple vendors — we handle it all.
            </p>
            <p className="website-description">
              Whether you’re a startup launching your first site, or an
              enterprise revamping for performance, we provide full-stack
              website development services powered by third-party specialists
              and backed by Apex’s commitment to project ownership,
              transparency, and delivery.
            </p>
          </div>
        </div>
      </div>

      <section className="website-core-services-wrapper">
        <h2 className="website-section-title">
          Our Website Development Services
        </h2>
        <div className="website-services-grid">
          {services.map((service, index) => (
            <div className="website-service-card" key={index}>
              <h3 className="website-service-title">{service.title}</h3>
              <ul className="website-service-list">
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- What Sets Apex Apart Section --- */}
      <section className="website-sets-apart-wrapper">
        <h2 className="website-section-title">What Sets Apex Apart</h2>
        <div className="website-sets-apart-grid">
          {setsApartFeatures.map((feature, index) => (
            <div className="website-sets-apart-card" key={index}>
              <div className="website-sets-apart-icon">
                <CheckmarkIcon />
              </div>
              <p className="website-sets-apart-text">
                {feature.replace("✅ ", "")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Industries Section --- */}
      <section className="website-industries-wrapper">
        <h2 className="website-section-title">Industries We Build For</h2>
        <div className="website-industries-container">
          {industries.map((industry, index) => (
            <div className="website-industry-tag" key={index}>
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* --- Project Flow Section --- */}
      <section className="website-project-flow-wrapper">
        <h2 className="website-section-title">Project Flow: How We Work</h2>
        <div className="website-project-flow-timeline">
          <div className="website-project-flow-step">
            <span>1</span> Discovery & Planning
          </div>
          <div className="website-project-flow-step">
            <span>2</span> Design & Prototype
          </div>
          <div className="website-project-flow-step">
            <span>3</span> Development
          </div>
          <div className="website-project-flow-step">
            <span>4</span> QA & Launch
          </div>
          <div className="website-project-flow-step">
            <span>5</span> Support & Scale
          </div>
        </div>
      </section>

      {/* --- Tech Stack Section --- */}
      <section className="website-tech-stack-wrapper">
        <h2 className="website-section-title">Tech Stack Expertise</h2>
        <p className="website-tech-stack-subtitle">
          We work with (but not limited to):
        </p>
        <div className="website-tech-stack-grid">
          {Object.entries(techStack).map(([category, technologies]) => (
            <div className="website-tech-stack-category" key={category}>
              <h3>{category}</h3>
              <p>{technologies}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section className="website-final-cta-wrapper">
        <h2 className="website-final-cta-title">
          Let’s Build Something Better — Together
        </h2>
        <p className="website-final-cta-description">
          Your idea, our execution. With Apex, your website project gets built
          efficiently, professionally, and without surprises. No jargon. No fake
          timelines. Just a well-managed digital build that works.
        </p>
        <a href="/consultant" className="website-final-cta-button">
          <PhoneIcon /> Call us
        </a>
      </section>
    </div>
  );
}

export default Website;
