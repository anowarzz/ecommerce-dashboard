import axios from "axios";
import moment from "moment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { toast } from "react-toastify";

const AddProduct = () => {
  // state to track the loading phase while api calls
  const [loading, setLoading] = useState(false);

  // image  hosting api key for imgBB site
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  // State to store the image of input file
  const [inputImage, setInputImage] = useState(null);

  const navigate = useNavigate();

  // getting product image from input field
  const handleProductImage = (e) => {
    const image = e.target.files[0];
    setInputImage(image);
  };

  // Adding a product to the database
  const handleAddProduct = (event) => {
    event.preventDefault();

    setLoading(true);

    // getting all the form value
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const formData = new FormData();
    formData.append("image", inputImage);
    const addedOn = moment().format("MMMM Do YYYY, h:mm:ss a");

    console.log(title, description, price, rating);

    // posting image to imgbb using api key
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    if (inputImage) {
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          console.log(imgData);

          if (imgData.success) {
            const imageLink = imgData?.data?.url;
            console.log(imageLink);

            const product = {
              title,
              description,
              image: imageLink,
              price,
              rating,
              addedOn,
            };

            // SENDING post request to the server to add a product to the database
            axios
              .post("https://ecommerce-dashboard-server.vercel.app/products", {
                product,
              })
              .then((response) => {
                console.log(response);
                if (response?.data?.acknowledged) {
                  toast.success("Product Added Successfully", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
                  form.reset();
                  navigate("/dashboard/products");
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
        });
    }
  };

  return (
    <div className="mt-8">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        {loading && <ScaleLoader className="text-center" color="blue" />}

        <h2 className="text-lg text-center font-semibold text-gray-700 capitalize dark:text-white mb-8">
          Add New Product
        </h2>

        <form onSubmit={handleAddProduct}>
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="title"
              >
                Product Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="description"
              >
                Product Description
              </label>
              <input
                id="description"
                name="description"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                autoComplete="off"
                required
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="price"
              >
                Product Price
              </label>
              <input
                id="price"
                type="number"
                name="price"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="address"
              >
                Product Rating (Out of 5)
              </label>
              <input
                id="rating"
                step="any"
                name="rating"
                type="number"
                min="1"
                max="5"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="zip">
                Product Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/webp"
                onChange={handleProductImage}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button type="submit" className="btn btn-success w-4/6">
              Add Product
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProduct;
