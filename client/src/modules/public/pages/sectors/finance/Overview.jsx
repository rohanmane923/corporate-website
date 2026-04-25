import { motion } from "framer-motion";
import { FiArrowRight, FiTarget, FiBarChart2, FiTrendingUp, FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import HeroSection from "../../../components/HeroSection";
import SectionHeader from "./components/SectionHeader";
import ServiceCard from "../logistics/components/ServiceCard";
import CaseStudyCard from "../logistics/components/CaseStudyCard";
import financeHeroImage from "../../../../../assets/Group_95.png";
import financeOverviewImage from "../../../../../assets/Governance image.png";
import insight1 from "../../../../../assets/blog image.png";
import insight2 from "../../../../../assets/Press image.png";
import insight3 from "../../../../../assets/announcement image.png";

const features = [
  {
    title: "Strategic Guidance",
    description: "Actionable insights that align with your business goals.",
    icon: FiTarget,
  },
  {
    title: "Risk Management",
    description: "Identify, assess and mitigate financial risks to protect your business.",
    icon: FiBarChart2,
  },
  {
    title: "Sustainable Growth",
    description: "Build strong financial foundations for long-term, scalable success.",
    icon: FiTrendingUp,
  },
];

const services = [
  {
    title: "Risk and Compliance",
    description: "Robust frameworks to manage risk, ensure compliance, safeguard your business.",
    icon: FiTarget,
    to: "/sectors/finance/services",
  },
  {
    title: "Financial Advisory",
    description: "Expert advice for planning mergers, acquisitions, and financial restructuring.",
    icon: FiBarChart2,
    to: "/sectors/finance/services",
  },
  {
    title: "Investment Solutions",
    description: "Customized investment strategies to help you maximize returns and minimize risk.",
    icon: FiTrendingUp,
    to: "/sectors/finance/services",
  },
  {
    title: "Performance Optimization",
    description: "Enhance financial performance through process improvement and cost optimization.",
    icon: FiUsers,
    to: "/sectors/finance/services",
  },
];

const insights = [
  {
    id: "cash-flow-growth",
    title: "5 Ways to Improve Cash Flow for Growth",
    description: "Proven strategies to strengthen your cash flow and maintain financial stability.",
    image: insight1,
    category: "Financial Strategy",
    metrics: { roi: "25%", timeframe: "6 months", success: "92%" },
    to: "/sectors/finance/insights/cash-flow-growth",
  },
  {
    id: "managing-financial-risk",
    title: "Managing Financial Risk in Uncertain Times",
    description: "Learn how businesses can identify, assess and manage financial risks effectively.",
    image: insight2,
    category: "Risk Management",
    metrics: { savings: "35%", protection: "100%", efficiency: "48%" },
    to: "/sectors/finance/insights/managing-financial-risk",
  },
  {
    id: "investment-trends-2026",
    title: "Investment Trends to Watch in 2026",
    description: "Explore key investment trends and opportunities shaping the financial landscape.",
    image: insight3,
    category: "Market Insights",
    metrics: { growth: "18%", opportunities: "50+", adoption: "85%" },
    to: "/sectors/finance/insights/investment-trends-2026",
  },
];

const FinanceOverview = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Finance"
        description="Strategic financial solutions that empower businesses to grow, scale and create lasting value."
        image={financeHeroImage}
      />

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-full min-h-[480px] rounded-[32px] overflow-hidden shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
          >
            <img
              src={financeOverviewImage}
              alt="Finance overview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </motion.div>

          <div className="space-y-8">
            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-[0.35em] mb-3">
                Overview
              </p>
              <h1 className="text-4xl font-bold text-corporate-navy mb-4">
                Financial Expertise, Real Business Impact.
              </h1>
              <p className="text-gray-500 leading-relaxed max-w-2xl">
                We partner with organizations to navigate complexity, optimize performance, and achieve sustainable growth. Our data-driven approach and domain expertise help you make smarter financial decisions with confidence.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    whileHover={{ y: -4 }}
                    className="rounded-[28px] border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-100 text-orange-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-semibold text-corporate-navy mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#f7f9fb] py-16">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
          <SectionHeader
            title="Services"
            subtitle="Comprehensive solutions to strengthen your financial future."
            actionLabel="Explore All Services"
            actionTo="/sectors/finance/services"
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-4 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-[0.35em] mb-2">
              Insights
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-corporate-navy">
              Stay informed with expert perspectives.
            </h2>
          </div>
          <div>
            <motion.button
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-corporate-orange transition"
              onClick={() => navigate("/sectors/finance/insights")}
            >
              View All Insights <FiArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {insights.map((insight) => (
            <CaseStudyCard key={insight.id} {...insight} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FinanceOverview;
