import axios from 'axios';
import React, { useContext, useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../contexts/AuthProvider';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const ProductCart = ({product, refetch}) => {

//  loading user from context 
const {user} = useContext(AuthContext)

// State to manage open and close of modal
const [deleteProduct, setDeleteProduct] = useState(null)

const [loading, setLoading] = useState(false)

const closeModal = () => {
    setDeleteProduct(null)
}

// Deleting a product from user cart
const handleDeleteProductFromCart = (product) => {

const id = product._id ;


setLoading(true)
// SENDING post request to the server to add a product to the database
fetch(`https://ecommerce-dashboard-server.vercel.app/cartProducts/${id}`, {
    method: "DELETE"
})
.then((data) => {
  console.log(data);
  refetch();
  if (data.ok){
    refetch();
    console.log("deleted");
    swal({
        title: "Yaaa !",
        text: 'Product Deleted From Cart',
        icon: "success",
        button: "Go Back",
      });

  } 
 
})
.catch((err) => {
  console.log(err);
  setLoading(false);
})
.finally(() => {
  setLoading(false);
});


}




    return (
<div className="card  bg-gray-100 shadow-lg p-4">

<div className="flex justify-around m-0 p-0">
<figure><img src={product?.image} className="w-24 h-24 rounded-full" alt="Shoes" /></figure>
  <p className='text-blue-500 font-bold'>${product?.price}</p>
  
</div>
{
    loading && <LoadingSpinner />
}
  <div className="card-body pb-0">
    <h2 className="card-title text-base"> {product?.title}</h2>

    <div className="card-actions mb-0 justify-end">
      <label     htmlFor="confirmation-modal" className="btn btn-sm border-none   hover:bg-red-700 text-black bg-myYellow"
      onClick={() => setDeleteProduct(product)}>Delete Product</label>
   
    </div>
  </div>

  {
    deleteProduct && <ConfirmationModal
  
    title={`Ary You Sure You Want To Delete This Product??`}
    successAction={handleDeleteProductFromCart}
    modalData={deleteProduct}
    closeModal={closeModal}
    successButtonName="Delete" />
  }


</div>
    );
};

export default ProductCart;