import React, { useEffect } from "react";
import OrderForm from "../components/form/OrderForm";

const OrderFormPage = () => {
  // Scroll to top of page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="bg-gray-blue min-h-screen flex justify-center items-center">
        <OrderForm />
      </div>
    </div>
  );
};

export default OrderFormPage;
