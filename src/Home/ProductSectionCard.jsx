import React from 'react'

const ProductsectionCard = (props) => {
    return (

        <div className='flex p-2 h-[150px] rounded-xl justify-between items-center bg-gray-200 border-2 border-solid border-black cursor-pointer'>
            <div className='flex flex-col gap-5'>
                <h1 className='font-semibold text-2xl'>{props.productName}</h1>
                <h2 className='text-base text-gray-500'>{props.productDescription}</h2>
            </div>
            <div className='h-full flex justify-center items-end'>
                {props.productLogo}
            </div>
        </div>
    )
}

export default ProductsectionCard