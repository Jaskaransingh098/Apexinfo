import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import {
  HiOutlineDocumentText,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  //   HiOutlineEmojiHappy,
} from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";
import "./Blog.css";

const articles = [
   {
    title: "How to Source Safely from India Without Visiting",
    author: "Wise (via Wise Blog)",
    date: "2025/06/23",
    views: "—",
    excerpt: "Learn how to source products from India remotely and securely using verified practices and supplier insights.",
    image: "https://wise.com/imaginary-v2/451e3d86fd4e53c3daf470b37e097412.jpg?width=1200",
    link: "https://wise.com/us/blog/sourcing-from-india" // :contentReference[oaicite:1]{index=1}
  },
  {
    title: "The True Cost Benefits of Outsourcing to India in 2025",
    author: "ScaleUpAlly",
    date: "2025/03/01",
    views: "—",
    excerpt: "Outsourcing to India can lead to cost reduction, access to global talent and long-term operational advantages.",
    image: "https://scaleupally.io/wp-content/uploads/2024/02/A-Complete-Cost-Analysis-Of-Outsourcing-In-2024-India-VS-USA.png.webp",
    link: "https://scaleupally.io/blog/cost-benefit-analysis-of-outsourcing-usa-vs-india" // :contentReference[oaicite:2]{index=2}
  },
  {
    title: "Digital Marketing in India: What Global Brands Need to Know",
    author: "BatterseaWebExpert",
    date: "2024/11/12",
    views: "—",
    excerpt: "This guide explores 2025 trends, stats, and strategies for global brands entering India’s booming digital market.",
    image: "https://www.batterseawebexpert.com/wp-content/uploads/2024/11/Digital-India-logo.webp",
    link: "https://www.batterseawebexpert.com/blog/digital-marketing-in-india/" // :contentReference[oaicite:3]{index=3}
  },
  {
    title: "India’s Rising Tech Cities to Watch in 2025",
    author: "Vogue Business",
    date: "2023/05/11",
    views: "—",
    excerpt: "Emerging hubs like Bengaluru, Hyderabad and Kolkata are shaping India’s startup and tech investment landscape.",
    image: "https://media.voguebusiness.com/photos/647de8f3f38f75f60015732a/2:3/w_1920,c_limit/INDIAN-LUXURY-HOTSPOTS-voguebus-story.jpg",
    link: "https://www.voguebusiness.com/consumers/expanding-in-india-look-beyond-delhi-and-mumbai" // :contentReference[oaicite:4]{index=4}
  },
  {
    title: "Outsourcing Risks You Didn’t Expect in 2025",
    author: "Uplers",
    date: "2023/11/27",
    views: "—",
    excerpt: "India will be the only country with a surplus of 1.3 M human tech talents…", // quoted summary
    image: "https://www.uplers.com/wp-content/uploads/2023/11/The-India-Advantage-Why-Global-Agencies-are-Embracing-Remote-Hiring-from-India-new-01-1-891x505.jpg",
    link: "https://www.uplers.com/blog/outsourcing-to-india/" // :contentReference[oaicite:5]{index=5}
  },
  {
    title: "Top 10 Indian SaaS Products Making Global Impact",
    author: "ScaleUpAlly",
    date: "2025/03/01",
    views: "—",
    excerpt: "A deep dive into Indian-born SaaS tools that are gaining global traction across industries.",
    image: "https://scaleupally.io/wp-content/uploads/2024/02/A-Complete-Cost-Analysis-Of-Outsourcing-In-2024-India-VS-USA.png.webp",
    link: "https://scaleupally.io/blog/cost-benefit-analysis-of-outsourcing-usa-vs-india" // placeholder; replace with actual SaaS source
  },
  {
    title: "Digital Marketing Examples in India",
    author: "Sun Media Marketing",
    date: "2023/03",
    views: "—",
    excerpt: "Includes case studies from Zomato, Vogue India, KFC India revealing how brands connect with Indian consumers.",
    image: "https://www.sunmediamarketing.com/wp-content/uploads/2024/02/Major-Digital-Marketing-Examples-in-India_-Build-Your-Online-Presence.jpg",
    link: "https://www.sunmediamarketing.com/digital-marketing/digital-marketing-examples-in-india/" // :contentReference[oaicite:6]{index=6}
  },
  {
    title: "Importing & Exporting to India in 2025: Guide",
    author: "Freightos",
    date: "2024/12/04",
    views: "—",
    excerpt: "Demystifies 2025 importing and exporting trends, customs norms, and global freight updates for India trade.",
    image: "https://www.freightos.com/wp-content/uploads/2023/03/illustration-new-brand-colors-95-1024x904.png",
    link: "https://www.freightos.com/freight-resources/importing-exporting-from-india/" // :contentReference[oaicite:7]{index=7}
  },
{
    title: "India’s FinTech Scene in 2025: Key Players and Disruptors",
    author: "HyperVerge",
    date: "2025/04/15",
    views: "—",
    excerpt:
      "The future of fintech is focused on innovation, inclusion, and sustainability—AI, blockchain, and UPI are driving growth.",
    image: "https://cdn.hyperverge.co/wp-content/uploads/2025/01/The-Future-of-Fintech-in-India_-Trends-and-Insights-for-2025-768x443.webp",
    link: "https://hyperverge.co/blog/fintech-trends/" // :contentReference[oaicite:1]{index=1}
  },
  {
    title: "Indian Cybersecurity Startups Poised for Strong Growth",
    author: "Moneycontrol",
    date: "2024/07/01",
    views: "—",
    excerpt:
      "India's cybersecurity market has posted a CAGR of 25% since 2019, now over $6 billion and growing fast.",
    image: "https://i.filecdn.in/755esias/CybersecurityinIndia-1679638736127.jpg",
    link: "https://www.moneycontrol.com/news/business/indian-cybersecurity-startups-poised-for-strong-growth-amid-rising-global-spend-accels-swaroop-12778240.html" // :contentReference[oaicite:2]{index=2}
  },
  {
    title: "More Must Be Done to Champion Women‑Led Tech Companies in India",
    author: "Prosus Insights",
    date: "2025/03/01",
    views: "—",
    excerpt:
      "India launched Tech FoundHER Challenge to support women‑led tech startups, closing the gender funding gap.",
    image: "https://borgenproject.org/wp-content/uploads/Women-Led-Tech-Startups-in-Africa-845x640.jpg",
    link: "https://www.prosus.com/news-insights/group-updates/2025/more-must-be-done-to-champion-women-led-tech-companies-in-india" // :contentReference[oaicite:3]{index=3}
  },
  {
    title: "Remote Work Culture in India: Trends & Legal Impacts for 2025",
    author: "Forbes Advisor India",
    date: "2024/06/01",
    views: "—",
    excerpt:
      "By 2025, 60–90 million Indians will work remotely—shaping workforce models, laws, and organizational habits.",
    image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2024/07/shutterstock_472132948-scaled.jpg",
    link: "https://www.forbes.com/advisor/in/business/remote-work-statistics/" // :contentReference[oaicite:4]{index=4}
  },
  {
    title: "Top Government Schemes for Indian Startups in 2025",
    author: "Razorpay Rize",
    date: "2025/05/01",
    views: "—",
    excerpt:
      "An overview of India's top startup schemes: Startup India, SISFS, CGSS, PMMY, AIM—vital support for entrepreneurs.",
    image: "https://cdn.prod.website-files.com/652f7edfbfa272ea310aba7c/66264bef76adc17dd8851e03_Partner%20Deed%20Certificate-p-2000.webp",
    link: "https://razorpay.com/rize/blog/top-8-government-schemes-for-startups-in-india" // :contentReference[oaicite:5]{index=5}
  },
  {
    title: "Overview of the Indian Hardware Startup Landscape",
    author: "Hero Vired",
    date: "2024/08/15",
    views: "—",
    excerpt:
      "Indian hardware startups are growing in health tech, retail, autonomous driving—but face supply chain and R&D challenges.",
    image: "https://herovired.com/_next/image/?url=https%3A%2F%2Fstaging.herovired.com%2Fwp-content%2Fuploads%2F2024%2F07%2FAR-VR.png&w=640&q=75",
    link: "https://herovired.com/learning-hub/blogs/overview-of-the-indian-hardware-startup-landscape/" // :contentReference[oaicite:6]{index=6}
  },
  {
    title: "The Rise of Co‑Working Spaces in India’s Hybrid Shift",
    author: "CBRE India",
    date: "2024/04/01",
    views: "—",
    excerpt:
      "Co‑working leasing grew 7% in Q1 2024—reflecting hybrid work adoption and changing workspace needs.",
    image: "https://mediaassets.cbre.com/cdn/-/media/project/cbre/shared-site/1-unsorted-images/the%20rise%20of%20coworking%20spaces.png?iar=0&rev=02082daf088143b2a4dbda49048f7341&key=articlehero-wideimage&device=desktop",
    link: "https://www.cbre.co.in/insights/articles/the-rise-of-co-working-spaces-meeting-the-needs-of-indias-growing-startup-ecosystem" // :contentReference[oaicite:7]{index=7}
  },
  {
    title: "India Is Becoming a Regional Data‑Centre Hub",
    author: "Financial Times",
    date: "2025/06/01",
    views: "—",
    excerpt:
      "India emerging as a regional data‑centre hub: Airtel/Nxtra $600 M investment, green AI‑ready facilities, capacity doubling by 2027.",
    image: "https://www.parkerip.com/wp-content/uploads/2022/07/Is-India-Heading-to-Become-the-Next-Datacenter-Hub.jpg",
    link: "https://www.ft.com/content/7f4aff43-b181-4965-96bc-420d502673ad" // :contentReference[oaicite:8]{index=8}
  },
  {
    title: "Expanding in India? Look Beyond Delhi and Mumbai",
    author: "Vogue Business",
    date: "2023/06/06",
    views: "—",
    excerpt:
      "Luxury brands should look to southern and eastern cities beyond Delhi/Mumbai to tap India’s fast‑growing markets.",
    image: "https://media.voguebusiness.com/photos/647de8f3f38f75f60015732a/2:3/w_1920,c_limit/INDIAN-LUXURY-HOTSPOTS-voguebus-story.jpg",
    link: "https://www.voguebusiness.com/consumers/expanding-in-india-look-beyond-delhi-and-mumbai" // :contentReference[oaicite:9]{index=9}
  },
  {
    title: "Indian FinTech Deal Activity Rose 64% QoQ in Q1 2025",
    author: "Fintech Global",
    date: "2025/05/02",
    views: "—",
    excerpt:
      "Indian fintech deal activity surged 64% QoQ in Q1 2025, driven by smaller deals and increased investor confidence.",
    image: "https://fintech.global/wp-content/uploads/2025/05/2025-Q1-India-FinTech-Funding-010525-v1-696x696.png",
    link: "https://fintech.global/2025/05/02/indian-fintech-deal-activity-jumped-64-qoq-as-investors-chased-smaller-deals-in-q1-2025/" // :contentReference[oaicite:10]{index=10}
  },
];

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8;
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = articles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  const featuredArticles = [
    {
      title: "Beyond Imagination: AI, Art and the Ownership Dilemma",
      author: "Forbes Tech Council",
      avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
      excerpt:
        "Explores how generative AI is transforming creative industries and raising questions of ownership...",
      image: "https://source.unsplash.com/featured/?ai,art",
      link: "https://www.forbes.com/councils/forbestechcouncil/2024/05/21/beyond-imagination-ai-art-and-the-ownership-dilemma/", // :contentReference[oaicite:1]{index=1}
    },
    {
      title:
        "From Hospitals to Homes: How Robotics Will Change Your Life in 2025",
      author: "BCC Research",
      avatar: "https://randomuser.me/api/portraits/lego/2.jpg",
      excerpt:
        "How smart home robotics and healthcare bots are revolutionizing everyday living...",
      image: "https://source.unsplash.com/featured/?robotics,home",
      link: "https://blog.bccresearch.com/from-hospitals-to-homes-how-robotics-will-change-your-life-in-2025", // :contentReference[oaicite:2]{index=2}
    },
    {
      title: "Will AI Take Over Creative Jobs?",
      author: "Ted Leonhardt",
      avatar: "https://randomuser.me/api/portraits/lego/3.jpg",
      excerpt:
        "Discusses the growing debate on whether AI will replace designers, writers, illustrators, and filmmakers...",
      image: "https://source.unsplash.com/featured/?ai,creative",
      link: "https://tedleonhardt.medium.com/creatives-ai-will-replace-you-a915fd262d9b", // :contentReference[oaicite:3]{index=3}
    },
  ];

  // Inside your Blog component, before the return:
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };
  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="blog-body">
      <section className="blog-hero-section">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover Nice Articles Here
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          All the articles and contents of the site have been updated today and
          you can find your articles and contents quickly and without any
          problems.
        </motion.p>

        <div className="search-filter">
          <motion.div
            className="hero-stats"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            viewport={{ once: false }}
          >
            <div className="stat">
              <HiOutlineDocumentText className="stat-icon" />
              <h3>
                <CountUp end={320} duration={2} />+
              </h3>
              <p>Articles Published</p>
            </div>
            <div className="stat">
              <HiOutlineChartBar className="stat-icon" />
              <h3>
                <CountUp end={180} duration={2} />K
              </h3>
              <p>Monthly Readers</p>
            </div>
            <div className="stat">
              <HiOutlineUserGroup className="stat-icon" />
              <h3>
                <CountUp end={25} duration={2} />+
              </h3>
              <p>Expert Authors</p>
            </div>
            <div className="stat">
              <FaBookOpen className="stat-icon" />
              <h3>
                <CountUp end={95} duration={2} />%
              </h3>
              <p>Reader Satisfaction</p>
            </div>
          </motion.div>
          <motion.div
            className="tags"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: false }}
          >
            <button>Technology</button>
            <button>Business</button>
            <button>Marketing</button>
            <button>Outsourcing</button>
            <button>India</button>
          </motion.div>
        </div>
      </section>

      <section className="featured-slider">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Articles
        </motion.h2>
        <div className="slider">
          <AnimatePresence mode="wait">
            {featuredArticles.map((article, index) =>
              index === currentSlide ? (
                <motion.div
                  key={index}
                  className={`slide active`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  style={{ backgroundImage: `url(${article.image})` }}
                >
                  <motion.div
                    className="blog-overlay"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <div className="author-badge">
                      <img src={article.avatar} alt={article.author} />
                      <span>{article.author}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>
                      {article.excerpt}{" "}
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </p>
                  </motion.div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          <motion.div
            className="blog-dots"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {featuredArticles.map((_, idx) => (
              <motion.div
                key={idx}
                className={`blog-dot ${
                  idx === currentSlide ? "blog-active" : ""
                }`}
                onClick={() => setCurrentSlide(idx)}
                whileHover={{ scale: 1.2 }}
              >
                {/* {idx + 1} */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        className="article-grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {currentArticles.map((article, index) => (
          <motion.div
            className="card"
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <img src={article.image} alt={article.title} />
            <div className="card-content">
              <h4>{article.title}</h4>
              <p>{article.excerpt}</p>
              <div className="meta">
                <span>{article.date}</span>
                <span>{article.views} viewers</span>
              </div>
              <span className="author">By {article.author}</span>
              <button className="read-more">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="read-more"
                >
                  Read More
                </a>
              </button>
            </div>
          </motion.div>
        ))}
      </motion.section>

      <div className="pagination">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
