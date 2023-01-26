import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, refetch, setModalProduct }) => {


  
  return (
    <div className="mx-auto h-max">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={product?.image} className="h-64" alt="Shoes" />
        </figure>
        <div className="card-body bg-gray-100">
          <h2 className="card-title h-16">{product?.title}</h2>

          <div className="card-actions justify-end pt-3">
            <div className="badge badge-warning text-lg">${product?.price}</div>
            <div className="badge badge-outline">⭐{product?.rating?.rate}</div>
          </div>

          <label
            className="btn btn-md btn-success hover:btn-secondary mt-2"
            htmlFor="dynamicModal"
            onClick={() => setModalProduct(product)}
          >
            Add to Cart
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
