import { motion } from "framer-motion";
import leadershipImg from "../../../../../assets/corporateLeader.png"; // 

const Leadership = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="w-full mx-auto px-8 sm:px-12 lg:px-20">

        {/*  GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE CONTENT */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-orange-500 mb-6"
            >
              Leadership & Governance
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-4 leading-relaxed"
            >
              NiostGroup Inter-Foundation is guided by strong leadership
              principles that emphasize transparency, accountability, and
              long-term sustainability. The foundation operates with a
              structured governance approach to ensure every initiative is
              aligned with its mission and delivers measurable impact.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 leading-relaxed"
            >
              Chaired by Juno Oosterwolde, the leadership framework is being
              carefully developed to maintain clarity in decision-making and
              uphold responsible governance standards. The full board structure
              and governance documentation will be formally published upon
              completion of the registration process.
            </motion.p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-md">
              <img
                src={leadershipImg}
                alt="Leadership"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Leadership;
