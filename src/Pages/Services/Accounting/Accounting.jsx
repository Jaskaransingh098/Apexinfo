import React from "react";
import CommonCta from "../../../Components/CommonCta/CommonCta";
import "./Accounting.css";

function Accounting() {
  const BookkeepingIcon = () => (
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
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v2H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v2H6.5A2.5 2.5 0 0 0 4 4.5v15z" />
    </svg>
  );
  const AccountsIcon = () => (
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
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
  const StatementIcon = () => (
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

  const IndustryIcon = () => (
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );

  const coreServices = [
    {
      icon: <BookkeepingIcon />,
      title: "Bookkeeping & General Ledger Maintenance",
      description:
        "Maintain clean and up-to-date financial records with daily, weekly, or monthly bookkeeping services.",
    },
    {
      icon: <AccountsIcon />,
      title: "Accounts Payable (AP) & Receivable (AR) Management",
      description:
        "Track payables and receivables, ensure on-time payments, manage vendor/client communication, and reduce DSO.",
    },
    {
      icon: <StatementIcon />,
      title: "Financial Statement Preparation",
      description:
        "We prepare accurate balance sheets, income statements, and cash flow reports to support internal decisions and investor communication.",
    },
    {
      icon: <BookkeepingIcon />,
      title: "Bank & Credit Card Reconciliation",
      description:
        "Match and reconcile your accounts with precision to prevent fraud and maintain financial integrity.",
    },
    {
      icon: <AccountsIcon />,
      title: "Invoice Processing & Billing Support",
      description:
        "We handle recurring and one-time billing, invoice generation, and payment tracking—seamlessly and efficiently.",
    },
    {
      icon: <StatementIcon />,
      title: "Budgeting & Forecasting",
      description:
        "Gain insights into your business performance with expert financial planning and projections.",
    },
    {
      icon: <BookkeepingIcon />,
      title: "Tax Preparation Support",
      description:
        "We assist with compiling documentation, data entry, and filing prep for U.S., Canada, UK, and other country-specific tax compliance needs.",
    },
  ];

  const industries = [
    "Logistics & Transportation",
    "Retail & E-commerce",
    "Manufacturing",
    "Healthcare",
    "Professional Services",
    "Real Estate",
    "Financial Firms & CPAs",
  ];

  return (
    <div className="accounting-page">
      <section className="accounting-hero-section">
        <h2>
          Accounting Services by <br />
          <span>
            <p>Apex InfoTech Solutions</p>
          </span>
        </h2>
        <p className="accounting-hero-subtext">
          From bookkeeping to financial strategy, our accounting services
          deliver clarity, control, and confidence in your numbers.
        </p>

        <div className="common-cta-section">
          <CommonCta />
        </div>
      </section>

      <section className="accounting-intro-wrapper">
        <div className="accounting-intro-content">
          <h1 className="accounting-intro-title">
            Reliable. Scalable. Cost-Effective.
          </h1>
          <p className="accounting-intro-description">
            At Apex Infotech Solutions, we help businesses streamline their
            financial operations through professional, outsourced accounting
            services. Whether you're a startup, a growing enterprise, or an
            international firm looking for offshore accounting support, we
            provide accurate, timely, and compliant solutions tailored to your
            needs.
          </p>
          <p className="accounting-intro-highlight">
            By partnering with us, clients reduce overhead, eliminate errors,
            and gain access to experienced accountants and cutting-edge
            tools—without the high cost of in-house teams.
          </p>
        </div>
      </section>

      {/* --- Core Services Section --- */}
      <section className="accounting-core-services-wrapper">
        <h2 className="accounting-section-title">
          Our Core Accounting Services
        </h2>
        <div className="accounting-services-grid">
          {coreServices.map((service, index) => (
            <div className="accounting-service-card" key={index}>
              <div className="accounting-service-icon">{service.icon}</div>
              <h3 className="accounting-service-title">{service.title}</h3>
              <p className="accounting-service-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Why Outsource Section --- */}
      <section className="accounting-why-outsource-wrapper">
        <h2 className="accounting-section-title">
          Why Outsource Accounting to Apex Infotech Solutions?
        </h2>
        <div className="accounting-why-outsource-grid">
          <div className="accounting-why-outsource-item">
            ✅ Skilled Professionals
          </div>
          <div className="accounting-why-outsource-item">
            ✅ Data Accuracy & Compliance
          </div>
          <div className="accounting-why-outsource-item">
            ✅ Modern Accounting Tools
          </div>
          <div className="accounting-why-outsource-item">
            ✅ Secure Data Handling
          </div>
          <div className="accounting-why-outsource-item">
            ✅ 24/7 Support Across Time Zones
          </div>
          <div className="accounting-why-outsource-item">
            ✅ Scalable Engagement Models
          </div>
        </div>
      </section>

      {/* --- Industries We Serve Section --- */}
      <section className="accounting-industries-wrapper">
        <h2 className="accounting-section-title">Industries We Serve</h2>
        <div className="accounting-industries-container">
          {industries.map((industry, index) => (
            <div className="accounting-industry-card" key={index}>
              <div className="accounting-industry-icon">
                <IndustryIcon />
              </div>
              <h3 className="accounting-industry-title">{industry}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* --- Final CTA Section --- */}
      <section className="accounting-final-cta-wrapper">
        <h2 className="accounting-final-cta-title">
          Let’s Simplify Your Finances
        </h2>
        <p className="accounting-final-cta-description">
          Focus on growing your business—leave the accounting to us. At Apex
          Infotech Solutions, we become your extended finance team, helping you
          cut costs, stay compliant, and make better financial decisions.
        </p>
      </section>
    </div>
  );
}

export default Accounting;
