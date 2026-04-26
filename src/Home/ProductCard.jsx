const ProductCard = ({ product, addedProducts, setAddedProducts }) => {

    const isAdded = addedProducts.some((p) => p.id === product.id);

    const AddToCart = () => {
        if (isAdded) {
            const newAddedProducts = addedProducts.filter((p) => p.id !== product.id);
            setAddedProducts(newAddedProducts);
        } else {
            setAddedProducts([...addedProducts, { ...product, addedId: product.id }])
        }
    }

    return (
        <div className='flex flex-col p-5 gap-5 rounded-xl border-2 border-solid border-gray-500 hover:-translate-y-2 hover:border-amber-500 transition-all cursor-pointer'>
            <div className={`w-full h-full`}>
                <img src={product.images} alt="product image" />
            </div>
            <div className='flex flex-col'>
                <h1 className='font-semibold text-2xl'>{product.title.slice(0, 30)}</h1>
                <p className='text-base text-gray-500'>{product.slug}</p>
                <h2 className='text-base text-black'>{product.description.slice(0, 80)}...</h2>
            </div>
            <div className="flex w-full h-full items-end justify-center gap-2">
                <button onClick={AddToCart} className={`flex items-center justify-center gap-3 ${isAdded ? 'bg-green-500 hover:bg-green-600' : 'bg-amber-500 hover:bg-amber-600'} text-white px-4 py-2 rounded-xl font-bold cursor-pointer transition-colors`}>{isAdded ? 'Added to Cart' : 'Add to Cart'}</button>
            </div>
        </div>
    )
}

export default ProductCard