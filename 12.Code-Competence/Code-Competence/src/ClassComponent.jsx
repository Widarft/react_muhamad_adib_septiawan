import React, { useState, useEffect } from "react";

function ClassComponent() {
  const [message, setMessage] = useState("Welcome to React!");
  const [nama, setNama] = useState("Your Name");

  useEffect(() => {
    console.log("useEffect for Massage");
    const timer = setTimeout(() => {
      setMessage("Enjoy learning React!");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log("useEffect for Name");
    const timer = setTimeout(() => {
      setNama("Muhamad Adib Septiawan");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <hr />
      <h1>{message}</h1>
      <p>Hello, {nama} !</p>
    </div>
  );
}

export default ClassComponent;
