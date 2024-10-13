import React, { useState } from "react";
import { article } from "../data/article";
import Header from "../components/Header";
import ProductForm from "../components/ProductForm";
import RandomNumberButton from "../components/button/RandomNumberButton";
import ArticleCreateProduct from "../components/article/ArticleCreateProduct";

const CreateProduct = () => {
  const [language, setLanguage] = useState("en");

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "id" : "en"));
  };

  return (
    <>
      <Header />
      <div className="flex justify-end mt-4 mr-4">
        <button
          onClick={changeLanguage}
          className="bg-bs-blue hover:bg-blue-hover-btn text-white py-2 px-4 rounded-md"
        >
          Change Language
        </button>
      </div>
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
            {article.title[language]}
          </h2>
          <ArticleCreateProduct language={language} />
          <ProductForm />
          <RandomNumberButton />
        </div>
      </main>
    </>
  );
};

export default CreateProduct;
