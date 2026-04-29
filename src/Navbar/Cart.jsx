import React from 'react'

const Cart = ({ products, cartIcon, addedProducts, setAddedProducts, showCart, setShowCart }) => {

    const handleCancel = (id) => {
        setAddedProducts(addedProducts.filter(product => product.id !== id))
    }


    const totalPrice = addedProducts.reduce((sum, p) => sum + p.price * (p.quantity || 1), 0).toFixed(2)

    const handleQuantityChange = (products, change) => {
        const newCount = products.quantity + change;
        if (newCount <= 0) {
            setAddedProducts(addedProducts.filter((p) => p.id !== products.id));
        } else {
            setAddedProducts(addedProducts.map((p) =>
                p.id === products.id ? { ...p, quantity: newCount } : p
            ));
        }
    }


    return (
        <>
            {/* Cart Icon Button */}
            <div onClick={() => setShowCart(true)} className="relative">
                <img
                    className='w-5 h-5 cursor-pointer'
                    src={cartIcon}
                    alt="cart"
                />
                {addedProducts.length > 0 && (
                    <span className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center text-xs bg-red-600 text-white rounded-full font-bold">
                        {addedProducts.length}
                    </span>
                )}
            </div>

            {/* Dark Overlay */}
            <div
                onClick={() => setShowCart(false)}
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${showCart ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />

            {/* Slide-in Drawer */}
            <div className={`fixed top-0 right-0 h-full w-[600px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${showCart ? 'translate-x-0' : 'translate-x-full'}`}>

                {/* Drawer Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800">🛒 Your Cart ({addedProducts.length})</h2>
                    <button
                        onClick={() => setShowCart(false)}
                        className="text-gray-500 hover:text-gray-800 text-2xl font-bold leading-none cursor-pointer transition-colors"
                    >
                        ✕
                    </button>
                </div>

                {/* Drawer Body */}
                <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
                    {addedProducts.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-3">
                            <span className="text-5xl">🛍️</span>
                            <p className="text-lg font-medium">Your cart is empty</p>
                        </div>
                    ) : (
                        addedProducts.map((product, index) => (
                            <div key={product.id || index} className="flex items-center gap-4 p-3 rounded-xl border border-gray-200 hover:border-amber-400 transition-colors">
                                <img className="w-16 h-16 object-contain rounded-lg bg-gray-50 p-1" src={product.images[0]} alt={product.title} />
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-sm text-gray-800 truncate">{product.title.slice(0, 35)}</h3>
                                    <p className="text-xs text-gray-400 mt-0.5">{product.category}</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-amber-600 font-bold text-sm">${product.price}</span>
                                        <div className='flex justify-center items-center gap-4'>
                                            <div className="flex justify-between w-20 items-center px-2 py-1 border-1 border-solid border-gray-300 rounded-xl gap-3">
                                                <button onClick={() => handleQuantityChange(product, -1)} className="flex justify-center items-center text-black cursor-pointer"><p className='text-lg font-semibold'>-</p></button>
                                                <p className="text-black font-bold">{product.quantity}</p>
                                                <button onClick={() => handleQuantityChange(product, +1)} className="flex justify-center items-center text-black cursor-pointer"><p className='text-lg font-semibold'>+</p></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleCancel(product.id)}
                                    className="text-gray-400 hover:text-red-500 transition-colors text-lg font-bold cursor-pointer flex-shrink-0"
                                >
                                    ✕
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Drawer Footer */}
                {addedProducts.length > 0 && (
                    <div className="px-6 py-5 border-t border-gray-200 flex flex-col gap-3">
                        <div className="flex justify-between text-lg font-bold text-gray-800">
                            <span>Total</span>
                            <span className="text-amber-600">${totalPrice}</span>
                        </div>
                        <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition-colors cursor-pointer">
                            Checkout
                        </button>
                        <button
                            onClick={() => setAddedProducts([])}
                            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 rounded-xl transition-colors cursor-pointer text-sm"
                        >
                            Clear Cart
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Cart