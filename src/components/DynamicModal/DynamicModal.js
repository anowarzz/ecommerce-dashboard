import React from 'react';

const DynamicModal = ({product}) => {


    return (
        <div>
            {/* The button to open modal */}
{/* <label htmlFor="dynamicModal" className="btn">open modal</label> */}



{/* Put this part before </body> tag */}
<input type="checkbox" id="dynamicModal" className="modal-toggle" />
<div className="w-full modal modal-bottom sm:modal-middle">
  <div className="modal-box">
<img src={product?.image} alt="" className='h-48 mx-auto' />

    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div className="modal-action">
      <label htmlFor="dynamicModal" className="btn">Yay!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default DynamicModal;