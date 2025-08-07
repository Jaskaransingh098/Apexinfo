import CommonCta from "../../../Components/CommonCta/CommonCta";
import "./CallCenter.css";

function CallCenter() {
  const IndustryIcon = () => (
    <svg
      className="call-industries-icon"
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );

  const industries = [
    {
      title: "E-commerce",
      description: "Reduce cart abandonment by 15% with instant chat support.",
    },
    {
      title: "Healthcare",
      description:
        "Schedule patient appointments via SMS/voice with HIPAA-safe workflows.",
    },
    {
      title: "Technical Support Outsourcing",
      description: "Instant Resolutions for IT Issues.",
    },
  ];

  return (
    <div className="call-center-page">
      <section className="call-center-hero-section">
        <h2>
          Comprehensive Call Center Services by <br />
          <span>
            <p>Apex InfoTech Solutions</p>
          </span>
        </h2>
        <p className="call-center-hero-subtext">
          Get lean-driven call center optimization services to give you
          dependable quality that locks in a guaranteed 95% Customer
          Satisfaction Score (CSAT).
        </p>

        <div className="common-cta-section">
          <CommonCta />
        </div>
      </section>

      <div className="callCenter-wrapper">
        <h2 className="callCenter-main-heading">What We Offer</h2>
        <div className="callCenter-section-container">
          {/* Left Panel for Inbound Services */}
          <div className="callCenter-panel">
            <h3 className="callCenter-title">Inbound Call Center Services</h3>
            <p className="callCenter-description">
              <strong>Always-On Support:</strong> Customers reach a live
              agent—not a machine—24/7, including holidays.
            </p>
            <p className="callCenter-description">
              <strong>Smart Call Routing:</strong> Advanced algorithms direct
              calls to the most qualified agent based on language, skill set, or
              issue complexity.
            </p>
            <p className="callCenter-description">
              <strong>Personalized Interactions:</strong> Agents access
              integrated CRM data (purchase history, past tickets) for
              contextual support.
            </p>
            <h4 className="callCenter-subtitle">Business Impact:</h4>
            <ul className="callCenter-list">
              <li>
                ✔️ Higher CSAT: Reduce frustration with near-zero hold times.
              </li>
              <li>
                ✔️ Increased Retention: 68% of customers stay loyal after
                positive service experiences (Source: Salesforce).
              </li>
              <li>
                ✔️ Cost Efficiency: Pay only for active agent time, not idle
                hours.
              </li>
            </ul>
          </div>

          {/* Right Panel for Outbound Services */}
          <div className="callCenter-panel">
            <h3 className="callCenter-title">Outbound Call Center Services</h3>
            <h4 className="callCenter-subtitle">
              Proactive Engagement That Converts
            </h4>
            <p className="callCenter-description">
              <strong>Key Features:</strong>
            </p>
            <ul className="callCenter-list">
              <li>
                <strong>Targeted Campaigns:</strong> From sales prospecting to
                customer win-back, we tailor scripts to your goals.
              </li>
              <li>
                <strong>Predictive Analytics:</strong> Identify the best time to
                call and high-propensity leads for 2x higher conversions.
              </li>
              <li>
                <strong>Compliance-First:</strong> Strict adherence to TCPA,
                GDPR, and Do-Not-Call lists to protect your brand reputation.
              </li>
            </ul>

            <div className="callCenter-panel">
              <h3 className="call-center-subtitle">Use Cases:</h3>
              <ul className="callCenter-list">
                <li>
                  <strong>Telemarketing:</strong> Book 30% more demos for your
                  SaaS product.
                </li>
                <li>
                  <strong>Surveys:</strong> Collect 10,000+ customer feedback
                  responses/month.
                </li>
                <li>
                  <strong>Collections:</strong> Recover 25% more overdue
                  payments vs. in-house teams.
                </li>
              </ul>
            </div>
          </div>

          <div className="callCenter-panel">
            <h3 className="call-useCases-title">
              Omnichannel Support: Seamless Conversations Across Every
              Touchpoint
            </h3>
            <h4 className="call-useCases-subtitle">How It Works:</h4>
            <ul className="call-useCases-list">
              <li>
                <strong>Unified Dashboard:</strong> Agents manage email, chat,
                social media, and calls from one screen.
              </li>
              <li>
                <strong>Context Preservation:</strong> A customer switching from
                chat to phone won’t repeat their issue.
              </li>
              <li>
                <strong>Automated Tier-1 Support:</strong> Bots resolve ~40% of
                routine queries (e.g., "Track my order"), freeing agents for
                complex cases.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="call-industries-wrapper">
        <h2 className="call-industries-main-heading">
          Industries We Transform
        </h2>
        <div className="call-industries-grid-container">
          {industries.map((industry, index) => (
            <div className="call-industries-card" key={index}>
              <div className="call-industries-icon-wrapper">
                <IndustryIcon />
              </div>
              <div className="call-industries-text-content">
                <h3 className="call-industries-title">{industry.title}</h3>
                <p className="call-industries-description">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="call-expertise-wrapper">
        {/* --- Our Expertise Section --- */}
        <section className="call-expertise-section">
          <h2 className="call-expertise-title">Our Expertise</h2>
          <div className="call-expertise-content-grid">
            <div className="call-expertise-card">
              <h3 className="call-expertise-sub-title">Tiered Support Model</h3>
              <ul className="call-expertise-list">
                <li>
                  <strong>Tier 1:</strong> Password resets, FAQs (solves 60% of
                  issues in &lt;5 mins).
                </li>
                <li>
                  <strong>Tier 2:</strong> Software troubleshooting (e.g.,
                  "Excel macros not working").
                </li>
                <li>
                  <strong>Tier 3:</strong> Escalations to your in-house IT team
                  with full audit logs.
                </li>
              </ul>
            </div>
            <div className="call-expertise-card">
              <h3 className="call-expertise-sub-title">Proactive Monitoring</h3>
              <p>
                Detect and resolve server outages/API errors before customers
                notice.
              </p>
            </div>
            <div className="call-expertise-card">
              <h3 className="call-expertise-sub-title">Metrics That Matter</h3>
              <ul className="call-expertise-list">
                <li>
                  📉 <strong>MTTR (Mean Time to Repair):</strong> Slashed from 2
                  hours to 22 mins for a fintech client.
                </li>
                <li>
                  📈 <strong>First-Contact Resolution:</strong> 88% of issues
                  fixed without transfers.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Back-Office & BPO Support Section --- */}
        <section className="call-expertise-section">
          <h2 className="call-expertise-main-title">
          &#183; Back-Office & BPO Support: The Hidden Engine of Customer
            Satisfaction
          </h2>
          <div className="call-expertise-content-grid">
            <div className="call-expertise-card">
              <h3 className="call-expertise-sub-title">
                Behind-the-Scenes Work We Handle
              </h3>
              <ul className="call-expertise-list">
                <li>
                  <strong>Order Processing:</strong> Update 500+ e-commerce
                  orders/hour with 99.99% accuracy.
                </li>
                <li>
                  <strong>Data Entry:</strong> Migrate 10,000+ CRM records/week
                  with zero duplicates.
                </li>
                <li>
                  <strong>Ticket Triage:</strong> Classify and prioritize
                  support emails (e.g., "Urgent" vs. "General Inquiry").
                </li>
              </ul>
            </div>
            <div className="call-expertise-card">
              <h3 className="call-expertise-sub-title">Why It Matters</h3>
              <ul className="call-expertise-list arrow-list">
                <li>
                  Faster Frontline Response: Clean data lets agents resolve
                  issues 50% quicker.
                </li>
                <li>
                  Scalability: Handle Black Friday-level volumes without hiring
                  temp staff.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- Quality Assurance Section --- */}
        <section className="call-expertise-section">
          <h2 className="call-expertise-main-title">
            &#183; Quality Assurance: Science-Backed Excellence
          </h2>
          <div className="call-expertise-content-grid">
            <div className="call-expertise-card">
              <h3 className="call-expertise-sub-title">
                Our 3-Pillar Approach
              </h3>
              <ul className="call-expertise-list">
                <li>
                  <strong>AI Speech Analytics:</strong> Scan 100% of calls for
                  keywords like "frustrated" or "cancel" to flag at-risk
                  customers.
                </li>
                <li>
                  <strong>Live Call Monitoring:</strong> Supervisors silently
                  join 20% of interactions to coach agents in real time.
                </li>
                <li>
                  <strong>Weekly Calibration:</strong> Align scoring with your
                  KPIs (e.g., "Empathy matters more than speed for luxury
                  brands").
                </li>
              </ul>
            </div>
            <div className="call-expertise-card result-card">
              <h3 className="call-expertise-sub-title">Result:</h3>
              <p className="result-text">
                🎯 Consistent 90%+ QA Scores across all agents.
              </p>
            </div>
          </div>
        </section>

        {/* --- Flexible Engagement Models Section --- */}
        <section className="call-expertise-section">
          <h2 className="call-expertise-main-title">
            &#183; Flexible Engagement Models
          </h2>
          <div className="call-expertise-table-container">
            <table className="call-expertise-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Best For</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dedicated Team</td>
                  <td>High-volume, complex needs</td>
                  <td>10 agents trained only on your healthcare app</td>
                </tr>
                <tr>
                  <td>Shared Agents</td>
                  <td>SMBs with &lt;500 tickets/month</td>
                  <td>2 agents handling 3 retail brands</td>
                </tr>
                <tr>
                  <td>Pay-Per-Use</td>
                  <td>Seasonal spikes</td>
                  <td>50 extra agents for holiday sales</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CallCenter;
