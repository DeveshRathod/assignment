import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ to, curr, onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <Link
        className="w-80 bg-black text-white p-1.5 flex items-center justify-center rounded-md"
        to={to}
        onClick={onClick}
      >
        <button>{curr}</button>
      </Link>
    </div>
  );
};

export default LinkButton;
