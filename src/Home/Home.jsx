import React from 'react'
import HeroSection from './HeroSection'
import ProductSection from './ProductSection'
import ProductCard from './ProductCard'

const Home = ({ products, setProducts, addedProducts, setAddedProducts, likedProducts, setLikedProducts, search, category, setCategory }) => {
    return (
        <section className='mt-30'>
            <HeroSection />
            <ProductSection products={products} setProducts={setProducts} setAddedProducts={setAddedProducts} category={category} setCategory={setCategory} />
            <div className='grid grid-cols-5 gap-5 my-10'>
                {products.filter((product) => {
                    if (category === 'All Categories') {
                        return product.title.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()) || product.price.toString().includes(search)
                    } else {
                        return product.category.toLowerCase() === category.toLowerCase() && (product.title.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase()) || product.price.toString().includes(search))
                    }
                }).map((product) => (
                    <ProductCard key={product.id} product={product} addedProducts={addedProducts} setAddedProducts={setAddedProducts} likedProducts={likedProducts} setLikedProducts={setLikedProducts} />
                ))}
            </div>
        </section>
    )
}

export default Home