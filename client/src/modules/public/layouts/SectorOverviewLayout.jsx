import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import SectionHeader from "../pages/sectors/logistics/components/SectionHeader";
import ServiceCard from "../pages/sectors/logistics/components/ServiceCard";
import CaseStudyCard from "../pages/sectors/logistics/components/CaseStudyCard";

/**
 * Reusable Sector Overview Layout Component
 * 
 * Props:
 * - heroTitle: Hero section title
 * - heroDescription: Hero section description
 * - heroImage: Hero section image
 * - overviewSubtitle: Overview section subtitle (label)
 * - overviewTitle: Overview section main title
 * - overviewDescription: Overview section description text
 * - overviewImage: Overview section image
 * - features: Array of feature objects {title, description, icon}
 * - servicesTitle: Services section title
 * - servicesSubtitle: Services section subtitle
 * - servicesActionLabel: Services "Explore" button label
 * - servicesActionTo: Services button link
 * - services: Array of service objects {title, description, icon, to}
 * - insightsLabel: Insights section label
 * - insightsTitle: Insights section title
 * - insightsViewAllLink: Link to view all insights
 * - insights: Array of insight/case study objects {id, title, description, image, category, metrics, to}
 */
const SectorOverviewLayout = ({
  heroTitle,
  heroDescription,
  heroImage,
  overviewSubtitle,
  overviewTitle,
  overviewDescription,
  overviewImage,
  features,
  servicesTitle,
  servicesSubtitle,
  servicesActionLabel,
  servicesActionTo,
  services,
  insightsLabel,
  insightsTitle,
  insightsViewAllLink,
  insights,
  insightsButtonLink,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroSection
        title={heroTitle}
        description={heroDescription}
        image={heroImage}
      />

      {/* Overview Section */}
      <section className=" mx-auto px-8 sm:px-12 lg:px-20 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-full min-h-[480px] rounded-[32px] overflow-hidden shadow-[0_24px_80px_rgba(15,23,42,0.08)]"
          >
            <img
              src={overviewImage}
              alt={overviewTitle}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </motion.div>

          <div className="space-y-8">
            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-[0.35em] mb-3">
                {overviewSubtitle}
              </p>
              <h1 className="text-4xl font-bold text-corporate-navy mb-4">
                {overviewTitle}
              </h1>
              <p className="text-gray-500 leading-relaxed ">
                {overviewDescription}
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
      {services && services.length > 0 && (
        <section className="bg-[#f7f9fb] py-16">
          <div className=" mx-auto px-8 sm:px-12 lg:px-20">
            <SectionHeader
              title={servicesTitle}
              subtitle={servicesSubtitle}
              actionLabel={servicesActionLabel}
              actionTo={servicesActionTo}
            />

            <div className="mt-10 grid gap-6 xl:grid-cols-4 lg:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Insights/Case Studies Section */}
      {insights && insights.length > 0 && (
        <section className=" mx-auto px-8 sm:px-12 lg:px-20 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-orange-500 font-semibold uppercase tracking-[0.35em] mb-2">
                {insightsLabel}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-corporate-navy">
                {insightsTitle}
              </h2>
            </div>
            <div>
              <motion.button
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-corporate-orange transition"
                onClick={() => navigate(insightsButtonLink)}
              >
                {insightsViewAllLink} <FiArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {insights.map((insight) => (
              <CaseStudyCard key={insight.id} {...insight} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SectorOverviewLayout;
