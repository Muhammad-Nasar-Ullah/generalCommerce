import React, { useState } from 'react'
import ProductsectionCard from './ProductsectionCard'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const ProductSection = ({ products, setAddedProducts, category, setCategory }) => {

    const [showAllCategories, setShowAllCategories] = useState(false)

    const productCategories = products.map((product) => product.category)
    const distinctCategories = [...new Set(['All Categories', ...productCategories])]

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Trigger button */}
            <button className="inline-flex w-full justify-start items-center gap-x-1.5 rounded-md px-1 py-1 text-md font-semibold text-black hover:bg-white/20">
                <div className='flex items-center gap-2'>
                    <h1 className='font-semibold text-lg'>{category}</h1>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className={`size-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute z-10">
                    <div className="p-4 flex flex-col justify-center items-center gap-3 w-56 bg-gray-200 rounded-xl">
                        {distinctCategories.map((category) => (
                            <ProductsectionCard key={category} categoryName={category} setCategory={setCategory} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductSection