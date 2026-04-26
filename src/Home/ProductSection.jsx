import React from 'react'
import ProductsectionCard from './ProductsectionCard'

const ProductSection = () => {
    return (
        <section>
            <div className='flex justify-between gap-5'>

                <ProductsectionCard productName="Product Name1" productDescription="Where you can find it." productLogo="Product Logo1" />
                <ProductsectionCard productName="Product Name2" productDescription="Where you can find it." productLogo="Product Logo2" />
                <ProductsectionCard productName="Product Name3" productDescription="Where you can find it." productLogo="Product Logo3" />
                <ProductsectionCard productName="Product Name4" productDescription="Where you can find it." productLogo="Product Logo4" />
                <ProductsectionCard productName="Product Name5" productDescription="Where you can find it." productLogo="Product Logo5" />



            </div>

        </section>
    )
}

export default ProductSection