import React, { useState } from "react"
import emptyHeart from "../assets/emptyHeart.png"
import filledHeart from "../assets/filledHeart.png"

const ProductCard = ({ product, addedProducts, setAddedProducts, likedProducts, setLikedProducts }) => {

    const [productDetail, setProductDetail] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

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

    const toggleModal = () => {
        setProductDetail(!productDetail)
    }

    const handleThumbnailClick = (index) => {
        setCurrentImage(index);
    };

    return (
        <>
            {/* Standard Product Card */}
            <div
                onClick={toggleModal}
                className='flex flex-col justify-between items-center relative p-5 gap-5 rounded-3xl border-2 border-solid border-gray-100 bg-white hover:-translate-y-2 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full'
            >
                <div className="flex justify-center items-center h-48 w-full bg-gray-50 rounded-2xl overflow-hidden p-4">
                    <img className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" src={product.images[0]} alt={product.title} />
                </div>

                <div className='flex flex-col gap-2 w-full'>
                    <div className="flex justify-between items-start gap-2">
                        <h1 className='font-bold text-lg text-gray-900 leading-tight line-clamp-1'>{product.title}</h1>
                        <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">
                            {product.category}
                        </span>
                    </div>

                    <p className='text-sm text-gray-500 line-clamp-2 min-h-[40px]'>{product.description}</p>

                    <div className="flex justify-between items-center mt-2">
                        <div>
                            <p className='text-2xl text-amber-600 font-extrabold'>${originalPrice}</p>
                            <p className='text-xs text-gray-400 line-through'>${product.price}</p>
                        </div>
                        <div className='flex items-center gap-1 bg-amber-50 rounded-lg px-2 py-1'>
                            <p className='text-amber-600 text-xs font-bold'>{product.rating} ⭐</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between gap-2 w-full mt-2">
                    <button
                        onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}
                        className={`flex-1 flex items-center justify-center gap-2 ${isAdded ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-900 hover:bg-black'} text-white px-4 py-2.5 rounded-xl font-bold cursor-pointer transition-all active:scale-95 text-sm`}
                    >
                        {isAdded ? 'Remove' : 'Add to Cart'}
                    </button>
                    <button
                        className='p-2.5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100'
                        onClick={(e) => { e.stopPropagation(); handleLike(); }}
                    >
                        <img className='w-5 h-5' src={!isLiked ? emptyHeart : filledHeart} alt="like" />
                    </button>
                </div>

                {product.discountPercentage > 0 && (
                    <div className='absolute top-4 right-4 bg-red-500 text-white font-bold text-[10px] px-2 py-1 rounded-lg shadow-lg'>
                        -{Math.round(product.discountPercentage)}%
                    </div>
                )}
            </div>

            {productDetail && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-in fade-in duration-300"
                    onClick={toggleModal}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

                    <div
                        className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[40px] shadow-2xl flex flex-col md:flex-row gap-0 overflow-hidden animate-in zoom-in duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md hover:bg-gray-100 rounded-full transition-all z-20 shadow-lg border border-gray-100 group"
                            onClick={toggleModal}
                        >
                            <span className="text-2xl text-gray-400 group-hover:text-gray-900 transition-colors">✕</span>
                        </button>


                        <div className="w-full md:w-1/2 bg-gray-50 p-8 flex flex-col gap-6 items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                            <div className="relative w-full aspect-square flex justify-center items-center bg-white rounded-3xl shadow-inner p-10 overflow-hidden">
                                <img onClick={currentImage}
                                    className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-700"
                                    src={product.images[currentImage]}
                                    alt={product.title}
                                />
                                {product.discountPercentage > 0 && (
                                    <div className="absolute top-6 left-6 bg-red-500 text-white font-black text-sm px-4 py-1.5 rounded-2xl shadow-xl transform -rotate-12">
                                        SAVE {Math.round(product.discountPercentage)}%
                                    </div>
                                )}
                            </div>


                            <div className="flex gap-3 overflow-x-auto w-full pb-2 scrollbar-hide">
                                {product.images.map((img, idx) => (
                                    <div onClick={() => handleThumbnailClick(idx)} key={idx} className="min-w-[80px] h-20 bg-white rounded-2xl p-2 border-2 border-gray-100 hover:border-amber-500 cursor-pointer transition-all">
                                        <img className="w-full h-full object-contain" src={img} alt={`detail ${idx}`} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-12 bg-white">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-4 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-black uppercase tracking-widest border border-amber-100">
                                        {product.category}
                                    </span>
                                    <span className="px-4 py-1 bg-gray-50 text-gray-500 rounded-full text-xs font-black uppercase tracking-widest border border-gray-100">
                                        {product.brand}
                                    </span>
                                </div>

                                <div>
                                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4">{product.title}</h2>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1 text-amber-500 text-2xl drop-shadow-sm">
                                            {"★".repeat(Math.round(product.rating))}
                                            <span className="text-gray-200">{"★".repeat(5 - Math.round(product.rating))}</span>
                                        </div>
                                        <span className="text-gray-400 font-bold text-lg">({product.rating} Rating)</span>
                                    </div>
                                </div>

                                <div className="flex items-baseline gap-4 py-4 border-y border-gray-50">
                                    <span className="text-5xl font-black text-amber-600 tracking-tighter">${originalPrice}</span>
                                    <span className="text-2xl text-gray-300 line-through font-bold">${product.price}</span>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em]">Description</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg font-medium italic">
                                        "{product.description}"
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-gray-50/50 p-4 rounded-3xl border border-gray-100">
                                        <p className="text-[10px] text-gray-400 uppercase font-black mb-1 tracking-widest">Availability</p>
                                        <p className={`text-lg font-black ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {product.stock > 0 ? `${product.stock} In Stock` : 'Out of Stock'}
                                        </p>
                                    </div>
                                    <div className="bg-gray-50/50 p-4 rounded-3xl border border-gray-100">
                                        <p className="text-[10px] text-gray-400 uppercase font-black mb-1 tracking-widest">Warranty</p>
                                        <p className="text-lg font-black text-gray-700">2 Years Global</p>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Actions */}
                            <div className="flex gap-4 mt-12">
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}
                                    className={`flex-[3] h-20 rounded-3xl font-black text-xl transition-all shadow-xl active:scale-95 flex items-center justify-center gap-4 ${isAdded ? 'bg-red-500 text-white hover:bg-red-600 shadow-red-200' : 'bg-amber-500 text-white hover:bg-amber-600 shadow-amber-200'}`}
                                >
                                    {isAdded ? (
                                        <><span>✕</span> Remove from Cart</>
                                    ) : (
                                        <><span>🛒</span> Add to Cart</>
                                    )}
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleLike(); }}
                                    className="flex-1 h-20 flex items-center justify-center rounded-3xl bg-gray-50 hover:bg-gray-100 transition-all active:scale-95 border border-gray-200 group"
                                >
                                    <img className="w-8 h-8 group-hover:scale-125 transition-transform" src={!isLiked ? emptyHeart : filledHeart} alt="like" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductCard