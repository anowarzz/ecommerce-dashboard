import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from '../../assets/404Page.jpg'

const ErrorPage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <section className="flex items-center h-screen  text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <img src={errorImg} className="w-72" alt="" />
        <div className="max-w-md text-center mt-4">
          <h2 className="mb-2 font-extrabold text-4xl">
            <span className="sr-only">Error</span> {error.status}
          </h2>
          <h2 className="mb-8 font-extrabold text-4xl">{error.statusText}</h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            Opss ! An Error Occured .
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-blue-900 text-white hover:bg-blue-500"
          >
            Go Back To Home Page
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
