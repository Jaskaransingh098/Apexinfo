import React, { useState } from "react";
import CommonCta from "../../../Components/CommonCta/CommonCta";
import "./DataManagement.css";

function DataManagement() {
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
  const DataIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 12v-2M12 8V6M12 18v-2M18 12h2M16 12h-2M6 12H4M8 12h2M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
    </svg>
  );
  const HealthcareIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.9 6.2a2.4 2.4 0 0 0-3.3-3.3L12 8.4l-5.6-5.5a2.4 2.4 0 0 0-3.3 3.3L8.4 12l-5.5 5.6a2.4 2.4 0 0 0 3.3 3.3L12 15.6l5.6 5.5a2.4 2.4 0 0 0 3.3-3.3L15.6 12z" />
    </svg>
  );
  const FinanceIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
  const RetailIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
  const LegalIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
  const SecurityIcon = () => (
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
  const TechIcon = () => (
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  );
  const ModelsIcon = () => (
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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  const [activeTab, setActiveTab] = useState(0);

  const coreServices = [
    {
      title: "Precision Data Entry Services",
      content:
        "Multichannel Data Capture: Forms, invoices, surveys, and legacy documents...",
      clientImpact:
        "Reduced catalog management costs by 58% for global e-commerce brand",
    },
    {
      title: "Advanced Data Processing & Enhancement",
      content:
        "Data Cleansing & Standardization, Enrichment Services, Custom Normalization...",
      clientImpact: "Firmographic data augmentation for B2B clients",
    },
    {
      title: "AI/ML Data Annotation & Labeling",
      content:
        "Computer Vision Annotation, Natural Language Processing, Specialized Annotation...",
      clientImpact: "98.5% inter-annotator agreement score across projects",
    },
    {
      title: "Document Digitization & Intelligent OCR",
      content:
        "Smart Document Processing, Workflow Automation, Legacy System Modernization...",
      clientImpact:
        "Digitized 1.2 million pages for national archives with 99.4% searchability",
    },
    {
      title: "Database Management & Migration",
      content:
        "Comprehensive Migration Services, Cloud Database Management, Ongoing Maintenance...",
      clientImpact: "Migrated 18TB financial database with 100% integrity",
    },
  ];

  const industries = [
    {
      icon: <HealthcareIcon />,
      title: "Healthcare Data Management",
      description:
        "PHI-compliant processing, clinical trial data management, and medical claims processing.",
    },
    {
      icon: <FinanceIcon />,
      title: "Financial Services",
      description:
        "SEC/FINRA compliant recordkeeping, fraud detection dataset creation, and portfolio reporting automation.",
    },
    {
      icon: <RetailIcon />,
      title: "E-Commerce & Retail",
      description:
        "Product attribution modeling, review sentiment analysis, and inventory optimization datasets.",
    },
    {
      icon: <LegalIcon />,
      title: "Legal & Professional Services",
      description:
        "eDiscovery processing, contract lifecycle management, and case file digitization.",
    },
  ];

  const differentiators = [
    {
      icon: <SecurityIcon />,
      title: "Security First Approach",
      items: [
        "Physical Security",
        "Digital Protection",
        "Compliance Certifications",
      ],
    },
    {
      icon: <TechIcon />,
      title: "Technology Ecosystem",
      items: ["Automation Suite", "AI Augmentation", "Cloud Infrastructure"],
    },
    {
      icon: <ModelsIcon />,
      title: "Flexible Engagement Models",
      items: ["Managed Services", "Staff Augmentation", "Project-Based"],
    },
  ];

  return (
    <div className="data-management-page">
      <section className="data-hero-section">
        <h2>
          Comprehensive Data Management & Support Services by <br />
          <span>
            <p>Apex InfoTech Solutions</p>
          </span>
        </h2>
        <p className="data-hero-subtext">
          Drive efficiency and insight with comprehensive data support services
          that streamline storage, security, and real-time accessibility across
          your enterprise systems.
        </p>

        <div className="common-cta-section">
          <CommonCta />
        </div>
      </section>

      <div className="data-management-section-wrapper">
        <div className="data-management-container">
          {/* Left Panel: Title */}
          <div className="data-management-left-panel">
            <h2 className="data-management-title">
              Transform Raw Data into Strategic Business Assets
            </h2>
          </div>

          {/* Right Panel: Description */}
          <div className="data-management-right-panel">
            <p className="data-management-description">
              At Apex InfoTech Solutions, we specialize in end-to-end data
              management services that empower businesses to harness the full
              potential of their information assets.
            </p>
            <p className="data-management-description">
              Our solutions combine military-grade security protocols,
              cutting-edge technology, and domain-specific expertise to deliver
              accurate, actionable, and compliance-ready data solutions.
            </p>
          </div>
        </div>
      </div>

      <section className="data-why-choose-wrapper">
        <h2 className="data-section-title">
          Why Choose Our Data Management Services?
        </h2>
        <div className="data-why-choose-grid">
          <div className="data-why-choose-card">✔ 99.97% Accuracy Rate</div>
          <div className="data-why-choose-card">✔ 40-60% Cost Reduction</div>
          <div className="data-why-choose-card">
            ✔ 24-48 Hour Standard Turnaround
          </div>
          <div className="data-why-choose-card">
            ✔ Full Regulatory Compliance
          </div>
          <div className="data-why-choose-card">
            ✔ Scalable Elastic Workforce
          </div>
        </div>
      </section>

      {/* --- Section 2: Core Services --- */}
      <section className="data-core-services-wrapper">
        <h2 className="data-section-title">
          Our Core Data Management Service Offerings
        </h2>
        <div className="data-core-services-tabs">
          <div className="data-tab-list">
            {coreServices.map((service, index) => (
              <button
                key={index}
                className={`data-tab-button ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                {index + 1}. {service.title}
              </button>
            ))}
          </div>
          <div className="data-tab-content">
            <h3>{coreServices[activeTab].title}</h3>
            <p>{coreServices[activeTab].content}</p>
            <div className="data-tab-impact">
              <strong>Client Impact:</strong>{" "}
              {coreServices[activeTab].clientImpact}
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Industry Solutions --- */}
      <section className="data-industry-solutions-wrapper">
        <h2 className="data-section-title">Industry-Specific Data Solutions</h2>
        <div className="data-industry-grid">
          {industries.map((industry, index) => (
            <div className="data-industry-card" key={index}>
              <div className="data-industry-icon">{industry.icon}</div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 4: Differentiators --- */}
      <section className="data-differentiators-wrapper">
        <h2 className="data-section-title">Our Differentiators</h2>
        <div className="data-differentiators-grid">
          {differentiators.map((item, index) => (
            <div className="data-differentiator-card" key={index}>
              <div className="data-differentiator-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <ul>
                {item.items.map((li, i) => (
                  <li key={i}>{li}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 5 & 6: Success & Getting Started --- */}
      <section className="data-success-start-wrapper">
        <div className="data-success-start-container">
          <div className="data-success-panel">
            <h3>Client Success Stories</h3>
            <div className="data-success-story">
              <h4>Global Retail Chain</h4>
              <p>
                <strong>Challenge:</strong> 2.4 million product records across
                12 inconsistent databases.
              </p>
              <p>
                <strong>Solution:</strong> Consolidated into a unified PIM
                system.
              </p>
              <p>
                <strong>Results:</strong> 40% faster time-to-market for new
                products.
              </p>
            </div>
            <div className="data-success-story">
              <h4>Healthcare Provider Network</h4>
              <p>
                <strong>Challenge:</strong> 8 years of unstructured patient
                records.
              </p>
              <p>
                <strong>Solution:</strong> Digitized and structured EHR
                migration.
              </p>
              <p>
                <strong>Results:</strong> 75% reduction in records retrieval
                time.
              </p>
            </div>
          </div>
          <div className="data-start-panel">
            <h3>Getting Started is Simple</h3>
            <ol className="data-start-list">
              <li>
                <span>1</span> Requirement Analysis – Free 60-minute
                consultation.
              </li>
              <li>
                <span>2</span> Pilot Project – Test with 1,000 records at no
                obligation.
              </li>
              <li>
                <span>3</span> Full Deployment – Scale with a dedicated account
                team.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataManagement;
