import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {


 const product = useLoaderData();   


    return (
        <div>
            <h3>{product.title}</h3>
        </div>
    );
};

export default ProductDetails;