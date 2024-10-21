import React, { useState, useEffect } from "react";
import { article } from "../data/article";
import { v4 as uuidv4 } from "uuid";
import ProductForm from "../components/form/ProductForm";
import RandomNumberButton from "../components/button/RandomNumberButton";
import ArticleCreateProduct from "../components/article/ArticleCreateProduct";
import ProductTable from "../components/tabel/ProductTabel";
import DeleteModal from "../components/modal/DeleteModal";

const CreateProduct = () => {
  const [language, setLanguage] = useState("en");
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [productNameToDelete, setProductNameToDelete] = useState("");
  const [editProduct, setEditProduct] = useState(null);

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "id" : "en"));
  };

  useEffect(() => {
    alert("Welcome");
  }, []);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    }
  }, [products]);

  const handleAddProduct = (product) => {
    if (editProduct) {
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === editProduct.id ? { ...product, id: editProduct.id } : p
        )
      );
      setEditProduct(null);
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        { ...product, id: uuidv4() },
      ]);
    }
  };

  const handleDelete = (id) => {
    const productToDelete = products.find((product) => product.id === id);
    if (productToDelete) {
      setProductNameToDelete(productToDelete.name);
    }
    setProductIdToDelete(id);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== productIdToDelete)
    );
    setIsModalOpen(false);
    setProductNameToDelete("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProductNameToDelete("");
  };

  const handleEditProduct = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setEditProduct(productToEdit);
  };

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <>
      <div className="flex justify-end mt-4 mr-4">
        <button
          onClick={changeLanguage}
          className="bg-bs-blue hover:bg-blue-hover-btn text-white py-2 px-4 rounded-md"
        >
          Change Language
        </button>
      </div>
      <main className="main font-roboto container mx-auto">
        <div className="mx-auto bg-white pt-12 rounded-lg mt-12">
          <div className="max-w-2xl mx-auto">
            <div className="max-w-2xl mx-auto flex justify-center mb-6">
              <div>
                <img
                  src="/assets/img/bootstrap-logo.svg.png"
                  alt="Bootstrap logo"
                />
              </div>
            </div>
            <h2 className="font-bold text-3xl text-center mb-6">
              {article.title[language]}
            </h2>
            <ArticleCreateProduct language={language} />
            <ProductForm
              addProduct={handleAddProduct}
              editProduct={editProduct}
            />
          </div>
          <ProductTable
            products={products}
            handleDelete={handleDelete}
            handleDeleteProduct={handleDeleteProduct}
            handleEdit={handleEditProduct}
          />
          <DeleteModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onConfirm={confirmDelete}
            productName={productNameToDelete}
          />
          <div className="mt-10">
            <hr />
            <br />
            <RandomNumberButton />
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateProduct;
