import React from "react";
import { article } from "../../data/article";

const ArticleCreateProduct = ({ language = "en" }) => {
  return (
    <div className="container mt-5">
      <p className="text-center text-gray-p-product mb-8">
        {article.description[language]}
      </p>
    </div>
  );
};

export default ArticleCreateProduct;
