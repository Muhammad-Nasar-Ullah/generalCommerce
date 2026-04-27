import React from "react"

const ProductCard = ({ product, addedProducts, setAddedProducts }) => {

    const cartItem = addedProducts.find((p) => p.id === product.id);
    const isAdded = !!cartItem;
    const count = cartItem?.quantity || 0;

    const handleAddToCart = () => {
        if (!isAdded) {
            setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
        } else {
            setAddedProducts(addedProducts.filter((p) => p.id !== product.id));
        }
    }

    const handleQuantityChange = (change) => {
        const newCount = count + change;
        if (newCount <= 0) {
            setAddedProducts(addedProducts.filter((p) => p.id !== product.id));
        } else {
            setAddedProducts(addedProducts.map((p) =>
                p.id === product.id ? { ...p, quantity: newCount } : p
            ));
        }
    }

    return (
        <div className='flex flex-col justify-between items-center p-5 gap-5 rounded-xl border-2 border-solid border-gray-500 hover:-translate-y-2 hover:border-amber-500 transition-all cursor-pointer'>
            <div className="flex justify-center items-center">
                <img className="max-w-[250px] max-h-[250px]" src={product.image} alt="product image" />
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
                {isAdded && (
                    <div className="flex gap-2 items-center">
                        <button onClick={() => handleQuantityChange(-1)} className="bg-amber-500 text-white px-3 py-1 rounded-xl font-bold cursor-pointer transition-colors">-</button>
                        <span className="bg-white text-black border-2 border-solid border-gray-500 px-3 py-1 rounded-xl font-bold">{count}</span>
                        <button onClick={() => handleQuantityChange(+1)} className="bg-amber-500 text-white px-3 py-1 rounded-xl font-bold cursor-pointer transition-colors">+</button>
                    </div>
                )}
                <button onClick={handleAddToCart} className={`flex items-center justify-center gap-3 ${isAdded ? 'bg-green-500 hover:bg-green-600' : 'bg-amber-500 hover:bg-amber-600'} text-white px-4 py-2 rounded-xl font-bold cursor-pointer transition-colors`}>
                    {isAdded ? 'Added to Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    )
}

export default ProductCard