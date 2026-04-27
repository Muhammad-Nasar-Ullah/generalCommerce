import React from 'react'


const Cart = ({ cartIcon, addedProducts, setAddedProducts, showCart, setShowCart }) => {

    const handleCancel = (id) => {
        setAddedProducts(addedProducts.filter(product => product.id !== id))
    }

    return (
        <div>
            <img onClick={() => setShowCart(!showCart)} className='relative w-5 h-5' src={cartIcon} alt="cart" />

            {addedProducts.length > 0 && (
                <span className="absolute top-3 right-2 w-5 h-5 flex items-center justify-center text-xs bg-red-600 text-white rounded-full px-1.5 -translate-y-1/2 translate-x-1/2">
                    {addedProducts.length}
                </span>
            )}

            <div className={showCart ? `absolute top-0 right-0 flex justify-center items-center z-100 w-[600px] h-screen bg-red-500 ${showCart ? 'block' : 'hidden'}` : 'grid grid-cols-5 gap-5 w-[90%] mx-auto mt-10 hidden'}>

                {
                    addedProducts.length === 0 ? (
                        <h1>No products added to cart</h1>
                    ) : (
                        addedProducts.map((product, index) => (

                            <div key={product.id || index} className='flex flex-col justify-between p-5 gap-5 rounded-xl border-2 border-solid border-gray-500 hover:-translate-y-2 hover:border-amber-500 transition-all cursor-pointer'>
                                <div className="flex justify-center items-center">
                                    <img className="max-w-[150px] max-h-[150px]" src={product.image} alt="product image" />
                                </div>
                                <div className='flex flex-col'>
                                    <h1 className='font-semibold text-2xl'>{product.title.slice(0, 30)}</h1>
                                    <div className="flex my-3 justify-between w-full">
                                        <p className='text-base text-gray-500'>{product.category}</p>
                                        <p className='text-base text-gray-500 hover:underline transition-all cursor-pointer'>${product.price}</p>
                                    </div>
                                    <h2 className='text-base text-black'>{product.description.slice(0, 80)}...</h2>
                                </div>
                                <div className="flex justify-center gap-2">
                                    <button onClick={() => handleCancel(product.id)} className='bg-amber-500 text-white px-4 py-2 rounded-xl font-bold cursor-pointer hover:bg-amber-600 transition-colors'>Cancel</button>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default Cart