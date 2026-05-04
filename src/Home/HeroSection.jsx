import React from 'react'
import heroSectionImage from "../assets/heroSectionImage.png"

const HeroSection = () => {
    return (
        <div className="w-full flex justify-center bg-gray-800 items-center rounded-[50px] my-10 flex-col md:flex-col lg:flex-row">
            <div className="flex flex-col items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start py-10 px-10 md:px-20 lg:px-20 gap-5">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center md:text-start text-amber-500">Find the best products for you</h1>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center md:text-start text-white">Discover a wide range of products at affordable prices.</p>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <img className='w-[1200px] h-auto' src={heroSectionImage} alt="Products" />
            </div>
        </div>
    )
}

export default HeroSection