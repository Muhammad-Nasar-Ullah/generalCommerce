import React from 'react'
import heroSectionImage from "../assets/heroSectionImage.png"

const HeroSection = () => {
    return (
        <div className="w-full flex justify-center overflow-hidden bg-gray-800 items-center rounded-[50px] my-10">
            <div className="flex flex-col items-start py-10 px-20 gap-5">
                <h1 className="text-6xl font-bold text-start text-amber-500">Find the best products for you</h1>
                <p className="text-2xl font-semibold text-start text-white">Discover a wide range of products at affordable prices.</p>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <img className='w-[1200px] h-auto' src={heroSectionImage} alt="Products" />
            </div>
        </div>
    )
}

export default HeroSection