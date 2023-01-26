import React, { useState } from "react";
import CustomerDetailsModal from "../../../components/CustomerDetailsModal/CustomerDetailsModal";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import useFetch from "../../../Hooks/useFetch";

const AllCustomers = () => {
  // Loading all customer list from the database

  const { data: allCustomers, loading } = useFetch(
    "https://ecommerce-dashboard-server.vercel.app/customers"
  );

  // state to manage the opening and closing of modal
  const [customerInModal, setCustomerInModal] = useState(null);

  return (
    <div>
      {loading && <LoadingSpinner />}

      <div className="overflow-x-auto mt-8">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allCustomers?.map((customer, i) => {
              return (
                <tr key={customer._id}>
                  <th>{i + 1}</th>
                  <td>{customer?.name}</td>
                  <td>{customer?.email}</td>
                  <td>
                    <label
                      onClick={() => setCustomerInModal(customer)}
                      htmlFor="customerDetailsModal"
                      className="btn btn-sm btn-info"
                    >
                      Details
                    </label>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {customerInModal && <CustomerDetailsModal customer={customerInModal} />}
    </div>
  );
};

export default AllCustomers;
