import React from "react";

const RandomNumberButton = () => {
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Random Number:", randomNumber);
  };

  return (
    <div className="flex justify-around">
      <button
        onClick={handleClick}
        className="w-auto flex bg-orange-600 text-white py-2 px-4 mb-20 rounded-md hover:bg-orange-400"
      >
        Generate Random Number
      </button>
    </div>
  );
};

export default RandomNumberButton;
