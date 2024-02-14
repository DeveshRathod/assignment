import React from "react";

const CardPage = ({ children }) => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col w-96 bg-white p-6 rounded-md shadow-md">
        {children}
      </div>
    </div>
  );
};

export default CardPage;
