import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-12 h-12 border-4 border-light-green border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
