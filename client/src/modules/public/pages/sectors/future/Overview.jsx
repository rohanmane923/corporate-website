import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FiGlobe, FiCpu, FiZap, FiActivity, FiArrowRight } from "react-icons/fi";
import HeroSection from "../../../components/HeroSection";
import heroImage from "../../../../../assets/Group_95.png";
import futureOverviewImage from "../../../../../assets/Future Scalable Sectors 258 (1).png";

const features = [
  {
    title: "Innovation First",
    description: "Leveraging cutting-edge technology to solve tomorrow's challenges today.",
    icon: FiCpu,
  },
  {
    title: "Global Scalability",
    description: "Solutions designed to grow and adapt across international markets.",
    icon: FiGlobe,
  },
  {
    title: "Sustainable Energy",
    description: "Investing in clean energy and green tech for a better future.",
    icon: FiZap,
  },
];

const focusAreas = [
  {
    title: "Artificial Intelligence",
    description: "Empowering businesses with intelligent automation and data insights.",
    icon: FiActivity,
  },
  {
    title: "Renewable Energy",
    description: "Building infrastructure for a sustainable and carbon-neutral world.",
    icon: FiZap,
  },
  {
    title: "Advanced Manufacturing",
    description: "Transforming production with robotics and smart factory solutions.",
    icon: FiCpu,
  },
  {
    title: "Health Tech",
    description: "Innovating in digital health and biotech for improved global wellness.",
    icon: FiActivity,
  },
];

const FutureOverview = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Future Scalable Sectors"
        description="Identifying and investing in the industries that will define the next decade of global growth."
        image={heroImage}
      />

      {/* Overview Section */}
      <section id="overview" className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-full min-h-[480px] rounded-[32px] overflow-hidden shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
          >
            <img
              src={futureOverviewImage}
              alt="Future sectors overview"
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
                Building the Future, One Innovation at a Time.
              </h1>
              <p className="text-gray-500 leading-relaxed max-w-2xl">
                We are focused on sectors that exhibit high growth potential and the ability to create long-term impact. By combining capital with strategic expertise, we help pioneering companies scale their solutions and lead their industries.
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

      {/* Focus Areas Section */}
      <section id="focus-areas" className="bg-[#f7f9fb] py-16">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-corporate-navy">Focus Areas</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We focus on high-impact sectors where technology and sustainability intersect.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div key={area.title} className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition">
                <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <area.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-corporate-navy mb-3">{area.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FutureOverview;
