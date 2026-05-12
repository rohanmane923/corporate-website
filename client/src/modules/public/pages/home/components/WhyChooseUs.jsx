// import whyImg from "../../../../../assets/why choose us.png";
// import { FaMedal, FaCheckCircle, FaUsers } from "react-icons/fa";

// const WhyChooseUs = () => {
//   return (
//     <section className="relative h-[450px] flex overflow-hidden">

//       {/* LEFT CONTENT */}
//       <div className="w-1/2 bg-[#0c2438] flex items-center clip-path-custom relative z-20">
//         <div className="px-12 lg:px-20 text-white w-full">

//           <h2 className="text-4xl font-bold mb-10">
//             Why Choose Us
//           </h2>

//           {/* STATS */}
//           <div className="flex items-center justify-between">

//             {/* ITEM 1 */}
//             <div className="flex items-center gap-3">
//               <FaMedal className="text-orange-500 text-xl" />
//               <div>
//                 <h3 className="text-lg font-semibold">10+</h3>
//                 <p className="text-gray-300 text-sm">
//                   Years of Experience
//                 </p>
//               </div>
//             </div>

//             {/* DIVIDER */}
//             <div className="h-10 w-px bg-gray-500"></div>

//             {/* ITEM 2 */}
//             <div className="flex items-center gap-3">
//               <FaCheckCircle className="text-orange-500 text-xl" />
//               <div>
//                 <h3 className="text-lg font-semibold">200+</h3>
//                 <p className="text-gray-300 text-sm">
//                   Projects Completed
//                 </p>
//               </div>
//             </div>

//             {/* DIVIDER */}
//             <div className="h-10 w-px bg-gray-500"></div>

//             {/* ITEM 3 */}
//             <div className="flex items-center gap-3">
//               <FaUsers className="text-orange-500 text-xl" />
//               <div>
//                 <h3 className="text-lg font-semibold">50+</h3>
//                 <p className="text-gray-300 text-sm">
//                   Happy Clients
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* RIGHT IMAGE */}
//       <div className="w-1/2 relative -ml-20">
//         <img
//           src={whyImg}
//           alt="Why Choose Us"
//           className="h-full w-full object-cover"
//         />
//       </div>

//     </section>
//   );
// };

// export default WhyChooseUs;

import whyImg from "../../../../../assets/handshake.webp";
import { FaMedal, FaCheckCircle, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row min-h-[520px]">

        {/* LEFT SECTION */}
        <div className="relative w-full lg:w-[50%] bg-[#0c2438] text-white flex items-center">

          {/* DESKTOP DIAGONAL */}
          <div className="hidden lg:block absolute top-0 -right-20 w-40 h-full bg-[#0c2438] skew-x-[-12deg] z-20"></div>

          <div className="relative z-30 w-full px-6 sm:px-10 lg:px-16 py-14">

            {/* HEADING */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 leading-tight">
              Why Choose Us
            </h2>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

              {/* ITEM */}
              <div className="flex items-start gap-3">
                <FaMedal className="text-orange-500 text-lg mt-1 shrink-0" />

                <div>
                  <h3 className="text-2xl font-bold">10+</h3>

                  <p className="text-gray-300 text-sm leading-6">
                    Years of Experience
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-orange-500 text-lg mt-1 shrink-0" />

                <div>
                  <h3 className="text-2xl font-bold">200+</h3>

                  <p className="text-gray-300 text-sm leading-6">
                    Projects Completed
                  </p>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex items-start gap-3">
                <FaUsers className="text-orange-500 text-lg mt-1 shrink-0" />

                <div>
                  <h3 className="text-2xl font-bold">50+</h3>

                  <p className="text-gray-300 text-sm leading-6">
                    Happy Clients
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            w-full
            lg:w-[50%]
            min-h-[300px]
            sm:min-h-[400px]
            lg:min-h-full
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: `url(${whyImg})`,
          }}
        ></div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
