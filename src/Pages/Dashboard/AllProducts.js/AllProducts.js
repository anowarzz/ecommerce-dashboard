import React, { useState } from 'react';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';
import ProductDetailsModal from '../../../components/ProductDetailsModal/ProductDetailsModal';
import useFetch from '../../../Hooks/useFetch';
import ProductList from '../../Home/ProductList/ProductList';

const AllProducts = () => {


const {data:allProducts, loading} = useFetch('https://ecommerce-dashboard-server.vercel.app/products')


const [productInModal, setProductInModal] = useState(null) 

    return (
        <div className='mt-8'>
          

          <div className="overflow-x-auto w-full">

          {loading && <LoadingSpinner />
    
}
  <table className="table w-full">

    <thead>



      <tr>
        <th></th>
    <th> Photo </th>
        <th>Name</th>
        <th>Price</th>
        <th>Details</th>

      </tr>
    </thead>
    <tbody>
    {
    allProducts?.map((product, i) => {
return <tr key={product._id}>
    <td>{i+1}</td>
 <td>
     <div className="flex items-center space-x-3">
       <div className="avatar">
         <div className="mask mask-squircle w-12 h-12">
           <img src={product?.image} alt="product"/>
         </div>
       </div>
    
     </div>
   </td>
   <td className='max-w-16'>
   <p className=''>{product?.title.slice(0, 40) + "..."}</p>
   </td>
   <td>
  <p className='font-bold'>${product?.price}</p>
   </td>
   <th>
     <button  onClick={() => setProductInModal(product)} className="btn btn-info btn-sm">Details</button>
   </th>
 </tr>

    })
}
    </tbody>
  </table>
</div>

{
   productInModal && <ProductDetailsModal product = {productInModal} /> 
}



        </div>
    );
};

export default AllProducts;