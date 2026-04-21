import React from 'react';
import heroBg from '../../../assets/Group_95.png';

const Home = () => {
    const stats = [
        {
            value: '4+',
            label: 'Continents',
            sublabel: 'Global Reach',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            value: 'Multi-Entity',
            label: 'Digital Ecosystem',
            sublabel: 'Integrated Tech',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            value: 'Sustainable',
            label: 'Growth & Impact',
            sublabel: 'ESG Committed',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        }

    ];

    return (
        <div className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Hero Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Global Digital Ecosystem"
                    className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-corporate-navy via-corporate-navy/80 to-transparent"></div> */}
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 md:px-6 z-10 pt-24">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
                        Building a Global <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            Digital Ecosystem
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                        Driving sustainable growth through logistics, education, and social impact across continents.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-20">
                        <button className="bg-corporate-orange text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-corporate-orange/40 hover:-translate-y-1 transition-all">
                            Get Started
                        </button>
                        <button className="border-2 border-white/30 text-white px-10 py-4 rounded-lg font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all">
                            Our Services
                        </button>
                    </div>

                    {/* Stats/Features Banner */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 border-t border-white/10 pt-10">
                        {stats.map((stat, idx) => (
                            <div key={idx} className={`flex items-start gap-4 ${idx !== 0 ? 'md:border-l md:border-white/10 md:pl-8' : ''} ${idx !== stats.length - 1 ? 'md:pr-8' : ''}`}>
                                <div className="text-corporate-orange mt-1">
                                    {stat.icon}
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-xl mb-1">{stat.value}</h3>
                                    <p className="text-gray-300 font-semibold text-sm">{stat.label}</p>
                                    <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">{stat.sublabel}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Overlay Gradient for Bottom Transition */}
            {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fcfcfc] to-transparent z-10"></div> */}
        </div>
    );
};

export default Home;
