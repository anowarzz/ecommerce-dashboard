import React, { useContext, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import swal from 'sweetalert';
import { AuthContext } from '../../contexts/AuthProvider';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const DynamicModal = ({product, setModalProduct}) => {

const {user} = useContext(AuthContext)

const [loading, setLoading] = useState(false)

const handleAddToCart = () => {

setLoading(true)
const cartProduct = {
  title: product?.title,
  image: product?.image,
  price: product?.price,
  rating: product?.rating?.rate,
  id: product?._id,
  email: user?.email,
}


fetch('https://ecommerce-dashboard-server.vercel.app/cartProducts', {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(cartProduct) 
})
.then(res => res.json())
.then((data) => {
console.log(data);
setLoading(false)
if(data.acknowledged)
swal("Yaa!", "Product Added to Cart!", "success");
setModalProduct(null)

if(!data.acknowledged){
  swal("Opss", `${product?.title} Is Already In Your Cart`, "warning");
  setModalProduct(null)
}

})

}


 


    return (
        <div className='border'>



<input type="checkbox" id="dynamicModal" className="modal-toggle" />

<div className="modal modal-bottom sm:modal-middle border">
  <div className="modal-box ">

{
  loading && <div className='mt-8'> 
<p className='text-center'>Loading...</p>
<ScaleLoader color="blue" size={100} className="text-center"/>

  </div>
}


<img src={product?.image} alt="" className='h-48 mx-auto' />

    <h3 className="font-bold text-lg mt-2">{product?.title}</h3>
    <p className="py-4">{product?.description}</p>

    <div>
      <div className="badge badge-warning text-lg mr-2">${product?.price}</div> 
      <div className="badge badge-outline">⭐{product?.rating?.rate}</div>
      </div>
    <div className="modal-action flex justify-between">

      
  { user?.uid ?       <button className='btn btn-md  btn-info w-4/5 hover:btn-secondary'
      onClick={handleAddToCart}
      >Add To Cart</button> :      
       <button className='btn bg-gray-200  w-4/5 hover:btn-secondary font-bold' disabled
      onClick={handleAddToCart}
      >Please Login Buy Product</button>

  }




      <label htmlFor="dynamicModal" className="btn">Back</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default DynamicModal;