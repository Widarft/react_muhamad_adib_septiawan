import React from "react";
import RegistrationForm from "../components/form/RegistrationForm";

const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-white-news flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg flex w-[80%] max-w-4xl">
        <div className="w-1/2 p-10 bg-blue-500 text-white flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Create Your Account Now</h1>
          <p className="text-base mb-6">
            Welcome everyone, your trusted platform for all your electronic
            needs! From laptops, PCs, smartphones, cameras, to printers, we
            offer a wide range of high-quality electronics.
          </p>
        </div>
        <div className="w-1/2 p-10 flex items-center justify-center">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
