import React from "react";

const DynamicProductModal = ({ product, setModalProduct }) => {

    
  return (
    <div className="relative">
      <input
        type="checkbox"
        id="productDetailsModal"
        className="modal-toggle"
      />

      <div className="modal modal-bottom sm:modal-middle border">
        <div className="modal-box">
          <img src={product?.image} alt="" className="h-48 mx-auto" />

          <h3 className="font-bold text-lg mt-2">{product?.title}</h3>
          <p className="py-4">{product?.description}</p>

          <div>
            <div className="badge badge-warning text-lg mr-2">
              ${product?.price}
            </div>
            <div className="badge badge-outline">⭐{product?.rating?.rate}</div>
          </div>

          <div className="modal-action justify-center">
            <label
              htmlFor="productDetailsModal"
              className="btn btn-warning btn-md w-4/6"
            >
              Back
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicProductModal;
