import React from "react";

const CustomerDetailsModal = ({ customer }) => {

  //destructuring customer details
  const { name, email, phone, address, addedOn } = customer;





  return (
    <div>
      <input
        type="checkbox"
        id="customerDetailsModal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center mb-4 ">
            Customer Details
          </h3>

          <ul>
            <li className="text-blue-400">
              {" "}
              Name: <span className="pl-4 text-yellow-500">{name} </span>{" "}
            </li>
            <li className="text-blue-400">
              {" "}
              Email: <span className="pl-4  text-yellow-500">
                {email}{" "}
              </span>{" "}
            </li>
            <li className="text-blue-400">
              {" "}
              Phone: <span className="pl-4  text-yellow-500">{phone}</span>{" "}
            </li>
            <li className="text-blue-400">
              {" "}
              Address:{" "}
              <span className="pl-4  text-yellow-500">
                {address?.city}
              </span>{" "}
            </li>
            <li className="text-blue-400">
              {" "}
              Zip:{" "}
              <span className="pl-4  text-yellow-500">
                {address?.zipcode}
              </span>{" "}
            </li>
            <li className="text-blue-400">
              {" "}
              Added On: <span className="pl-4  text-yellow-500">
                {addedOn}
              </span>{" "}
            </li>
          </ul>

          <div className="modal-action">
            <label
              htmlFor="customerDetailsModal"
              className="btn btn-sm btn-danger"
            >
              Back
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailsModal;
