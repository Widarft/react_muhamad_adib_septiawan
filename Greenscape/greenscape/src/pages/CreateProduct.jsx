import React, { useState, useEffect } from "react";
import { article } from "../data/article";
import ProductForm from "../components/form/ProductForm";
import ArticleCreateProduct from "../components/article/ArticleCreateProduct";
import ProductTable from "../components/tabel/ProductTabel";
import DeleteModal from "../components/modal/DeleteModal";
import useProductStore from "../store/useProductStore";

const CreateProduct = () => {
  const products = useProductStore((state) => state.products);
  const fetchProducts = useProductStore((state) => state.fetchProducts);
  const deleteProduct = useProductStore((state) => state.deleteProduct);
  const updateProduct = useProductStore((state) => state.updateProduct);
  const [editProduct, setEditProduct] = useState(null);
  const [language, setLanguage] = useState("en");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [productNameToDelete, setProductNameToDelete] = useState("");

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "id" : "en"));
  };

  useEffect(() => {
    alert("Welcome");
    fetchProducts();
  }, [fetchProducts]);

  const handleAddProduct = async (product) => {
    try {
      if (editProduct) {
        const updatedProduct = {
          ...product,
          id: editProduct.id,
        };
        await updateProduct(updatedProduct);
        setEditProduct(null);
        alert("Product updated successfully!");
      } else {
        await useProductStore.getState().addProduct(product);
        alert("Product added successfully!");
      }
    } catch (error) {
      alert("Failed to add/update product. Please try again.");
    }
  };

  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    if (productToEdit) {
      setEditProduct(productToEdit);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDelete = (id) => {
    const productToDelete = products.find((product) => product.id === id);
    if (productToDelete) {
      setProductNameToDelete(productToDelete.productName);
    }
    setProductIdToDelete(id);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    await deleteProduct(productIdToDelete);
    setIsModalOpen(false);
    setProductNameToDelete("");
    alert("Product deleted successfully!");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProductNameToDelete("");
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
              setEditProduct={setEditProduct}
            />
          </div>
          <ProductTable
            products={products}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
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
          </div>
        </div>
      </main>
    </>
  );
};

export default CreateProduct;
