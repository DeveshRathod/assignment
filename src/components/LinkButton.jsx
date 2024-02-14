import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ text, to, curr, warnLink, warnText, onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center pb-10">
      <Link
        className="w-80 bg-black text-white p-1.5 flex items-center justify-center rounded-md"
        to={to}
      >
        <button onClick={onClick}>{curr}</button>
      </Link>
      <p className=" p-3">
        {text}
        <Link to={warnLink}>{warnText}</Link>
      </p>
    </div>
  );
};

export default LinkButton;
