import React from 'react'

const ProductsectionCard = ({ categoryName, setCategory }) => {

    const categoryHandler = () => {
        setCategory(categoryName)
    }

    return (

        <button onClick={categoryHandler} className='flex cursor-pointer transition-all duration-300 ease-in-out hover:underline'>
            <h1 className='font-semibold text-xl'>{categoryName}</h1>
        </button>
    )
}

export default ProductsectionCard