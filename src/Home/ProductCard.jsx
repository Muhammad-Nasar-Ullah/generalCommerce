import React, { useState } from "react"
import emptyHeart from "../assets/emptyHeart.png"
import filledHeart from "../assets/filledHeart.png"

const ProductCard = ({ product, addedProducts, setAddedProducts, likedProducts, setLikedProducts }) => {
    const isLiked = likedProducts.some((p) => p.id === product.id);

    const cartItem = addedProducts.find((p) => p.id === product.id);
    const isAdded = !!cartItem;
    const discountPrice = product.price * (product.discountPercentage / 100)
    const originalPrice = (product.price - discountPrice).toFixed(2)

    const handleAddToCart = () => {

        if (!isAdded) {
            setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
        } else {
            setAddedProducts(addedProducts.filter((p) => p.id !== product.id));
        }
    }

    const handleLike = () => {
        if (isLiked) {
            setLikedProducts(likedProducts.filter((p) => p.id !== product.id));
        } else {
            setLikedProducts([...likedProducts, product]);
        }
    }



    return (
        <div className='flex flex-col justify-between items-center relative p-5 gap-5 rounded-xl border-2 border-solid border-gray-500 hover:-translate-y-2 hover:border-amber-500 transition-all cursor-pointer'>
            <div className="flex justify-center items-center">
                <img className="max-w-[250px] max-h-[250px]" src={product.images[0]} alt="product image" />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-2xl'>{product.title.slice(0, 30)}</h1>

                <h2 className='text-base text-black'>{product.description.slice(0, 80)}...</h2>
                <div className="flex justify-between items-center gap-2">
                    <p className='text-2xl text-black font-semibold'>${originalPrice}</p>
                    <div className="flex flex-col justify-center items-end">
                        <p className='text-base text-gray-500 line-through'>${product.price}</p>
                        <div className='flex justify-center text-center items-center gap-2'>
                            <p className='text-amber-600 text-sm'>({product.rating}</p>
                            <p className='text-amber-600 text-sm text-center'>⭐)</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-between gap-2 w-full">
                <button onClick={handleAddToCart} className={`flex items-center justify-center gap-3 ${isAdded ? 'bg-red-500 hover:bg-red-600' : 'bg-amber-500 hover:bg-amber-600'} text-white px-4 py-2 rounded-xl font-bold cursor-pointer transition-colors`}>
                    {isAdded ? 'Cancel' : 'Add to Cart'}
                </button>
                <button className='flex items-center justify-center cursor-pointer' onClick={handleLike}><img className='w-6 h-6 hover:w-7 hover:h-7 transition-all duration-200 cursor-pointer' src={!isLiked ? emptyHeart : filledHeart} alt="like" /></button>
            </div>

            <div className='absolute top-2 left-2 bg-gray-200 rounded-xl px-2 py-1'>
                <p className='text-sm text-black'>{product.category}</p>
            </div>
            <div className='absolute top-2 right-2 bg-gray-200 rounded-xl px-2 py-1'>
                <p className="text-amber-600 font-bold text-sm">Discount: {product.discountPercentage}%</p>
            </div>
        </div>
    )
}

export default ProductCard