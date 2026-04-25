import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import about from "../../../../../assets/About.png";
import aboutwho from "../../../../../assets/who-we-are.png";
import CompanyOverview from "../../about/components/CompanyOverview";
import HistoryTimeline from "../../about/components/HistoryTimeLine";
import MissionVision from "../../about/components/MissionVision";
import Leadership from "../../about/components/Leadership";

const About = () => {
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
    <div className="bg-gray-100 pt-20 md:pt-20">
      {/* 🔹 Hero Section */}
      <div className="relative w-full">
        <img src={about} alt="about" className="w-full h-auto" />

        {/* Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">About Us</h1>
            <p className="max-w-lg text-sm md:text-base">
              Learn more about our mission, values, and commitment to excellence
              in everything we do.
            </p>
          </div>
        </div>
      </div>
      {/* 🔹 Who We Are */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src={aboutwho}
            alt="team"
            className="w-full h-[320px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We are a forward-thinking team of professionals committed to
            delivering innovative, reliable, and scalable solutions across
            multiple sectors. Our expertise lies in combining strategic insight
            with practical execution, enabling businesses and communities to
            grow sustainably. We focus on building long-term value by
            understanding real-world challenges and designing solutions that are
            not only effective but also adaptable to changing environments.
            Through collaboration, integrity, and a results-driven approach, we
            strive to empower organizations, enhance operational efficiency, and
            create meaningful impact at every level.
          </p>
          {/* 
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-gray-800">
                ✔ Our Mission
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                To deliver innovative solutions that drive business growth and long-term success.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2 text-gray-800">
                ✔ Our Vision
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                To be a global leader in innovation, excellence, and sustainable development.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      {/* 🔹 Achievements */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-orange-500 mb-12">
            Our Achievements
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            <div className="px-6">
              <h2 className="text-3xl font-bold text-gray-800">10+</h2>
              <p className="text-gray-500 text-sm mt-2">Years of Experience</p>
            </div>

            <div className="px-6">
              <h2 className="text-3xl font-bold text-gray-800">200+</h2>
              <p className="text-gray-500 text-sm mt-2">Projects Completed</p>
            </div>

            <div className="px-6">
              <h2 className="text-3xl font-bold text-gray-800">50+</h2>
              <p className="text-gray-500 text-sm mt-2">Happy Clients</p>
            </div>

            <div className="px-6">
              <h2 className="text-3xl font-bold text-gray-800">25+</h2>
              <p className="text-gray-500 text-sm mt-2">Team Members</p>
            </div>
          </div>
        </div>
      </div>

      <section id="overview">
        <CompanyOverview />
      </section>

      <section id="history">
        <HistoryTimeline />
      </section>

      <section id="mission">
        <MissionVision />
      </section>

      <section id="leadership">
        <Leadership />
      </section>
    </div>
  );
};

export default About;