import React from "react";
import CommonCta from "../../../Components/CommonCta/CommonCta";
import "./Annotion.css";

function Annotion() {
  const AnnotationIcon = () => (
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
      <path d="M21.174 6.812a1 1 0 0 0-1.141-1.342L12 12.812l-7.033-7.342a1 1 0 0 0-1.141 1.342l7.5 7.875a1 1 0 0 0 1.342 0l7.5-7.875z" />
      <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
    </svg>
  );

  const HumanAiIcon = () => (
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
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      <path d="M19 10V7a2 2 0 0 0-2-2h-1" />
      <path d="M19 14v-1a2 2 0 0 0-2-2h-2" />
      <path d="M5 7v3" />
      <path d="M5 14v-1a2 2 0 0 1 2-2h2" />
    </svg>
  );

  const WorkflowIcon = () => (
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
      <path d="M12 20V10" />
      <path d="M12 10V4" />
      <path d="M12 10h6l-3-3" />
      <path d="M12 10H6l3-3" />
      <path d="M6 20h12" />
    </svg>
  );

  const VersatilityIcon = () => (
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );

  const ScalableIcon = () => (
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
      <path d="M3 3v18h18" />
      <path d="M7 14l4-4 4 4 6-6" />
    </svg>
  );

  const annotionServices = [
    {
      title: "2D Bounding Box Annotation",
      subtitle: "Training Self-Driving Vehicles with Visual Accuracy",
      content:
        "We deliver precise 2D annotations for identifying and tracking objects in videos and images—such as vehicles, pedestrians, signs, and obstacles.",
      details: [
        "Object-level labeling with pixel-accurate bounding boxes",
        "Attribute tagging (e.g., direction, motion, type)",
        "Frame-by-frame video annotation for object tracking",
        "Ideal for: Object detection, lane recognition, traffic analysis",
      ],
    },
    {
      title: "3D Bounding Box Annotation",
      subtitle: "Spatial Intelligence for Autonomous Systems",
      content:
        "We annotate point cloud and LiDAR data to create depth-aware 3D cuboids, enabling autonomous vehicles to understand object distance and orientation.",
      details: [
        "Multi-sensor support (LiDAR, radar, camera fusion)",
        "Frame consistency across video sequences",
        "Used in path planning, collision avoidance, and 3D mapping",
      ],
    },
    {
      title: "Polygon Annotation",
      content:
        "Accurate shape-based labeling for complex or irregular objects, especially in satellite or drone imagery—where bounding boxes aren’t enough.",
    },
    {
      title: "Polyline Annotation",
      content:
        "Precise linear annotations for roads, rail lines, airstrips, and pathways—vital for GIS mapping and AV training datasets.",
    },
    {
      title: "Semantic Segmentation",
      content:
        "Pixel-level labeling that assigns a class to every pixel—perfect for retail, urban planning, environmental monitoring, and more.",
    },
    {
      title: "Key Point Annotation",
      content:
        "We mark facial features, joint locations, or object parts using single-point accuracy for pose estimation, facial recognition, and behavior tracking.",
    },
    {
      title: "Geospatial Annotation",
      content:
        "From aerial to drone-captured data, we deliver labeled geospatial datasets for mapping, object identification, and AI model training.",
    },
  ];

  const annotionFeatures = [
    {
      icon: <HumanAiIcon />,
      title: "Human + AI Approach",
      description: "Combining technology and expertise for high accuracy",
    },
    {
      icon: <WorkflowIcon />,
      title: "Custom Workflows",
      description: "Designed to match your project needs and timeline",
    },
    {
      icon: <VersatilityIcon />,
      title: "Domain Versatility",
      description: "From autonomous driving to remote sensing",
    },
    {
      icon: <ScalableIcon />,
      title: "Scalable Execution",
      description: "Start small or go enterprise—we’re built for both",
    },
  ];

  return (
    <div className="annotion-page">
      <section className="annotion-hero-section">
        <h2>
          Annotation & Labeling Services by <br />
          <span>
            <p>Apex InfoTech Solutions</p>
          </span>
        </h2>
        <p className="annotion-hero-subtext">
          Get precision-driven data annotation and labeling solutions to fuel AI
          models with high-quality training data, ensuring up to 98% labeling
          accuracy and consistent model performance.
        </p>

        <div className="common-cta-section">
          <CommonCta />
        </div>
      </section>

      <div className="ai-training-section-wrapper">
        <div className="ai-training-container">
          {/* Left Panel: Title */}
          <div className="ai-training-left-panel">
            <h2 className="ai-training-title">
              AI-Ready Training Data Tailored for Your Vision
            </h2>
          </div>

          {/* Right Panel: Description */}
          <div className="ai-training-right-panel">
            <p className="ai-training-description">
              At Apex Infotech Solutions, we specialize in delivering accurate
              and scalable annotation and labeling services that fuel machine
              learning and AI systems across industries. With a team of skilled
              professionals and AI-enabled tools, we help transform unstructured
              data into structured, high-quality datasets.
            </p>
            <p className="ai-training-description">
              Whether you're building autonomous driving systems, enhancing
              computer vision, or working with geospatial models, our customized
              workflows ensure precision, speed, and reliability—from pilot
              phases to enterprise-scale projects.
            </p>
          </div>
        </div>
      </div>

      <div className="annotion-our-services-section-wrapper">
        <div className="annotion-our-services-header">
          <h2 className="annotion-our-services-main-title">What We Offer</h2>
          <p className="annotion-our-services-sub-title">
            We provide a full suite of annotation services designed to meet
            complex project demands:
          </p>
        </div>
        <div className="annotion-our-services-grid-container">
          {annotionServices.map((service, index) => (
            <div className="annotion-our-services-panel" key={index}>
              <h3 className="annotion-our-services-panel-title">
                {service.title}
              </h3>
              {service.subtitle && (
                <h4 className="annotion-our-services-panel-subtitle">
                  {service.subtitle}
                </h4>
              )}
              <p className="annotion-our-services-panel-description">
                {service.content}
              </p>
              {service.details && (
                <ul className="annotion-our-services-panel-details-list">
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="annotion-why-apex-wrapper">
        <div className="annotion-why-apex-container">
          <h2 className="annotion-why-apex-main-title">
            Why Apex Infotech Solutions?
          </h2>
          <div className="annotion-why-apex-grid">
            {annotionFeatures.map((feature, index) => (
              <div className="annotion-why-apex-card" key={index}>
                <div className="annotion-why-apex-card-icon">
                  {feature.icon}
                </div>
                <h3 className="annotion-why-apex-card-title">
                  {feature.title}
                </h3>
                <p className="annotion-why-apex-card-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <p className="annotion-why-apex-footer-text">
            At Apex Infotech Solutions, we don’t just annotate data—we make it
            intelligent.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Annotion;
