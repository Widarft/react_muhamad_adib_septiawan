import React from "react";
import Header from "../layout/Header";
import ProductForm from "../layout/ProductForm";

const CreateProduct = () => {
  return (
    <>
      <Header />
      <main className="main font-roboto container mx-auto">
        <div className="max-w-2xl mx-auto bg-white pt-12 rounded-lg mt-12">
          <div className="flex justify-center mb-6">
            <div>
              <img
                src="./src/assets/img/bootstrap-logo.svg.png"
                alt="Bootstrap logo"
              />
            </div>
          </div>
          <h2 className="font-bold text-3xl text-center mb-6">
            Create Product
          </h2>
          <p className="text-center text-gray-p-product mb-8">
            Below is an example form built entirely with Bootstrap's form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
          <ProductForm />
        </div>
      </main>
    </>
  );
};

export default CreateProduct;
