import { motion } from "framer-motion";
import { FiTruck, FiHome, FiBox, FiMapPin, FiShield, FiArrowRight } from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HeroSection from "../../../components/HeroSection";
import SectionHeader from "./components/SectionHeader";
import ServiceCard from "./components/ServiceCard";
import CaseStudyCard from "./components/CaseStudyCard";
import heroImage from "../../../../../assets/About.png";
import overviewImage from "../../../../../assets/Rectangle256.png";
import caseStudy1 from "../../../../../assets/home about image.png";
import caseStudy2 from "../../../../../assets/who-we-are.png";
import caseStudy3 from "../../../../../assets/why choose us.png";

const features = [
  {
    title: "Global Network",
    description: "Strong partnerships and presence to serve you anywhere.",
    icon: FiMapPin,
  },
  {
    title: "Technology Driven",
    description: "Real-time visibility and data-driven insights for smarter decisions.",
    icon: FiShield,
  },
  {
    title: "Customer Focused",
    description: "Tailored logistics designed around your unique business needs.",
    icon: FiTruck,
  },
];

const services = [
  {
    title: "Warehousing & Storage",
    description: "Secure and flexible storage solutions with advanced inventory management.",
    icon: FiHome,
    to: "#services",
  },
  {
    title: "Freight Transportation",
    description: "Reliable road, air, and sea freight solutions tailored to your business needs.",
    icon: FiTruck,
    to: "#services",
  },
  {
    title: "Supply Chain Management",
    description: "End-to-end supply chain management for visibility and efficiency.",
    icon: FiBox,
    to: "#services",
  },
  {
    title: "Distribution & Delivery",
    description: "Timely and efficient distribution with a strong last-mile delivery network.",
    icon: FiMapPin,
    to: "#services",
  },
];

const caseStudies = [
  {
    id: "optimizing-freight-manufacturing-leader",
    title: "Optimizing Freight Manufacturing Leader",
    description: "We streamlined international freight operations, reducing transit time by 25% and costs by 18%.",
    image: caseStudy1,
    to: "/sectors/logistics/case-studies/optimizing-freight-manufacturing-leader",
  },
  {
    id: "smart-warehousing-retail-brand",
    title: "Smart Warehousing for Retail Brand",
    description: "Implemented automation and real-time inventory tracking improving order accuracy by 99.5%.",
    image: caseStudy2,
    to: "/sectors/logistics/case-studies/smart-warehousing-retail-brand",
  },
  {
    id: "end-to-end-ecommerce-growth",
    title: "End-to-End for E-commerce Growth",
    description: "Our distribution network helped the client scale deliveries by 40% across multiple regions.",
    image: caseStudy3,
    to: "/sectors/logistics/case-studies/end-to-end-ecommerce-growth",
  },
];

const LogisticsOverview = () => {
  const navigate = useNavigate();
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
      <HeroSection
        title="Logistics"
        description="End-to-end logistics solutions that connect businesses, optimize supply chains, and deliver value across the globe."
        image={heroImage}
      />

      <section id="overview" className=" mx-auto px-8 sm:px-12 lg:px-20 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] items-center">
          {/* <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[32px] overflow-hidden shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
          >
            <img src={overviewImage} alt="Logistics overview" className="h-full w-full object-cover" />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-full min-h-[480px] rounded-[32px] overflow-hidden shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
          >
            <img
              src={overviewImage}
              alt="Logistics overview"
              className="w-full h-full object-cover"
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </motion.div>

          <div className="space-y-8">
            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-[0.35em] mb-3">Overview</p>
              <h1 className="text-4xl font-bold text-corporate-navy mb-4">Moving Business Forward, Together</h1>
              <p className="text-gray-500 leading-relaxed ">
                At Logistics, we combine global reach with local expertise to provide seamless logistics and supply chain solutions. From transportation and warehousing to distribution and last-mile delivery, we ensure your goods move efficiently, safely, and on time.
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
                    <h3 className="text-base font-semibold text-corporate-navy mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f7f9fb] py-16">
        <div className=" mx-auto px-8 sm:px-12 lg:px-20">
          <SectionHeader
            title="Services"
            subtitle="Comprehensive solutions designed to streamline your supply chain and drive efficiency."
            actionLabel="Explore All Services"
            actionTo="#services"
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-4 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className=" mx-auto px-8 sm:px-12 lg:px-20 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-[0.35em] mb-2">Cash Studies</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-corporate-navy">Real solutions, real results.</h2>
          </div>
          <div>
            <motion.button
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-corporate-orange transition"
              onClick={() => navigate("/sectors/logistics/case-studies")}
            >
              View All Case Study <FiArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.title} {...caseStudy} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LogisticsOverview;
