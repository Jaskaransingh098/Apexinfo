import React from "react";
import CommonCta from "../../../Components/CommonCta/CommonCta";
import "./Software.css";

function Software() {
  // --- Icon Components for clarity ---
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
  const CtoIcon = () => (
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
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M22 8H2" />
      <path d="M7 13h3" />
      <path d="M7 17h3" />
    </svg>
  );
  const CfoIcon = () => (
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
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
  const CeoIcon = () => (
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
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  const executionModels = [
    {
      number: "1",
      title: "Full Process Ownership",
      description: "For when you need turnkey delivery.",
      details: [
        "Dedicated project lead",
        "Cross-functional specialists",
        "Weekly business reviews",
      ],
      example: "Built and launched fintech compliance portal in 12 weeks",
    },
    {
      number: "2",
      title: "Skill Augmentation",
      description: "For existing teams needing specific expertise.",
      details: ["Cloud migrations", "AI integration", "Security hardening"],
      example: "Added 3 React Native experts to accelerate app rewrite",
    },
    {
      number: "3",
      title: "Surge Capacity",
      description: "For crunch time delivery.",
      details: ["Product launches", "Funding deadlines", "Compliance sprints"],
      example: "Deployed 5 QA engineers to meet FDA submission deadline",
    },
  ];

  return (
    <div className="software-page">
      <section className="software-hero-section">
        <h2>
          Software Development Services by <br />
          <span>
            <p>Apex InfoTech Solutions</p>
          </span>
        </h2>
        <p className="software-hero-subtext">
          Get end-to-end software development services engineered to deliver
          scalable, secure, and high-performance solutions that align with your
          business goals and drive digital transformation.
        </p>

        <div className="common-cta-section">
          <CommonCta />
        </div>
      </section>

      <section className="software-intro-wrapper">
        <h1 className="software-intro-title">
          Your Technical Execution Partner
        </h1>
        <p className="software-intro-subtitle">
          We don't just staff projects - we own outcomes
        </p>
        <div className="software-how-we-work-grid">
          <div className="software-how-we-work-item">
            ✅ Embedded Teams - Work directly in your tools/systems
          </div>
          <div className="software-how-we-work-item">
            ✅ Specialized Pods - Right-fit teams for each project phase
          </div>
          <div className="software-how-we-work-item">
            ✅ Zero Management Overhead - We handle execution, you steer
            strategy
          </div>
        </div>
      </section>

      {/* --- Execution Models Section --- */}
      <section className="software-models-wrapper">
        <h2 className="software-section-title">Our Execution Models</h2>
        <div className="software-models-grid">
          {executionModels.map((model, index) => (
            <div className="software-model-card" key={index}>
              <div className="software-model-number">{model.number}</div>
              <h3 className="software-model-title">{model.title}</h3>
              <p className="software-model-description">{model.description}</p>
              <h4 className="software-model-details-header">We provide:</h4>
              <ul className="software-model-details-list">
                {model.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <div className="software-model-example">
                <strong>Example:</strong> {model.example}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Why Clients Choose Us Section --- */}
      <section className="software-why-choose-wrapper">
        <h2 className="software-section-title">
          Why Clients Choose This Approach
        </h2>
        <div className="software-why-choose-grid">
          <div className="software-why-choose-column">
            <div className="software-why-choose-icon">
              <CtoIcon />
            </div>
            <h3>For CTOs</h3>
            <ul>
              <li>40% faster delivery vs in-house hiring</li>
              <li>No recruitment/onboarding time</li>
              <li>Scale up/down within days</li>
            </ul>
          </div>
          <div className="software-why-choose-column">
            <div className="software-why-choose-icon">
              <CfoIcon />
            </div>
            <h3>For CFOs</h3>
            <ul>
              <li>Predictable monthly costs</li>
              <li>No benefits/overhead</li>
              <li>Pay only for productive hours</li>
            </ul>
          </div>
          <div className="software-why-choose-column">
            <div className="software-why-choose-icon">
              <CeoIcon />
            </div>
            <h3>For CEOs</h3>
            <ul>
              <li>Keep focus on core business</li>
              <li>Mitigate key person risk</li>
              <li>Accelerate time-to-market</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Execution Guarantee Section --- */}
      <section className="software-guarantee-wrapper">
        <h2 className="software-section-title">Our Execution Guarantee</h2>
        <div className="software-guarantee-grid">
          <div className="software-guarantee-item">
            <h3>2-Week Ramp-Up</h3>
            <p>Full productivity in 10 business days</p>
          </div>
          <div className="software-guarantee-item">
            <h3>90-Day Commitment</h3>
            <p>Month-to-month after initial period</p>
          </div>
          <div className="software-guarantee-item">
            <h3>Transparent Tracking</h3>
            <p>Real-time dashboards in your tools</p>
          </div>
        </div>
      </section>

      {/* --- Get Started Section --- */}
      <section className="software-get-started-wrapper">
        <h2 className="software-section-title">
          Get Started in 3 Simple Steps
        </h2>
        <div className="software-get-started-steps">
          <div className="software-get-started-step">
            <div className="software-step-number">1</div>
            <p>Share Your Current Challenge (1-hr call)</p>
          </div>
          <div className="software-step-arrow">→</div>
          <div className="software-get-started-step">
            <div className="software-step-number">2</div>
            <p>Receive Custom Team Proposal (Within 48 hrs)</p>
          </div>
          <div className="software-step-arrow">→</div>
          <div className="software-get-started-step">
            <div className="software-step-number">3</div>
            <p>Kick Off Within 5 Days</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Software;
