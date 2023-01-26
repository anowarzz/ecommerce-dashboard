import React from "react";
import { ScaleLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 w-full z-10">
      <p className="text-lg">Loading</p>
      <ScaleLoader color="blue" size={100} className="text-center" />
    </div>
  );
};

export default LoadingSpinner;
