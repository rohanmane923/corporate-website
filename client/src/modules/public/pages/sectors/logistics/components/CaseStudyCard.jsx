import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiTrendingUp } from "react-icons/fi";

const CaseStudyCard = ({ image, title, description, to, category, metrics }) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-800 rounded-full">
              {category}
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Metrics Preview */}
        {metrics && (
          <div className="grid grid-cols-3 gap-2 mb-4">
            {Object.entries(metrics).slice(0, 3).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-lg font-bold text-orange-500">{value}</div>
                <div className="text-xs text-gray-500 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Button */}
        <Link
          to={to}
          className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors duration-200 group/link"
        >
          Read More
          <motion.span
            className="transition-transform duration-200 group-hover/link:translate-x-1"
          >
            <FiArrowRight className="h-4 w-4" />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
