import axios from "axios";
import moment from "moment/moment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { toast } from "react-toastify";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const AddCustomer = () => {
  // state to track the loading phase
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Function to add a customer to the database
  const handleAddCustomer = (event) => {
    event.preventDefault();

    const form = event.target;
    console.log("clicked");

    setLoading(true);

    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const zipCode = form.zip.value;
    const addedOn = moment().format("MMMM Do YYYY, h:mm:ss a");

    console.log(addedOn);

    const customer = {
      name,
      email,
      address: { city: address, zipcode: zipCode },
      phone,
      addedOn,
    };

    console.log(customer);

    // SENDING post request to the server to add a customer to the database
    axios
      .post("https://ecommerce-dashboard-server.vercel.app/customers", {
        customer,
      })
      .then((response) => {
        console.log(response);
        if (response?.data?.acknowledged) {
          setLoading(false);

          toast.success("Customer Added Successfully", {
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
          navigate("/dashboard/customers");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="mt-8">
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        {loading && <ScaleLoader className="text-center" color="blue" />}

        <h2 className="text-lg text-center font-semibold text-gray-700 capitalize dark:text-white mb-8">
          Add New Customer
        </h2>

        <form onSubmit={handleAddCustomer}>
          <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="name"
              >
                Customer Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="email"
              >
                Customer Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                autoComplete="off"
                required
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="phone"
              >
                Customer Phone
              </label>
              <input
                id="phone"
                type="phone"
                name="phone"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="address"
              >
                Customer Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="zip">
                Zip Code
              </label>
              <input
                id="zip"
                name="zip"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button type="submit" className="btn btn-success w-4/6">
              Add Customer
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddCustomer;
