
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
import heroImage from "../../../../assets/governance image.png";
import futureImg from "../../../../assets/Future Scalable Sectors 258 (1).png";
import logisticsImg from "../../../../assets/Rectangle256.png";
import financeImg from "../../../../assets/Governance image.png";

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
        to: "/sectors/logistics#overview",
      },
      {
        label: "Services",
        description:
          "Explore our range of logistics services built for efficiency.",
        icon: <FiBriefcase />,
        to: "/sectors/logistics#services",
      },
      {
        label: "Case Studies",
        description:
          "See how we deliver results through proven logistics solutions.",
        icon: <FiFileText />,
        to: "/sectors/logistics#case-studies",
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
        to: "/sectors/finance#overview",
      },
      {
        label: "Services",
        description:
          "Explore our financial solutions tailored to your needs.",
        icon: <FiBriefcase />,
        to: "/sectors/finance#services",
      },
      {
        label: "Insights",
        description:
          "Stay updated with the latest financial trends and insights.",
        icon: <FiFileText />,
        to: "/sectors/finance#insights",
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
        to: "/sectors/future#overview",
      },
      {
        label: "Focus Areas",
        description:
          "Explore the high-potential sectors we are building for tomorrow.",
        icon: <FiBriefcase />,
        to: "/sectors/future#focus-areas",
      },
      {
        label: "Sustainability",
        description:
          "Our commitment to building scalable and sustainable solutions.",
        icon: <FiFileText />,
        to: "/sectors/future#focus-areas",
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
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16">
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
                  grid lg:grid-cols-[0.8fr_1.2fr] gap-10
                  rounded-[32px]
                  p-6 lg:p-10
                  overflow-hidden
                  mb-12
                  ${section.accent === "orange"
                    ? "bg-orange-50/40"
                    : section.accent === "emerald"
                      ? "bg-emerald-50/40"
                      : "bg-violet-50/40"
                  }
                `}
              >
                {/* Left Image */}
                <div className="rounded-[24px] overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full min-h-[300px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center">
                  <div className="mb-8">
                    {/* Section Icon & Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm ${section.accent === "orange"
                          ? "bg-orange-500 text-white"
                          : section.accent === "emerald"
                            ? "bg-emerald-500 text-white"
                            : "bg-violet-500 text-white"
                          }`}
                      >
                        {section.icon}
                      </div>

                      <h2 className="text-3xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>

                    <p className="text-gray-600 text-base leading-relaxed max-w-3xl">
                      {section.subtitle}
                    </p>
                  </div>

                  {/* Sub-sections Grid */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {section.items.map((item) => (
                      <div key={item.label} className="group">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`text-xl ${
                            section.accent === "orange" ? "text-orange-500" :
                            section.accent === "emerald" ? "text-emerald-500" :
                            "text-violet-500"
                          }`}>
                            {item.icon}
                          </span>
                          <h4 className="text-lg font-bold text-gray-800">
                            {item.label}
                          </h4>
                        </div>

                        <p className="text-gray-500 leading-relaxed text-sm mb-4">
                          {item.description}
                        </p>

                        <button
                          onClick={() => navigate(item.to)}
                          className={`text-sm font-bold flex items-center gap-2 transition-all duration-300 ${
                            section.accent === "orange" ? "text-orange-600 hover:text-orange-700" :
                            section.accent === "emerald" ? "text-emerald-600 hover:text-emerald-700" :
                            "text-violet-600 hover:text-violet-700"
                          }`}
                        >
                          Read More 
                          <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
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