import React from 'react';

const DynamicModal = ({product}) => {


    return (
        <div>
            {/* The button to open modal */}
{/* <label htmlFor="dynamicModal" className="btn">open modal</label> */}



{/* Put this part before </body> tag */}
<input type="checkbox" id="dynamicModal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box ">
<img src={product?.image} alt="" className='h-48 mx-auto' />

    <h3 className="font-bold text-lg mt-2">{product?.title}</h3>
    <p className="py-4">{product?.description}</p>

    <div>
      <div className="badge badge-warning text-lg mr-2">${product?.price}</div> 
      <div className="badge badge-outline">⭐{product?.rating?.rate}</div>
      </div>
    <div className="modal-action flex justify-between">

      

      <button className='btn btn-info w-4/5 hover:btn-secondary'>Add To Cart</button>
      <label htmlFor="dynamicModal" className="btn">Back</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default DynamicModal;