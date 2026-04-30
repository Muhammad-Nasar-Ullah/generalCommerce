import React from 'react';
// import aboutHero from '../assets/aboutUsHero.png';

const AboutUs = () => {
    return (
        <section className="mt-30 min-h-screen">
            {/* Hero Section */}
            <div className="w-full flex flex-col md:flex-row justify-between overflow-hidden bg-linear-to-r from-gray-900 to-gray-800 items-center rounded-[50px] my-10 shadow-2xl">
                <div className="flex flex-col items-start py-10 px-10 md:px-20 gap-6 md:w-1/2">
                    <h1 className="text-5xl md:text-7xl font-bold text-start text-amber-500 leading-tight">
                        Our Story, <br /> Your Style.
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-start text-gray-300">
                        We started with a simple idea: to bring high-quality, curated products to everyone's doorstep.
                    </p>
                    <button className="bg-amber-500 text-gray-900 px-8 py-3 rounded-full font-bold text-lg hover:bg-amber-400 transition-all shadow-lg hover:shadow-amber-500/20">
                        Learn More
                    </button>
                </div>
                <div className="w-full md:w-1/2 h-full flex justify-center items-center overflow-hidden">
                    {/* <img
                        className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-700'
                        src={aboutHero}
                        alt="About Us Hero"
                    /> */}
                    <img
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        alt="Modern Office Space"
                        className="w-full h-full object-cover shadow-lg transform hover:scale-105 transition-transform duration-700 rounded-r-3xl"
                    />
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20">
                <div className="bg-white/5 backdrop-blur-lg p-10 rounded-[40px] border border-white/10 hover:border-amber-500/50 transition-colors group">
                    <h2 className="text-3xl font-bold text-amber-500 mb-4 group-hover:translate-x-2 transition-transform">Our Mission</h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        To empower individuals by providing access to premium products that enhance their lifestyle. We believe in quality, transparency, and exceptional customer service. Every product we list is carefully vetted to ensure it meets our high standards.
                    </p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg p-10 rounded-[40px] border border-white/10 hover:border-amber-500/50 transition-colors group">
                    <h2 className="text-3xl font-bold text-amber-500 mb-4 group-hover:translate-x-2 transition-transform">Our Vision</h2>
                    <p className="text-gray-400 leading-relaxed text-lg">
                        To become the world's most customer-centric online destination where people can find and discover anything they might want to buy online, while supporting sustainable and ethical manufacturing practices.
                    </p>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-20 bg-gray-950 rounded-[50px] px-10 md:px-20 mb-20">
                <h2 className="text-4xl font-bold text-center text-white mb-16">The Values That Drive Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-amber-500/20">
                            <span className="text-2xl text-amber-500">✨</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Quality First</h3>
                        <p className="text-gray-500">We never compromise on the quality of our products, ensuring you get the best value for your money.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-amber-500/20">
                            <span className="text-2xl text-amber-500">🤝</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Customer Focus</h3>
                        <p className="text-gray-500">Our customers are at the heart of everything we do. Your satisfaction is our top priority.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-amber-500/20">
                            <span className="text-2xl text-amber-500">🌍</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Sustainability</h3>
                        <p className="text-gray-500">We are committed to reducing our environmental footprint and supporting ethical suppliers.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
