import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getCombinedNewsMedia } from "../../news-media/data/dummyData";

const News = () => {
  const navigate = useNavigate();
  const newsItems = getCombinedNewsMedia().slice(0, 3);

  return (
    <section className="py-16 bg-gray-100">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">

        {/* 🔥 HEADING ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-12 flex-wrap gap-4"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">
              Latest News Insights
            </h2>
            <p className="text-gray-500 text-sm">
              Stay updated with our latest news, industry insights, and expert perspectives.
            </p>
          </div>

          <button
            onClick={() => navigate("/news")}
            className="text-blue-500 text-sm hover:underline"
          >
            View All Articles →
          </button>
        </motion.div>

        {/* 🔥 CARDS CONTAINER (STAGGER) */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {newsItems.map((item) => (
            <motion.div
              key={item.slug}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              onClick={() => navigate(`/news/${item.type}s/${item.slug}`)}
              className="bg-white rounded-lg shadow hover:shadow-2xl transition overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.displayImage}
                  alt={item.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
                />
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                  {item.displayCategory}
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs text-gray-400 mb-2">{item.displayDate}</p>
                <h3 className="font-semibold mb-2 text-lg group-hover:text-orange-500 transition line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                  {item.displayExcerpt}
                </p>

                <span className="text-blue-500 text-sm cursor-pointer hover:underline">
                  Read More →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default News;