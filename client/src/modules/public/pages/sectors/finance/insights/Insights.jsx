import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiFilter } from "react-icons/fi";
import { useState } from "react";
import HeroSection from "../../../../components/HeroSection";
import CaseStudyCard from "../../logistics/components/CaseStudyCard";

import blog1 from "../../../../../../assets/blog image.png";
import press1 from "../../../../../../assets/Press image.png";
import ann1 from "../../../../../../assets/announcement image.png";
import blog2 from "../../../../../../assets/blog image (1).png";
import press2 from "../../../../../../assets/Press image (1).png";
import ann2 from "../../../../../../assets/announcement image (1).png";
import gov from "../../../../../../assets/Governance image.png";

const insights = [
  {
    id: "cash-flow-growth",
    title: "5 Ways to Improve Cash Flow for Growth",
    description: "Proven strategies to strengthen your cash flow and maintain financial stability.",
    image: blog1,
    category: "Financial Strategy",
    metrics: { roi: "25%", timeframe: "6 months", success: "92%" },
    to: "/sectors/finance/insights/cash-flow-growth",
  },
  {
    id: "managing-financial-risk",
    title: "Managing Financial Risk in Uncertain Times",
    description: "Learn how businesses can identify, assess and manage financial risks effectively.",
    image: press1,
    category: "Risk Management",
    metrics: { savings: "35%", protection: "100%", efficiency: "48%" },
    to: "/sectors/finance/insights/managing-financial-risk",
  },
  {
    id: "investment-trends-2026",
    title: "Investment Trends to Watch in 2026",
    description: "Explore key investment trends and opportunities shaping the financial landscape.",
    image: ann1,
    category: "Market Insights",
    metrics: { growth: "18%", opportunities: "50+", adoption: "85%" },
    to: "/sectors/finance/insights/investment-trends-2026",
  },
  {
    id: "mergers-acquisitions",
    title: "Mergers & Acquisitions Strategy",
    description: "A comprehensive guide to navigating complex M&A transactions successfully.",
    image: blog2,
    category: "Corporate Strategy",
    metrics: { deals: "200+", success: "94%", value: "$10B+" },
    to: "/sectors/finance/insights/mergers-acquisitions",
  },
  {
    id: "digital-transformation-finance",
    title: "Digital Transformation in Finance",
    description: "How automation and AI are reshaping financial operations and decision-making.",
    image: press2,
    category: "Technology & Innovation",
    metrics: { efficiency: "60%", cost: "45%", adoption: "78%" },
    to: "/sectors/finance/insights/digital-transformation-finance",
  },
  {
    id: "esg-reporting",
    title: "ESG Reporting and Compliance",
    description: "Understanding the importance of ESG metrics and regulatory requirements.",
    image: ann2,
    category: "Compliance & ESG",
    metrics: { companies: "85%", reporting: "100%", impact: "90%" },
    to: "/sectors/finance/insights/esg-reporting",
  },
];

const categories = ["All", "Financial Strategy", "Risk Management", "Market Insights", "Corporate Strategy", "Technology & Innovation", "Compliance & ESG"];

const Insights = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredInsights = selectedCategory === "All"
    ? insights
    : insights.filter(insight => insight.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3 }
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
        title="Financial Insights"
        description="Expert perspectives and market trends to inform your financial decisions."
        image={gov}
      />

      {/* Back Navigation */}
      <motion.div
        variants={itemVariants}
        className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-8"
      >
        <button
          onClick={() => navigate('/sectors/finance')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
        >
          <FiArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Finance Overview
        </button>
      </motion.div>

      {/* Insights Grid */}
      <motion.section
        variants={itemVariants}
        className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Insights & Research</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our comprehensive collection of financial insights and market research to inform your business strategy.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiFilter className="inline h-4 w-4 mr-2" />
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredInsights.map((insight) => (
            <motion.div
              key={insight.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              layout
              className="group relative"
              onHoverStart={() => setHoveredCard(insight.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <CaseStudyCard {...insight} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
            <div className="text-gray-600">Research Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
            <div className="text-gray-600">Expert Contributors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">99%</div>
            <div className="text-gray-600">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-500 mb-2">Weekly</div>
            <div className="text-gray-600">Updated Content</div>
          </div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={itemVariants}
        className="bg-gray-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Finances?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our financial expertise can drive growth and create value for your organization.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Schedule a Consultation
          </button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Insights;
