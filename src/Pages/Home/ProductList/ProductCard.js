import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className='mx-auto h-100'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
  {product?.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
      <div className="badge badge-outline">Products</div>
    </div>
    <div>
        <button className='btn btn-info'>
            Details
        </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductCard;