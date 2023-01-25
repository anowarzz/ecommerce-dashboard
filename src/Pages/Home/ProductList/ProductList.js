import React, { useState } from 'react';

import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import useFetch from '../../../Hooks/useFetch';
import ProductCard from './ProductCard';

const ProductList = () => {

const {data:products, loading, error} = useFetch('https://fakestoreapi.com/products')



if(loading){
    return <LoadingSpinner />
}

    return (
        <div className='mt-8'>

 <h2 className='text-center text-xl md:text-2xl lg:text-3xl mt-4 mb-8'>Total Products {products?.length}</h2>
            
<div className='mx-auto grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6'>
    {
        products?.map(product => <ProductCard key={product.id} product = {product}/>)
    }
    </div>       
        </div>
    );
};

export default ProductList;