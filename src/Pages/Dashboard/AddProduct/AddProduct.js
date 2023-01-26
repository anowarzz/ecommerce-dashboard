import React, { useState } from 'react';
import { ScaleLoader } from 'react-spinners';

const AddProduct = () => {


// state to track the loading phase while api calls
const [loading , setLoading] = useState(false)


// Adding a product to the database
const handleAddProduct = (event) => {


}



    return (
        <div className='mt-8'>
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">


{
    loading && <ScaleLoader className='text-center' color='blue'/>
}

    <h2 className="text-lg text-center font-semibold text-gray-700 capitalize dark:text-white mb-8">Add New Product</h2>

    <form onSubmit={handleAddProduct}>
        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="title">Product Title</label>
                <input id="title" name='title' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" 
     required/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="description">Product Description</label>
                <input id="description" name='description' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" autoComplete='off' required   />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="price">Product Price</label>
                <input id="price" type="number" name='price' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="address">Product Rating (Out of 5)</label>
                <input id="rating" name='rating' type="number" min="1" max="5"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="zip">Product Image</label>
                <input id="image" name='image' type="file" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required/>
            </div>
        </div>

        <div className="flex justify-center mt-10">
           <button type='submit'  className='btn btn-success w-4/6'>Add Customer</button>
        </div>
    </form>
</section>
        </div>
    );
};

export default AddProduct;