import classNames from "classnames";
import React from "react";

function Button({ children, onClick, fill, outline, type }) {
  return (
    <button
      type={type}
      className={classNames(
        "px-4 py-2 rounded-md font-medium",
        {
          "bg-emerald-500 hover:bg-emerald-600 text-white ": fill,
        },
        { border: outline }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
