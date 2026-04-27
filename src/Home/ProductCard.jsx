import { useState, useEffect } from "react"

const ProductCard = ({ product, addedProducts, setAddedProducts }) => {

    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        if (isAdded) {
            setCount(count - 1)
            if (count === 1) {
                setIsAdded(false);
                setAddedProducts(addedProducts.filter((p) => p.id !== product.id));
            }
        } else {
            setIsAdded(true);
            setAddedProducts([...addedProducts, { ...product, addedId: product.id }]);
            setCount(count + 1)
        }
    }

    const handleCount = (sign) => {
        if (sign === "-") {
            setCount(count - 1)
            if (count === 1) {
                setIsAdded(false);
                setAddedProducts(addedProducts.filter((p) => p.id !== product.id));
            }
        } else {
            setCount(count + 1)
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
                <div className="flex items-center my-5 gap-2">
                    {isAdded ?
                        <div className="flex items-center gap-2">
                            <button onClick={() => handleCount("-")} className={`bg-amber-400 hover:bg-amber-500 flex items-center justify-center gap-3 text-white px-4 py-2 rounded-xl font-bold cursor-pointer transition-colors`}>-</button>
                            <span className="text-base font-bold">{count}</span>
                            <button onClick={() => handleCount("+")} className={`flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-xl font-bold cursor-pointer transition-colors`}>+</button>
                            <button onClick={handleAddToCart} className={`flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-bold cursor-pointer transition-colors`}>Added to Cart</button>
                        </div> :
                        <button onClick={handleAddToCart} className={`flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-xl font-bold cursor-pointer transition-colors`}>Add to Cart</button>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard