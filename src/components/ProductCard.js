import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicModal from './DynamicModal/DynamicModal';

const ProductCard = ({product, refetch}) => {

console.log(product);

const [showModal, setShowModal] = useState(false)


const handleModal = () => {
setShowModal(true)

}


    return (
        <div className='mx-auto h-max'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={product?.image} className="h-64" alt="Shoes" /></figure>
  <div className="card-body bg-gray-100">
    <h2 className="card-title h-16">
  {product?.title}
    </h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="card-actions justify-end pt-3">
      <div className="badge badge-warning text-lg">${product?.price}</div> 
      <div className="badge badge-outline">⭐{product?.rating?.rate}</div>
    </div>

  <Link to={`/products/${product._id}`}>
        <label className='py-1 btn btn-sm btn-success hover:btn-secondary' htmlFor="dynamicModal" onClick={handleModal}>Add to Cart</label>
  </Link>

  </div>
</div>

<DynamicModal product = {product} />

        </div>
    );
};

export default ProductCard;