import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiFilter, FiTrendingUp, FiClock, FiDollarSign, FiTarget } from "react-icons/fi";
import { useState } from "react";
import HeroSection from "../../../../components/HeroSection";
import CaseStudyCard from "../components/CaseStudyCard";

import group95 from "../../../../../../assets/Group_95.png";
import homeAbout from "../../../../../../assets/home about image.png";
import whyChooseUs from "../../../../../../assets/why choose us.png";
import corporateLeader from "../../../../../../assets/corporateLeader.png";
import whoWeAre from "../../../../../../assets/who-we-are.png";
import journey from "../../../../../../assets/journey.png";

const caseStudies = [
  {
    id: "optimizing-freight-manufacturing-leader",
    title: "Optimizing Freight Manufacturing Leader",
    description: "We streamlined international freight operations, reducing transit time by 25% and costs by 18%.",
    image: group95,
    category: "Freight & Transportation",
    metrics: { time: "25%", cost: "18%", efficiency: "35%" },
    to: "/sectors/logistics/case-studies/optimizing-freight-manufacturing-leader",
  },
  {
    id: "smart-warehousing-retail-brand",
    title: "Smart Warehousing for Retail Brand",
    description: "Implemented automation and real-time inventory tracking improving order accuracy by 99.5%.",
    image: homeAbout,
    category: "Warehousing & Storage",
    metrics: { accuracy: "99.5%", speed: "3x", turnover: "40%" },
    to: "/sectors/logistics/case-studies/smart-warehousing-retail-brand",
  },
  {
    id: "end-to-end-ecommerce-growth",
    title: "End-to-End for E-commerce Growth",
    description: "Our distribution network helped the client scale deliveries by 40% across multiple regions.",
    image: whyChooseUs,
    category: "Distribution & Delivery",
    metrics: { volume: "40%", time: "50%", satisfaction: "92%" },
    to: "/sectors/logistics/case-studies/end-to-end-ecommerce-growth",
  },
  {
    id: "supply-chain-optimization-tech",
    title: "Supply Chain Optimization for Tech Giant",
    description: "Revolutionized supply chain visibility and reduced lead times by 45% for a Fortune 500 tech company.",
    image: corporateLeader,
    category: "Supply Chain Management",
    metrics: { visibility: "100%", leadTime: "45%", cost: "28%" },
    to: "/sectors/logistics/case-studies/supply-chain-optimization-tech",
  },
  {
    id: "cold-chain-pharmaceuticals",
    title: "Cold Chain Solutions for Pharmaceuticals",
    description: "Temperature-controlled logistics ensuring 100% product integrity for life-saving medications.",
    image: whoWeAre,
    category: "Specialized Logistics",
    metrics: { integrity: "100%", compliance: "99.9%", efficiency: "50%" },
    to: "/sectors/logistics/case-studies/cold-chain-pharmaceuticals",
  },
  {
    id: "last-mile-delivery-retail",
    title: "Last-Mile Delivery Innovation for Retail",
    description: "AI-powered route optimization and same-day delivery network serving 1M+ customers weekly.",
    image: journey,
    category: "Last-Mile Delivery",
    metrics: { customers: "1M+", speed: "60%", satisfaction: "96%" },
    to: "/sectors/logistics/case-studies/last-mile-delivery-retail",
  },
];

const categories = ["All", "Freight & Transportation", "Warehousing & Storage", "Distribution & Delivery", "Supply Chain Management", "Specialized Logistics", "Last-Mile Delivery"];

const CaseStudies = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const filteredCaseStudies = selectedCategory === "All"
    ? caseStudies
    : caseStudies.filter(study => study.category === selectedCategory);

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
        title="Case Studies"
        description="Real solutions, real results. Discover how we've helped businesses transform their logistics operations."
        image={group95}
      />

      {/* Back Navigation */}
      <motion.div
        variants={itemVariants}
        className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-8"
      >
        <button
          onClick={() => navigate('/sectors/logistics')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
        >
          <FiArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Logistics Overview
        </button>
      </motion.div>

      {/* Case Studies Grid */}
      <motion.section
        variants={itemVariants}
        className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our comprehensive case studies to see how we've delivered measurable results for businesses across various industries.
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
          {filteredCaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              layout
              className="group relative"
              onHoverStart={() => setHoveredCard(caseStudy.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-2xl">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
                      {caseStudy.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {caseStudy.description}
                  </p>

                  {/* Metrics Preview */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(caseStudy.metrics).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-orange-500">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => navigate(caseStudy.to)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Read Full Case Study
                    <motion.span
                      animate={{ x: hoveredCard === caseStudy.id ? 4 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === caseStudy.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-500 mb-2">35%</div>
            <div className="text-gray-600">Average Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-500 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={itemVariants}
        className="bg-gray-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our logistics expertise can transform your business operations.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Start Your Project
          </button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CaseStudies;