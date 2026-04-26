import React from 'react'
import HeroSection from './HeroSection'
import ProductSection from './ProductSection'
import ProductCard from './ProductCard'

const Home = ({ products, addedProducts, setAddedProducts }) => {
    return (
        <section>
            <HeroSection />
            {/* <ProductSection /> */}
            <div className='grid grid-cols-5 gap-5 mt-10'>
                {products.map((product) => (
                    <ProductCard product={product} addedProducts={addedProducts} setAddedProducts={setAddedProducts} />
                ))}
            </div>
        </section>
    )
}

export default Home