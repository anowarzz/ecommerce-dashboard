import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext, useDebugValue, useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { AuthContext } from '../../contexts/AuthProvider';
import useFetch from '../../Hooks/useFetch';

const Cart = () => {

const {user} = useContext(AuthContext);

const [products, setProduct] = useState([])



// const url = 'https://ecommerce-dashboard-server.vercel.app/cart}'
// const url = `https://ecommerce-dashboard-server.vercel.app/myCart?email=${user?.email}`

const {data:cartProducts, loading} = useFetch(`https://ecommerce-dashboard-server.vercel.app/myCart?email=${user?.email}`)

console.log(cartProducts);


// const {
//     data: allProducts = [],
//     isLoading,
//     refetch,
//   } = useQuery({
//     queryKey: ["cart"],
//     queryFn: async () => {
//       try {
//         const res = await fetch(url);
//         const data = await res.json();
//         return data;
//       } 
//       catch (error) {}
//     },
//   });

// useEffect( () => {

//     axios.get(url)
//     .then(response => {
//         setProduct(response.data)
//     })
// }, [])


if(loading){
    <LoadingSpinner />
}


    return (
        <div>
{
    loading && <LoadingSpinner />
}
           
            {/* <h3>This is the cart view of {allProducts?.length} Product</h3> */}
            <h3>This is the cart view of {cartProducts?.length} Product</h3>
        </div>
    );
};

export default Cart;