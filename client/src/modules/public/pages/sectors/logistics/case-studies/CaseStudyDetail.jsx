import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft, FiTrendingUp, FiClock, FiDollarSign, FiTarget, FiUsers, FiCheckCircle } from "react-icons/fi";
import HeroSection from "../../../../components/HeroSection";

import group95 from "../../../../../../assets/Group_95.png";
import homeAbout from "../../../../../../assets/About.png";
import whyChooseUs from "../../../../../../assets/why choose us.png";
import corporateLeader from "../../../../../../assets/corporateLeader.png";
import whoWeAre from "../../../../../../assets/who-we-are.png";
import journey from "../../../../../../assets/journey.png";
import rectangle256 from "../../../../../../assets/Rectangle256.png";
import governance from "../../../../../../assets/Governance image.png";

// Case study data with detailed information
const caseStudyData = {
  "optimizing-freight-manufacturing-leader": {
    id: "optimizing-freight-manufacturing-leader",
    title: "Optimizing Freight Operations for Manufacturing Leader",
    subtitle: "Streamlining international logistics to reduce costs and improve delivery times",
    heroImage: group95,
    overview: "A leading manufacturing company faced challenges with their international freight operations, resulting in delayed deliveries and increased costs. Our comprehensive logistics optimization strategy transformed their supply chain efficiency.",
    challenge: "The client was experiencing significant delays in international shipments, with transit times averaging 45 days and costs representing 15% of their total operational expenses. Manual tracking systems led to poor visibility and frequent miscommunications.",
    solution: "We implemented an integrated logistics platform combining real-time tracking, automated documentation processing, and optimized routing algorithms. Our team also established dedicated freight forwarding partnerships and introduced predictive analytics for demand forecasting.",
    results: [
      { metric: "Transit Time Reduction", value: "25%", icon: FiClock },
      { metric: "Cost Savings", value: "18%", icon: FiDollarSign },
      { metric: "On-Time Delivery Rate", value: "98%", icon: FiTarget },
      { metric: "Customer Satisfaction", value: "95%", icon: FiUsers }
    ],
    keyFeatures: [
      "Real-time shipment tracking and visibility",
      "Automated customs clearance and documentation",
      "Multi-modal transportation optimization",
      "Predictive analytics for demand forecasting",
      "Dedicated account management team"
    ],
    testimonial: {
      quote: "Logistica's expertise in international freight has been transformative for our business. The cost savings and improved reliability have directly contributed to our market expansion.",
      author: "Sarah Johnson",
      position: "VP of Operations, TechManufacturing Inc."
    },
    images: [
      group95,
      homeAbout,
      whyChooseUs
    ]
  },
  "smart-warehousing-retail-brand": {
    id: "smart-warehousing-retail-brand",
    title: "Smart Warehousing Solution for Retail Brand",
    subtitle: "Implementing automation and real-time inventory tracking for e-commerce excellence",
    heroImage: homeAbout,
    overview: "A fast-growing retail brand needed to scale their warehousing operations to handle increasing order volumes while maintaining exceptional accuracy and speed.",
    challenge: "The retailer's manual inventory management system couldn't keep up with their rapid growth, leading to stock discrepancies, delayed shipments, and customer dissatisfaction. They needed a solution that could handle 10x order volume growth.",
    solution: "We designed and implemented a fully automated warehousing system featuring robotic picking, AI-powered inventory optimization, and real-time tracking. The solution included warehouse management software integration and staff training programs.",
    results: [
      { metric: "Order Accuracy", value: "99.5%", icon: FiCheckCircle },
      { metric: "Processing Speed", value: "3x faster", icon: FiClock },
      { metric: "Inventory Turnover", value: "40% increase", icon: FiTrendingUp },
      { metric: "Operational Costs", value: "22% reduction", icon: FiDollarSign }
    ],
    keyFeatures: [
      "Automated robotic picking systems",
      "Real-time inventory tracking with RFID",
      "AI-powered demand forecasting",
      "Mobile warehouse management app",
      "Automated replenishment systems"
    ],
    testimonial: {
      quote: "The smart warehousing solution has revolutionized our operations. We've achieved unprecedented accuracy and speed, allowing us to focus on growing our business rather than managing inventory.",
      author: "Michael Chen",
      position: "CEO, RetailPlus"
    },
    images: [
      homeAbout,
      group95,
      whyChooseUs
    ]
  },
  "end-to-end-ecommerce-growth": {
    id: "end-to-end-ecommerce-growth",
    title: "End-to-End Distribution Network for E-commerce Growth",
    subtitle: "Scaling delivery operations across multiple regions for rapid business expansion",
    heroImage: whyChooseUs,
    overview: "An e-commerce platform experienced explosive growth but struggled with last-mile delivery challenges across multiple geographic regions. We built a comprehensive distribution network to support their expansion.",
    challenge: "The client's existing logistics partners couldn't scale with their growth, resulting in delivery delays, high costs, and poor customer experience. They needed a reliable partner for nationwide and international expansion.",
    solution: "We developed a multi-regional distribution network with strategic warehouse locations, partnered with local delivery providers, and implemented advanced route optimization technology. The solution included real-time tracking and customer communication systems.",
    results: [
      { metric: "Delivery Volume", value: "40% increase", icon: FiTrendingUp },
      { metric: "Delivery Time", value: "50% faster", icon: FiClock },
      { metric: "Customer Satisfaction", value: "92%", icon: FiUsers },
      { metric: "Cost per Delivery", value: "15% reduction", icon: FiDollarSign }
    ],
    keyFeatures: [
      "Multi-regional warehouse network",
      "Real-time delivery tracking",
      "Route optimization algorithms",
      "Customer notification system",
      "Flexible scaling capabilities"
    ],
    testimonial: {
      quote: "Logistica's end-to-end solution has been crucial to our growth story. Their ability to scale with us and maintain service quality across regions has been outstanding.",
      author: "Emma Rodriguez",
      position: "Head of Operations, ShopFast"
    },
    images: [
      whyChooseUs,
      group95,
      homeAbout
    ]
  },
  "supply-chain-optimization-tech": {
    id: "supply-chain-optimization-tech",
    title: "Supply Chain Optimization for Tech Giant",
    subtitle: "Revolutionizing supply chain visibility and reducing lead times for a Fortune 500 technology company",
    heroImage: corporateLeader,
    overview: "A leading technology company faced significant challenges with their global supply chain, experiencing poor visibility, long lead times, and inefficient inventory management. Our comprehensive supply chain optimization solution transformed their operations and improved overall business performance.",
    challenge: "The client struggled with fragmented supply chain systems across multiple global locations, resulting in 45-day average lead times, 30% excess inventory, and poor demand forecasting accuracy. Manual processes and lack of real-time visibility led to frequent stockouts and delayed product launches.",
    solution: "We implemented an integrated supply chain management platform combining advanced analytics, AI-powered forecasting, and real-time tracking across all facilities. The solution included automated inventory optimization, predictive analytics for demand planning, and seamless integration with existing ERP systems.",
    results: [
      { metric: "Lead Time Reduction", value: "45%", icon: FiClock },
      { metric: "Inventory Optimization", value: "30%", icon: FiTrendingUp },
      { metric: "Forecast Accuracy", value: "85%", icon: FiTarget },
      { metric: "Cost Savings", value: "28%", icon: FiDollarSign }
    ],
    keyFeatures: [
      "Real-time supply chain visibility dashboard",
      "AI-powered demand forecasting",
      "Automated inventory optimization",
      "Multi-location coordination platform",
      "Predictive maintenance scheduling"
    ],
    testimonial: {
      quote: "The supply chain transformation has been nothing short of revolutionary. We've achieved unprecedented visibility and efficiency, enabling us to bring products to market faster than ever before.",
      author: "Jennifer Martinez",
      position: "VP of Global Operations, TechCorp"
    },
    images: [
      corporateLeader,
      group95,
      whoWeAre
    ]
  },
  "cold-chain-pharmaceuticals": {
    id: "cold-chain-pharmaceuticals",
    title: "Cold Chain Solutions for Pharmaceuticals",
    subtitle: "Temperature-controlled logistics ensuring product integrity for life-saving medications",
    heroImage: whoWeAre,
    overview: "A pharmaceutical company required specialized cold chain logistics to maintain the efficacy of temperature-sensitive medications during global distribution. Our comprehensive cold chain solution ensured 100% product integrity while optimizing costs and delivery times.",
    challenge: "The client needed to maintain strict temperature controls (2-8°C) for vaccines and biologics across complex global supply chains. Previous solutions resulted in 5% product loss due to temperature excursions and inconsistent monitoring.",
    solution: "We developed a comprehensive cold chain logistics network featuring GPS-enabled temperature monitoring, automated climate-controlled vehicles, and AI-powered route optimization. The solution included real-time alerts, backup systems, and comprehensive documentation for regulatory compliance.",
    results: [
      { metric: "Product Integrity", value: "100%", icon: FiTarget },
      { metric: "Temperature Compliance", value: "99.9%", icon: FiCheckCircle },
      { metric: "Delivery Efficiency", value: "50%", icon: FiTrendingUp },
      { metric: "Cost Reduction", value: "25%", icon: FiDollarSign }
    ],
    keyFeatures: [
      "Real-time temperature monitoring",
      "GPS-enabled tracking systems",
      "Automated climate-controlled fleet",
      "Regulatory compliance documentation",
      "Emergency response protocols"
    ],
    testimonial: {
      quote: "Our partnership with Logistica has ensured that life-saving medications reach patients worldwide with complete confidence in product integrity and safety.",
      author: "Dr. Robert Chen",
      position: "Chief Logistics Officer, PharmaLife"
    },
    images: [
      whoWeAre,
      corporateLeader,
      journey
    ]
  },
  "last-mile-delivery-retail": {
    id: "last-mile-delivery-retail",
    title: "Last-Mile Delivery Innovation for Retail",
    subtitle: "AI-powered route optimization and same-day delivery network serving millions of customers",
    heroImage: journey,
    overview: "A major retail chain needed to revolutionize their last-mile delivery operations to compete in the e-commerce space. Our AI-powered solution transformed their delivery network, achieving same-day delivery capabilities and exceptional customer satisfaction.",
    challenge: "The retailer faced increasing customer expectations for fast, reliable delivery while managing rising operational costs. Their existing delivery network struggled with route inefficiencies, resulting in 48-hour delivery times and high customer service costs.",
    solution: "We implemented an AI-powered delivery optimization platform featuring dynamic routing, predictive delivery windows, and automated fleet management. The solution included customer communication systems, real-time tracking, and performance analytics.",
    results: [
      { metric: "Delivery Speed", value: "60% faster", icon: FiClock },
      { metric: "Customer Satisfaction", value: "96%", icon: FiUsers },
      { metric: "Operational Costs", value: "35% reduction", icon: FiDollarSign },
      { metric: "Weekly Customers", value: "1M+", icon: FiTrendingUp }
    ],
    keyFeatures: [
      "AI-powered route optimization",
      "Real-time delivery tracking",
      "Predictive delivery windows",
      "Customer communication platform",
      "Automated fleet management"
    ],
    testimonial: {
      quote: "The last-mile delivery transformation has redefined our customer experience. Same-day delivery and real-time tracking have become key differentiators in our market.",
      author: "Sarah Williams",
      position: "Director of E-commerce, RetailMax"
    },
    images: [
      journey,
      whoWeAre,
      corporateLeader
    ]
  }
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const caseStudy = caseStudyData[id];

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate('/sectors/logistics')}
            className="text-blue-600 hover:text-blue-800"
          >
            Return to Logistics Overview
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
        title={caseStudy.title}
        description={caseStudy.subtitle}
        image={caseStudy.heroImage}
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

      {/* Overview Section */}
      <motion.section
        variants={itemVariants}
        className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16"
      >
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {caseStudy.overview}
          </p>
        </div>
      </motion.section>

      {/* Challenge & Solution */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-orange-600 font-semibold uppercase tracking-wider text-sm">
                <FiTarget className="h-4 w-4" />
                The Challenge
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Identifying the Problem</h3>
              <p className="text-gray-600 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold uppercase tracking-wider text-sm">
                <FiCheckCircle className="h-4 w-4" />
                Our Solution
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Implementing the Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                {caseStudy.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <motion.section
        variants={itemVariants}
        className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Measurable Results</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The implementation delivered significant improvements across key performance indicators
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {caseStudy.results.map((result, index) => {
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
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features Implemented</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to address specific business challenges
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {caseStudy.keyFeatures.map((feature, index) => (
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
        className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16"
      >
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-8 leading-relaxed">
              "{caseStudy.testimonial.quote}"
            </blockquote>
            <div className="flex flex-col items-center gap-2">
              <div className="font-semibold text-gray-900">{caseStudy.testimonial.author}</div>
              <div className="text-gray-600">{caseStudy.testimonial.position}</div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gallery */}
      <motion.section
        variants={itemVariants}
        className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Gallery</h2>
          <p className="text-lg text-gray-600">
            Visual insights into our implementation and results
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudy.images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="aspect-video rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={image}
                alt={`Project image ${index + 1}`}
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
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Logistics?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover how our proven strategies can optimize your supply chain and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get Started Today
            </button>
            <button
              onClick={() => navigate('/sectors/logistics')}
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Explore More Case Studies
            </button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CaseStudyDetail;