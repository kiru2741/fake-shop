import React from 'react'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'

const Products = () => {

    const products = useSelector(state => state.products)

    return (
        <div className='p-8'>
            {React.Children.toArray(products.map(product => (
                <ProductCard product={product}/>
            )))}
        </div>
    )
}

export default Products