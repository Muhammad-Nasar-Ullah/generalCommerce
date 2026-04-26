import React from 'react'

const Cart = ({ addedProducts, setAddedProducts }) => {

    const handleCancel = (id) => {
        setAddedProducts(addedProducts.filter(product => product.id !== id))
    }

    return (
        <div className={addedProducts.length === 0 ? 'flex justify-center items-center h-[50vh]' : 'grid grid-cols-5 gap-5 w-[90%] mx-auto mt-10'}>
            {addedProducts.length === 0 ? (
                <h1>No products added to cart</h1>
            ) : (
                addedProducts.map((product, index) => (
                    <div key={product.id || index} className='flex flex-col p-5 gap-5 rounded-xl border-2 border-solid border-gray-500 hover:-translate-y-2 hover:border-amber-500 transition-all cursor-pointer'>
                        <div className={`w-full h-auto ${product.images}`}>
                            <img src={product.images} alt="product image" />
                        </div>
                        <div className='flex flex-col'>
                            <h1 className='font-semibold text-2xl'>{product.title.slice(0, 30)}</h1>
                            <p className='text-base text-gray-500'>{product.slug}</p>
                            <h2 className='text-base text-black'>{product.description.slice(0, 80)}...</h2>
                        </div>
                        <div className="flex w-full h-full items-end justify-center gap-2">
                            <button onClick={() => handleCancel(product.id)} className='bg-amber-500 text-white px-4 py-2 rounded-xl font-bold cursor-pointer hover:bg-amber-600 transition-colors'>Cancel</button>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Cart