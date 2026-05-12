import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiTrendingUp, FiClock, FiDollarSign, FiTarget, FiUsers, FiCheckCircle } from "react-icons/fi";
import HeroSection from "../../../../components/HeroSection";

import blog1 from "../../../../../../assets/blog image.png";
import press1 from "../../../../../../assets/Press image.png";
import ann1 from "../../../../../../assets/announcement image.png";
import blog2 from "../../../../../../assets/blog image (1).png";
import press2 from "../../../../../../assets/Press image (1).png";
import ann2 from "../../../../../../assets/announcement image (1).png";

// Insight data with detailed information
const insightData = {
  "cash-flow-growth": {
    id: "cash-flow-growth",
    title: "5 Ways to Improve Cash Flow for Growth",
    subtitle: "Proven strategies to strengthen cash flow and maintain financial stability",
    heroImage: blog1,
    overview: "Strong cash flow is the lifeblood of any business. Many growing companies struggle with cash flow management despite profitability, leading to missed opportunities and operational challenges. Learn how successful businesses optimize their cash flow to fuel growth.",
    challenge: "Many businesses face cash flow challenges even with strong revenue, often due to poor receivables management, excessive inventory, or unpredictable payment cycles. These issues can limit growth opportunities and create financial stress.",
    solution: "We provide comprehensive cash flow optimization strategies including receivables acceleration, inventory management optimization, and working capital financing solutions tailored to your business model.",
    results: [
      { metric: "ROI Improvement", value: "25%", icon: FiTrendingUp },
      { metric: "Cash Conversion", value: "6 months", icon: FiClock },
      { metric: "Working Capital", value: "35% freed", icon: FiDollarSign },
      { metric: "Success Rate", value: "92%", icon: FiCheckCircle }
    ],
    keyFeatures: [
      "Receivables management optimization",
      "Inventory optimization strategies",
      "Working capital financing",
      "Cash flow forecasting",
      "Payment cycle optimization"
    ],
    testimonial: {
      quote: "By implementing the recommended cash flow strategies, we freed up significant working capital and accelerated our growth timeline by 6 months.",
      author: "David Thompson",
      position: "CFO, GrowthTech Inc."
    },
    images: [
      blog1,
      press1,
      ann1
    ]
  },
  "managing-financial-risk": {
    id: "managing-financial-risk",
    title: "Managing Financial Risk in Uncertain Times",
    subtitle: "Identify, assess and manage financial risks effectively",
    heroImage: press1,
    overview: "Economic uncertainty creates new financial risks for businesses. Understanding and managing these risks is critical for long-term success. Our comprehensive approach helps organizations identify vulnerabilities and implement protective strategies.",
    challenge: "In volatile markets, businesses face multiple financial risks including market fluctuations, interest rate changes, currency exposure, and credit risk. Without proper risk management frameworks, these challenges can significantly impact financial performance.",
    solution: "We develop comprehensive risk management frameworks including scenario analysis, hedging strategies, and risk monitoring systems to protect your business and ensure resilience.",
    results: [
      { metric: "Risk Identification", value: "100%", icon: FiTarget },
      { metric: "Cost Savings", value: "35%", icon: FiDollarSign },
      { metric: "Protection Level", value: "100%", icon: FiCheckCircle },
      { metric: "Efficiency Gain", value: "48%", icon: FiTrendingUp }
    ],
    keyFeatures: [
      "Comprehensive risk assessment",
      "Scenario and stress testing",
      "Hedging strategy development",
      "Insurance portfolio optimization",
      "Real-time risk monitoring"
    ],
    testimonial: {
      quote: "Their risk management approach has given us confidence to navigate uncertain markets while protecting our financial stability.",
      author: "Jennifer Lee",
      position: "Chief Risk Officer, Global Finance Corp"
    },
    images: [
      press1,
      ann1,
      blog1
    ]
  },
  "investment-trends-2026": {
    id: "investment-trends-2026",
    title: "Investment Trends to Watch in 2026",
    subtitle: "Key opportunities shaping the financial landscape",
    heroImage: ann1,
    overview: "2026 presents unprecedented opportunities for strategic investors. Emerging technologies, market consolidation, and evolving consumer preferences are creating new investment avenues. Understanding these trends is essential for maximizing returns.",
    challenge: "Investors must navigate complex market dynamics while identifying emerging opportunities. Traditional investment strategies may not capture the full spectrum of growth opportunities in today's rapidly evolving landscape.",
    solution: "We provide in-depth market research and investment strategy development to help identify and capitalize on emerging trends and opportunities in key sectors.",
    results: [
      { metric: "Market Growth", value: "18%", icon: FiTrendingUp },
      { metric: "Opportunities", value: "50+", icon: FiTarget },
      { metric: "Adoption Rate", value: "85%", icon: FiUsers },
      { metric: "ROI Potential", value: "35%+", icon: FiDollarSign }
    ],
    keyFeatures: [
      "Market trend analysis",
      "Sector opportunity identification",
      "Investment portfolio optimization",
      "Emerging tech evaluation",
      "ESG-compliant opportunities"
    ],
    testimonial: {
      quote: "The investment insights provided helped us identify high-growth opportunities we would have otherwise missed, delivering exceptional returns.",
      author: "Robert Williams",
      position: "Investment Director, Venture Capital Partners"
    },
    images: [
      ann1,
      blog1,
      press1
    ]
  },
  "mergers-acquisitions": {
    id: "mergers-acquisitions",
    title: "Mergers & Acquisitions Strategy",
    subtitle: "Navigating complex M&A transactions successfully",
    heroImage: blog2,
    overview: "Successful M&A transactions require careful planning, due diligence, and strategic execution. We guide organizations through every stage of the M&A process, from target identification to post-merger integration.",
    challenge: "M&A failures often result from inadequate due diligence, cultural misalignment, and poor integration planning. Organizations need expert guidance to identify synergies and realize transaction value.",
    solution: "We provide end-to-end M&A advisory including target identification, due diligence, valuation, deal structuring, and post-merger integration support.",
    results: [
      { metric: "Successful Deals", value: "200+", icon: FiCheckCircle },
      { metric: "Success Rate", value: "94%", icon: FiTrendingUp },
      { metric: "Total Value", value: "$10B+", icon: FiDollarSign },
      { metric: "Synergy Realization", value: "90%+", icon: FiTarget }
    ],
    keyFeatures: [
      "Target identification and screening",
      "Comprehensive due diligence",
      "Valuation and deal structuring",
      "Integration planning",
      "Post-merger performance monitoring"
    ],
    testimonial: {
      quote: "Their M&A expertise was invaluable in structuring a complex acquisition and ensuring smooth integration. We exceeded our synergy targets.",
      author: "Michael Chen",
      position: "CEO, Strategic Ventures"
    },
    images: [
      blog2,
      press2,
      ann2
    ]
  },
  "digital-transformation-finance": {
    id: "digital-transformation-finance",
    title: "Digital Transformation in Finance",
    subtitle: "Automation and AI reshaping financial operations",
    heroImage: press2,
    overview: "Digital transformation is revolutionizing financial operations. Automation, AI, and advanced analytics are enabling faster, more accurate decision-making while reducing costs. Organizations must adapt to remain competitive.",
    challenge: "Legacy financial systems, change resistance, and technology complexity challenge organizations attempting digital transformation. Many struggle to identify the right technologies and implementation approach.",
    solution: "We design and implement digital transformation roadmaps tailored to your organization, including technology selection, change management, and training.",
    results: [
      { metric: "Efficiency Gain", value: "60%", icon: FiTrendingUp },
      { metric: "Cost Reduction", value: "45%", icon: FiDollarSign },
      { metric: "Accuracy Improvement", value: "99%", icon: FiCheckCircle },
      { metric: "Technology Adoption", value: "78%", icon: FiUsers }
    ],
    keyFeatures: [
      "Digital strategy development",
      "Technology assessment",
      "RPA implementation",
      "AI-powered analytics",
      "Change management"
    ],
    testimonial: {
      quote: "The digital transformation program exceeded our expectations in efficiency gains and cost savings while improving data accuracy.",
      author: "Sarah Martinez",
      position: "Finance Director, Digital-First Corp"
    },
    images: [
      press2,
      ann2,
      blog2
    ]
  },
  "esg-reporting": {
    id: "esg-reporting",
    title: "ESG Reporting and Compliance",
    subtitle: "Understanding ESG metrics and regulatory requirements",
    heroImage: ann2,
    overview: "ESG (Environmental, Social, Governance) reporting is no longer optional. Investors and regulators increasingly require comprehensive ESG disclosure. Understanding requirements and establishing robust reporting frameworks is essential.",
    challenge: "ESG regulations vary by jurisdiction, and reporting standards continue to evolve. Organizations must establish systems to collect, validate, and report ESG data accurately and efficiently.",
    solution: "We help organizations develop ESG strategies, establish reporting frameworks, and ensure compliance with evolving regulations.",
    results: [
      { metric: "Companies Reporting", value: "85%", icon: FiTrendingUp },
      { metric: "Compliance Rate", value: "100%", icon: FiCheckCircle },
      { metric: "Stakeholder Impact", value: "90%", icon: FiTarget },
      { metric: "Investor Confidence", value: "92%", icon: FiUsers }
    ],
    keyFeatures: [
      "ESG strategy development",
      "Reporting framework design",
      "Data collection and validation",
      "Regulatory compliance",
      "Stakeholder communication"
    ],
    testimonial: {
      quote: "The comprehensive ESG framework helped us meet all regulatory requirements and strengthen relationships with our stakeholders.",
      author: "Lisa Anderson",
      position: "Sustainability Officer, Corporate Leaders Inc."
    },
    images: [
      ann2,
      blog2,
      press2
    ]
  }
};

const InsightDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const insight = insightData[id];

  if (!insight) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Insight Not Found</h1>
          <button
            onClick={() => navigate('/sectors/finance')}
            className="text-blue-600 hover:text-blue-800"
          >
            Return to Finance Overview
          </button>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white"
    >
      {/* Hero Section */}
      <HeroSection
        title={insight.title}
        description={insight.subtitle}
        image={insight.heroImage}
      />

      {/* Back Navigation */}
      <motion.div
        variants={itemVariants}
        className=" mx-auto px-8 sm:px-12 lg:px-20 py-8"
      >
        <button
          onClick={() => navigate('/sectors/finance/insights')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
        >
          <FiArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Finance Insights
        </button>
      </motion.div>

      {/* Overview Section */}
      <motion.section
        variants={itemVariants}
        className=" mx-auto px-8 sm:px-12 lg:px-20 py-16"
      >
        <div className="">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {insight.overview}
          </p>
        </div>
      </motion.section>

      {/* Challenge & Solution */}
      <section className="bg-gray-50 py-16">
        <div className=" mx-auto px-8 sm:px-12 lg:px-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-orange-600 font-semibold uppercase tracking-wider text-sm">
                <FiTarget className="h-4 w-4" />
                The Challenge
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Understanding the Problem</h3>
              <p className="text-gray-600 leading-relaxed">
                {insight.challenge}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold uppercase tracking-wider text-sm">
                <FiCheckCircle className="h-4 w-4" />
                Our Approach
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Strategic Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                {insight.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <motion.section
        variants={itemVariants}
        className=" mx-auto px-8 sm:px-12 lg:px-20 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Results</h2>
          <p className="text-lg text-gray-600  mx-auto">
            Measurable outcomes achieved through our strategic approach
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {insight.results.map((result) => {
            const Icon = result.icon;
            return (
              <motion.div
                key={result.metric}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-orange-50 mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{result.value}</div>
                <div className="text-sm font-medium text-gray-600">{result.metric}</div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Key Features */}
      <section className="bg-gray-50 py-16">
        <div className=" mx-auto px-8 sm:px-12 lg:px-20">
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600  mx-auto">
              Comprehensive solutions tailored to your financial goals
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {insight.keyFeatures.map((feature) => (
              <motion.div
                key={feature}
                variants={itemVariants}
                className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <FiCheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <motion.section
        variants={itemVariants}
        className=" mx-auto px-8 sm:px-12 lg:px-20 py-16"
      >
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <div className=" mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-8 leading-relaxed">
              "{insight.testimonial.quote}"
            </blockquote>
            <div className="flex flex-col items-center gap-2">
              <div className="font-semibold text-gray-900">{insight.testimonial.author}</div>
              <div className="text-gray-600">{insight.testimonial.position}</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gallery */}
      <motion.section
        variants={itemVariants}
        className=" mx-auto px-8 sm:px-12 lg:px-20 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resource Gallery</h2>
          <p className="text-lg text-gray-600">
            Visual insights and supporting resources
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insight.images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="aspect-video rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Resource ${index + 1}`}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={itemVariants}
        className="bg-gray-900 text-white py-16"
      >
        <div className=" mx-auto px-8 sm:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Finances?</h2>
          <p className="text-xl text-gray-300 mb-8  mx-auto">
            Discover how our financial expertise can help your organization achieve its goals and maximize value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Schedule a Consultation
            </button>
            <button
              onClick={() => navigate('/sectors/finance/insights')}
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Explore More Insights
            </button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default InsightDetail;
