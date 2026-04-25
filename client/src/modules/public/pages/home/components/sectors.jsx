import { useNavigate } from "react-router-dom";

const Sectors = () => {
  const navigate = useNavigate();

  const sectors = ["Logistics", "Finance", "Future"];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">

        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-orange-500">
               Sectors
            </h2>
            <p className="text-gray-500 text-sm">
              Creating Impact Across Sectors
            </p>
          </div>

          <button
            onClick={() => navigate("/sectors")}
            className="text-blue-500 text-sm hover:underline"
          >
            Explore All Sectors →
          </button>
        </div>

        {/* 🔥 SLIDER WRAPPER */}
        <div className="relative">
          <div className="overflow-hidden py-4">
            <div className="flex gap-4 md:gap-8 animate-scroll hover:[animation-play-state:paused]">

              {/* 🔥 DUPLICATE FOR INFINITE LOOP */}
              {[...sectors, ...sectors, ...sectors].map((item, i) => (

                <div
                  key={i}
                  onClick={() => navigate(`/sectors/${item.toLowerCase()}`)}
                  className="min-w-[240px] sm:min-w-[280px] md:min-w-[320px] bg-slate-50 border border-slate-100 p-8 relative hover:shadow-2xl transition-all duration-300 cursor-pointer rounded-xl group"
                >

                  <div className="absolute top-0 left-0 w-0 group-hover:w-full h-1.5 bg-orange-500 transition-all duration-500">
                  </div>

                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="text-orange-500 text-xl font-bold">{item.charAt(0)}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-corporate-navy group-hover:text-corporate-orange transition-colors">{item}</h3>

                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    Innovative solutions and strategic growth in the {item.toLowerCase()} sector.
                  </p>

                  <span className="text-corporate-orange text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Details <span className="text-lg">→</span>
                  </span>
                </div>

              ))}

            </div>
          </div>
          
          {/* FADE GRADIENTS FOR SLIDER */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default Sectors;