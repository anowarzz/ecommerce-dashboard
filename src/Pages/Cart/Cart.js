import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ProductCart from "../../components/ProductCart/ProductCart";
import { AuthContext } from "../../contexts/AuthProvider";
import useFetch from "../../Hooks/useFetch";

const Cart = () => {
  const { user } = useContext(AuthContext);


//   Loading all the products available in user cart
  const {
    data: cartProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `https://ecommerce-dashboard-server.vercel.app/myCart/${user?.email}`
        );
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-center text-2xl md:text-4xl my-8">
        Total {cartProducts?.length} Products In Your Cart
      </h3>

      {isLoading && <LoadingSpinner />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cartProducts?.map((product) => (
          <ProductCart key={product?._id} product={product} refetch={refetch} />
        ))}
      </div>

      {cartProducts?.length > 0 && (
        <div className="text-center my-8">
          <button className="btn bg-blue-500 border-none w-4/6 text-center">
            Check Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
