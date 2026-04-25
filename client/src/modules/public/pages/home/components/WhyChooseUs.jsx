import whyImg from "../../../../../assets/why choose us.png";

const WhyChooseUs = () => {
  return (
    <section className="relative min-h-[400px] md:h-[450px] overflow-hidden flex flex-col md:flex-row">

      {/* CONTENT BOX */}
      <div className="w-full md:w-[60%] bg-[#0c2438] flex items-center z-10">
        <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-16 md:py-20 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 leading-tight">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-orange-500">10+</h3>
              <p className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wider">Years of Experience</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-orange-500">200+</h3>
              <p className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wider">Projects Completed</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-orange-500">50+</h3>
              <p className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wider">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE BOX */}
      <div className="w-full md:w-[40%] h-[300px] md:h-full relative overflow-hidden">
        <img
          src={whyImg}
          alt="Why Choose Us"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        {/* Subtle overlay for mobile to blend better */}
        <div className="absolute inset-0 bg-black/10 md:bg-transparent"></div>
      </div>

    </section>
  );
};

export default WhyChooseUs;