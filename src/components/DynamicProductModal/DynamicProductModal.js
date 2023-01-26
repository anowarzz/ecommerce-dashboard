import React, { useContext, useState } from "react";
import { ScaleLoader } from "react-spinners";
import swal from "sweetalert";
import { AuthContext } from "../../contexts/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const DynamicProductModal = ({ product, setModalProduct }) => {

  // Hooks and states
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [loading, setLoading] = useState(false);



  // Adding a product to cart
  const handleAddToCart = () => {
    setLoading(true);
    const cartProduct = {
      title: product?.title,
      image: product?.image,
      price: product?.price,
      rating: product?.rating?.rate,
      id: product?._id,
      email: user?.email,
    };

    // sending product info to the server
    fetch("https://ecommerce-dashboard-server.vercel.app/cartProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        if (data.acknowledged)
          swal({
            title: "Yaaa !",
            text: "Product Added to Your Cart",
            icon: "success",
            button: "Go Back",
          });

        setModalProduct(null);

        if (!data.acknowledged) {
          swal({
            title: "Opss",
            text: `${product?.title} Is Already In Your Cart`,
            icon: "warning",
            button: "Go Back",
          });

          setModalProduct(null);
        }
      });
  };

  return (
    <div className="relative">
      <input type="checkbox" id="dynamicModal" className="modal-toggle" />

      <div className="modal modal-bottom sm:modal-middle border">
        <div className="modal-box">
          {loading && (
            <div className="absolute left-[50%] top-[50%]">
              <ScaleLoader color="blue" size={100} className="text-center" />
            </div>
          )}

          <img src={product?.image} alt="" className="h-48 mx-auto" />

          <h3 className="font-bold text-lg mt-2">{product?.title}</h3>
          <p className="py-4">{product?.description}</p>

          <div>
            <div className="badge badge-warning text-lg mr-2">
              ${product?.price}
            </div>
            <div className="badge badge-outline">⭐{product?.rating?.rate}</div>
          </div>
          <div className="modal-action flex justify-between">
            {isAdmin ? (
              <button
                className="btn btn-md  btn-info w-4/5 hover:btn-secondary"
                disabled
                onClick={handleAddToCart}
              >
                Sorry admin , you can't buy
              </button>
            ) : user?.uid ? (
              <button
                className="btn btn-md  btn-info w-4/5 hover:btn-secondary"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            ) : (
              <button
                className="btn bg-gray-200  w-4/5 hover:btn-secondary font-bold"
                disabled
                onClick={handleAddToCart}
              >
                Please Login Buy Product
              </button>
            )}

            <label htmlFor="dynamicModal" className="btn">
              Back
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicProductModal;
