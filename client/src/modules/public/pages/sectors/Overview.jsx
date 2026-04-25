
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiTruck,
  FiTrendingUp,
  FiGlobe,
  FiGrid,
  FiBriefcase,
  FiFileText
} from "react-icons/fi";

import HeroSection from "../../../public/components/HeroSection";
import heroImage from "../../../../assets/hero.png";
import futureImg from "../../../../assets/Group_95.png";
import logisticsImg from "../../../../assets/home about image.png";
import financeImg from "../../../../assets/why choose us.png";

const sectorCards = [
  {
    title: "Logistica",
    description:
      "End-to-end logistics solutions that connect businesses to opportunities.",
    link: "/sectors/logistics",
    icon: FiTruck,
    accent: "text-orange-500 bg-orange-100",
    cta: "Explore Sector",
  },
  {
    title: "Finance",
    description:
      "Financial expertise and strategies to empower business growth.",
    link: "/sectors/finance",
    icon: FiTrendingUp,
    accent: "text-emerald-500 bg-emerald-100",
    cta: "Read More",
  },
  {
    title: "Future Scalable",
    description:
      "Investing in emerging industries to build a sustainable tomorrow.",
    link: "/sectors/future",
    icon: FiGlobe,
    accent: "text-violet-500 bg-violet-100",
    cta: "Read More",
  },
];

const detailSections = [
  {
    title: "Logistica",
    subtitle:
      "We provide comprehensive logistics solutions that streamline supply chains, optimize operations, and ensure timely delivery across the globe.",
    image: logisticsImg,
    icon: <FiTruck />,
    accent: "orange",
    items: [
      {
        label: "Overview",
        description:
          "Discover how we connect businesses through smart logistics.",
        icon: <FiGrid />,
        to: "/sectors/logistics",
      },
      {
        label: "Services",
        description:
          "Explore our range of logistics services built for efficiency.",
        icon: <FiBriefcase />,
        to: "/sectors/logistics/services",
      },
      {
        label: "Case Studies",
        description:
          "See how we deliver results through proven logistics solutions.",
        icon: <FiFileText />,
        to: "/sectors/logistics/case-studies",
      },
    ],
  },
  {
    title: "Finance",
    subtitle:
      "We offer financial advisory and consulting services that help organizations make smarter decisions and achieve long-term growth.",
    image: financeImg,
    icon: <FiTrendingUp />,
    accent: "emerald",
    items: [
      {
        label: "Overview",
        description:
          "Understand our approach to financial strategy and advisory.",
        icon: <FiGrid />,
        to: "/sectors/finance",
      },
      {
        label: "Services",
        description:
          "Explore our financial solutions tailored to your needs.",
        icon: <FiBriefcase />,
        to: "/sectors/finance/services",
      },
      {
        label: "Insights",
        description:
          "Stay updated with the latest financial trends and insights.",
        icon: <FiFileText />,
        to: "/sectors/finance/insights",
      },
    ],
  },
  {
    title: "Future Scalable Sectors",
    subtitle:
      "We are continuously exploring and investing in emerging sectors that have the potential to shape the future.",
    image: futureImg,
    icon: <FiGlobe />,
    accent: "violet",
    items: [
      {
        label: "Overview",
        description:
          "Learn about our vision for future-ready opportunities.",
        icon: <FiGrid />,
        to: "/sectors/future",
      },
      {
        label: "Focus Areas",
        description:
          "Explore the high-potential sectors we are building for tomorrow.",
        icon: <FiBriefcase />,
        to: "/sectors/future",
      },
      {
        label: "Sustainability",
        description:
          "Our commitment to building scalable and sustainable solutions.",
        icon: <FiFileText />,
        to: "/sectors/future",
      },
    ],
  },
];

const SectorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      <HeroSection
        title="Sectors We Serve"
        description="We deliver expertise and innovative solutions across multiple sectors, driving growth, efficiency, and sustainable success."
        image={heroImage}
      />

      {/* Top Cards Section */}
      <section    className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16">
        <div className="text-left mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-[0.35em] mb-3">
            Our Key Sectors
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy">
            The industries where we build value.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {sectorCards.map((sector) => {
            const Icon = sector.icon;

            return (
              <motion.button
                key={sector.title}
                onClick={() => navigate(sector.link)}
                whileHover={{ y: -6 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="group rounded-[28px] border border-slate-200 bg-white p-7 text-left shadow-sm transition hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`${sector.accent} rounded-2xl p-4`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-2xl font-semibold text-corporate-navy">
                    {sector.title}
                  </h3>
                </div>

                <p className="text-gray-500 leading-relaxed mb-8">
                  {sector.description}
                </p>

                <span className="text-blue-600 font-medium group-hover:text-corporate-orange transition">
                  {sector.cta} →
                </span>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Detail Sections */}
      <section className="bg-[#f7f9fb] py-16">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
          <div className="grid gap-10">
            {detailSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className={`
                  grid lg:grid-cols-[0.9fr_1.1fr] gap-8
                  rounded-[28px]
                  p-6 lg:p-8
                  overflow-hidden

                  ${
                    section.accent === "orange"
                      ? "bg-gradient-to-r from-orange-50 via-orange-100/80 to-orange-50"
                      : section.accent === "emerald"
                      ? "bg-gradient-to-r from-emerald-50 via-emerald-100/80 to-emerald-50"
                      : "bg-gradient-to-r from-violet-50 via-violet-100/80 to-violet-50"
                  }
                `}
              >
                {/* Left Image */}
                <div className="rounded-[24px] overflow-hidden h-full">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full min-h-[320px] object-cover"
                  />
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    {/* Section Icon */}
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${
                          section.accent === "orange"
                            ? "bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600"
                            : section.accent === "emerald"
                            ? "bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-600"
                            : "bg-gradient-to-br from-violet-100 to-violet-50 text-violet-600"
                        }`}
                      >
                        {section.icon}
                      </div>

                      <h2 className="text-4xl font-bold text-corporate-navy">
                        {section.title}
                      </h2>
                    </div>

                    <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-10">
                      {section.subtitle}
                    </p>
                  </div>

                  {/* Bottom Cards */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {section.items.map((item) => (
                      <div key={item.label}>
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${
                              section.accent === "orange"
                                ? "bg-gradient-to-br from-orange-500 to-orange-400"
                                : section.accent === "emerald"
                                ? "bg-gradient-to-br from-emerald-500 to-emerald-400"
                                : "bg-gradient-to-br from-violet-500 to-violet-400"
                            }`}
                          >
                            {item.icon}
                          </div>

                          <h4 className="text-xl font-semibold text-corporate-navy">
                            {item.label}
                          </h4>
                        </div>

                        <p className="text-gray-500 leading-relaxed text-sm mb-4">
                          {item.description}
                        </p>

                        <button
                          onClick={() => navigate(item.to)}
                          className="text-corporate-orange font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                        >
                          Read More →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectorPage;