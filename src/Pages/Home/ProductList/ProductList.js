import React, { useState } from 'react';

import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import useFetch from '../../../Hooks/useFetch';
import ProductCard from '../../../components/ProductCard';
import DynamicProductModal from '../../../components/DynamicProductModal/DynamicProductModal';

const ProductList = () => {

const {data:products, loading} = useFetch('https://ecommerce-dashboard-server.vercel.app/products')


const [modalProduct, setModalProduct] = useState(null)


if(loading){
    return <LoadingSpinner />
}

    return (
        <div className='mt-8'>

 <h2 className='text-center text-xl md:text-2xl lg:text-3xl mt-4 mb-8'>Total Products {products?.length}</h2>
            
<div className='mx-auto grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6'>
    {
        products?.map(product => <ProductCard key={product._id} product = {product} setModalProduct = {setModalProduct} />)
    }
    </div>       


    {
  modalProduct && <DynamicProductModal product = {modalProduct} setModalProduct = {setModalProduct} />
}
        </div>
    );
};

export default ProductList;