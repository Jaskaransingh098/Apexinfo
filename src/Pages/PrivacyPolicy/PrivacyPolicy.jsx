import React from "react";
import {
  FaLock,
  FaInfoCircle,
  FaUserShield,
  FaCookieBite,
  FaShieldAlt,
  FaUserCheck,
  FaChild,
  FaSync,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.section
        className="privacy-policy-page"
        initial="hidden"
        animate="visible"
        viewport={{ once: false }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Top Section */}
        <motion.div className="privacy-hero-section" variants={fadeInUp}>
          <h2>Privacy Policy</h2>
          <p>How Apex handles your data</p>
        </motion.div>

        {/* Hero Split Layout */}
        <motion.div
          className="privacy-hero"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div className="privacy-hero-left" variants={fadeInUp}>
            <h1>Your Privacy Matters</h1>
            <p className="updated-date">Last Updated: June 23, 2025</p>
            <p>
              Your privacy matters. At Apex, we’re committed to protecting your
              personal and business data. Whether you're exploring our platform
              or collaborating with us, we ensure your information is handled
              with transparency, accountability, and utmost care.
            </p>
          </motion.div>

          <motion.div className="privacy-hero-right" variants={fadeInUp}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
              alt="Privacy Illustration"
            />
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.section
          className="privacy-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ staggerChildren: 0.15 }}
        >
          <motion.div variants={fadeInUp}>
            <h2>
              <FaInfoCircle /> Information We Collect
            </h2>
            <p>
              We may collect a variety of personal and business information,
              including your name, email address, contact number, company
              details, and preferences. Additionally, we gather browsing
              behavior using cookies, analytics tools, and third-party
              integrations to help us understand user engagement and improve our
              platform. This data allows us to personalize your experience,
              analyze trends, troubleshoot issues, and deliver more relevant
              services. Information may also include IP addresses, device types,
              browser versions, and referral sources, all of which help us
              enhance security, performance, and functionality across devices.
              In some cases, we may also track form submissions, button
              interactions, and campaign engagement to optimize user journeys
              and improve our service offerings based on real-time behavior.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2>
              <FaUserCheck /> How We Use Your Information
            </h2>
            <ul>
              <li>
                To deliver our services, respond to inquiries, and fulfill
                requests.
              </li>
              <li>
                Improve website performance, user experience, and
                personalization.
              </li>
              <li>
                Send service updates, newsletters, or relevant promotional
                content (only when consent is given).
              </li>
              <li>
                Comply with applicable legal, financial, and regulatory
                obligations.
              </li>
              <li>
                To analyze aggregated user behavior and engagement trends for
                internal strategy and platform improvements.
              </li>
              <li>
                To secure our systems, detect potential threats or fraudulent
                activity, and protect the integrity of our services.
              </li>
              <li>
                To support business operations such as client onboarding,
                technical troubleshooting, and service customization.
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2>
              <FaUserShield /> Information Sharing
            </h2>
            <p>
              We do not sell or lease your personal data to third parties. We
              may share information only with trusted service providers or
              partners who help us operate our business (e.g., cloud hosting,
              analytics). All third parties are contractually obligated to
              safeguard your data and use it only for authorized purposes. In
              certain cases, we may also share data with legal authorities if
              required by law or to protect our rights, users, or operations.
              Additionally, anonymized and aggregated data may be shared for
              research, insights, or industry reporting without identifying
              individual users. We ensure all such sharing complies with
              applicable data protection regulations.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2>
              <FaCookieBite /> Cookies & Tracking
            </h2>
            <p>
              We use cookies and similar tracking technologies to personalize
              content, measure traffic, and optimize your experience across our
              website. These may include session cookies, persistent cookies,
              and third-party scripts (e.g., Google Analytics or social media
              pixels) to understand user behavior and improve our interface and
              services. Cookies help us remember your preferences, deliver
              relevant content, and track performance. You can control,
              restrict, or disable cookies in your browser settings at any time;
              however, doing so may affect certain site functionalities or user
              preferences. By continuing to use our site, you consent to our use
              of cookies as described.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2>
              <FaShieldAlt /> Data Security
            </h2>
            <p>
              We implement industry-standard security measures such as
              encryption, firewalls, and regular security audits to protect your
              information from unauthorized access, misuse, alteration, or
              disclosure. Our systems are monitored for vulnerabilities and
              patched routinely to mitigate risks. Access to personal data is
              strictly limited to authorized personnel who are trained in secure
              data handling practices and bound by confidentiality agreements.
              In addition, we employ secure data transmission protocols (e.g.,
              HTTPS/SSL) and store sensitive information using robust access
              controls to ensure integrity and confidentiality across our
              infrastructure.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2>
              <FaUserCheck /> Your Rights
            </h2>
            <ul>
              <li>
                Request access to your personal data at any time and understand
                how it is being used.
              </li>
              <li>
                Update, correct, or complete inaccurate or outdated information
                we hold about you.
              </li>
              <li>
                Withdraw previously given consent for marketing, communications,
                or data processing activities.
              </li>
              <li>
                Request data deletion or removal, subject to legal, contractual,
                or regulatory obligations.
              </li>
              <li>
                Restrict or object to certain types of data processing, such as
                profiling or direct marketing.
              </li>
              <li>
                Receive a copy of your personal data in a portable format where
                technically feasible.
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2>
              <FaChild /> Retention & Children
            </h2>
            <p>
              We retain personal information only for as long as it is necessary
              to fulfill the purposes outlined in this policy, including
              providing services, complying with legal and regulatory
              obligations, resolving disputes, and enforcing our agreements.
              Once data is no longer required, it is securely deleted or
              anonymized. Apex does not knowingly collect, store, or process
              personal data from children under the age of 16. If we become
              aware that such information has been inadvertently gathered, we
              take prompt action to remove it from our systems and prevent
              further collection. Parents or guardians are encouraged to contact
              us if they believe their child’s data has been submitted without
              consent.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2>
              <FaSync /> Updates to Policy
            </h2>
            <p>
              Our privacy practices may evolve over time to reflect changes in
              regulations, technology, or business operations. When we make
              material changes to this policy, we will update the “Last Updated”
              date at the top of the page and, where appropriate, provide
              additional notice (such as through email or platform alerts). We
              encourage you to review this page periodically to stay informed
              about how we protect your information and to ensure you continue
              to agree with the terms outlined.
            </p>
          </motion.div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          className="privacy-contact-section"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <h2>Have Questions?</h2>
          <p>
            We’re here to help. If you have any questions about how your data is
            handled, or if you'd like to make a request related to your personal
            information, please reach out to our support team.
          </p>
          <a href="/consultant" className="privacy-contact-btn">
            Contact Us
          </a>
        </motion.section>
      </motion.section>
    </>
  );
};

export default PrivacyPolicy;
