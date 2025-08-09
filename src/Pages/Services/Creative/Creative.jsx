import React from "react";
import CommonCta from "../../../Components/CommonCta/CommonCta";
import "./Creative.css";

function Creative() {
  // --- Icon Components for clarity ---
  const VideoIcon = () => (
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
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.5 15.5 15.5 12 9.5 8.5 9.5 15.5" />
    </svg>
  );
  const DesignIcon = () => (
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
  const IllustrationIcon = () => (
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
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
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

  
  const services = [
    {
      icon: <VideoIcon />,
      title: "Video Editing Services",
      description:
        "Revamp existing footage or build from scratch. We create compelling, polished videos that increase engagement across platforms.",
    },
    {
      icon: <DesignIcon />,
      title: "Graphic Design Services",
      description:
        "From infographics and brochures to brand identity assets, we bring your vision to life with eye-catching visuals.",
    },
    {
      icon: <IllustrationIcon />,
      title: "Illustration Services",
      description:
        "Custom illustrations that convey complex concepts clearly—ideal for books, product guides, architecture, and storyboards.",
    },
    {
      icon: <VideoIcon />,
      title: "PowerPoint & Presentation Design",
      description:
        "Transform your ideas into engaging presentations that are sleek, professional, and visually impactful.",
    },
    {
      icon: <DesignIcon />,
      title: "Exhibition & Event Design",
      description:
        "Design immersive booth experiences and print assets that captivate attention and elevate your brand during live events.",
    },
    {
      icon: <IllustrationIcon />,
      title: "Magazine & InDesign Layouts",
      description:
        "Whether it’s editorial design or layout-intensive documents, we ensure every page aligns with your brand and audience expectations.",
    },
    {
      icon: <VideoIcon />,
      title: "Animation Services",
      description:
        "Bring your story to life with 2D/3D animation, explainer videos, and visual effects using industry-standard tools and creative expertise.",
    },
    {
      icon: <DesignIcon />,
      title: "Prepress & DTP Services",
      description:
        "Ensure flawless print-ready files with our prepress and desktop publishing services—covering everything from layout to final proofing.",
    },
    {
      icon: <IllustrationIcon />,
      title: "Real Estate & Wedding Video Editing",
      description:
        "We specialize in tailoring content for niche segments—highlighting properties for real estate firms and storytelling for wedding films.",
    },
  ];

  const whyChooseFeatures = [
    "Custom-Tailored Designs",
    "Experienced Design Professionals",
    "Modern Tech Stack",
    "Scalable & Cost-Efficient",
    "Cross-Platform Delivery",
    "Quick Turnaround + QA",
  ];

  return (
    <div className="creative-page">
      <section className="creative-hero-section">
        <h2>
          Creative Design Services by <br />
          <span>
            <p>Apex InfoTech Solutions</p>
          </span>
        </h2>
        <p className="creative-hero-subtext">
          Get innovative creative design services that blend strategy,
          aesthetics, and functionality — delivering impactful visuals that
          drive engagement and elevate your brand presence.
        </p>

        <div className="common-cta-section">
          <CommonCta />
        </div>
      </section>

      <div className="creative-section-wrapper">
        <div className="creative-container">
          {/* Left Panel: Title */}
          <div className="creative-left-panel">
            <h2 className="creative-title">
              Where Strategy Meets Stunning Visuals
            </h2>
          </div>

          {/* Right Panel: Description */}
          <div className="creative-right-panel">
            <p className="creative-description">
              At Apex Infotech Solutions, we don’t just design—we tell your
              story. Our creative design services blend innovation, aesthetics,
              and function to turn ideas into brand assets that drive
              engagement, conversions, and recognition.
            </p>
            <p className="creative-description">
              Design is more than decoration—it’s a business advantage. We help
              brands scale visual impact while saving up to 60% on production
              costs by outsourcing creative needs to a reliable partner.
            </p>
          </div>
        </div>
      </div>

      <section className="creative-what-we-offer-wrapper">
        <div className="creative-section-header">
          <h2 className="creative-section-title">What We Offer</h2>
          <p className="creative-section-subtitle">
            From high-performing marketing content to immersive experiences, we
            support businesses across industries with end-to-end creative design
            solutions:
          </p>
        </div>
        <div className="creative-services-grid">
          {services.map((service, index) => (
            <div className="creative-service-card" key={index}>
              <div className="creative-service-icon">{service.icon}</div>
              <h3 className="creative-service-title">{service.title}</h3>
              <p className="creative-service-description">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 2: Why Choose Apex --- */}
      <section className="creative-why-choose-wrapper">
        <div className="creative-section-header">
          <h2 className="creative-section-title">
            Why Choose Apex for Creative Design?
          </h2>
        </div>
        <div className="creative-why-choose-container">
          <ul className="creative-why-choose-list">
            {whyChooseFeatures.map((feature, index) => (
              <li key={index}>
                <div className="creative-checkmark-icon">
                  <CheckmarkIcon />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --- Section 3: Final CTA --- */}
      <section className="creative-final-cta-wrapper">
        <div className="creative-final-cta-content">
          <h2 className="creative-final-cta-title">
            Creative That Works. Design That Delivers.
          </h2>
          <p className="creative-final-cta-description">
            Ready to turn your vision into visuals that perform? Let Apex
            Infotech Solutions support your brand with strategic creative design
            that stands out—and scales with you.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Creative;
