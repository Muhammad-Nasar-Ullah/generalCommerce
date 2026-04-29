import React from 'react'
import ProductCard from '../Home/ProductCard'
import { Link } from 'react-router-dom'

const LikedProducts = ({ likeIcon, likedProducts, setLikedProducts, addedProducts, setAddedProducts }) => {
    return (
        <section className='mt-30'>
            <div className='flex justify-between items-center mb-10'>
                <h1 className='text-4xl text-red-600 font-bold'>Your Favorites</h1>
                <Link to="/" className='text-amber-600 hover:underline'>Back to Home</Link>
            </div>

            {likedProducts.length === 0 ? (
                <div className='flex flex-col items-center justify-center min-h-[300px]'>
                    <p className='text-2xl text-gray-500'>You haven't liked any products yet. </p>
                    <img src={likeIcon} alt="" />
                </div>
            ) : (
                <div className='grid grid-cols-5 gap-5 my-10'>
                    {likedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addedProducts={addedProducts}
                            setAddedProducts={setAddedProducts}
                            likedProducts={likedProducts}
                            setLikedProducts={setLikedProducts}
                        />
                    ))}
                </div>
            )}
        </section>
    )
}

export default LikedProducts
