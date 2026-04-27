import React from 'react'
import HeroSection from './HeroSection'
import ProductSection from './ProductSection'
import ProductCard from './ProductCard'

const Home = ({ products, addedProducts, setAddedProducts }) => {
    return (
        <section>
            <HeroSection />
            <ProductSection />
            <div className='grid grid-cols-5 gap-5 my-10'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} price={product.price} addedProducts={addedProducts} setAddedProducts={setAddedProducts} />
                ))}
            </div>
        </section>
    )
}

export default Home