import classNames from "classnames";
import React from "react";
import { useTheme } from "../hooks/useTheme";

function Button({ children, onClick, fill, outline, type, disabled, style }) {
  const { isLightTheme } = useTheme();

  return (
    <button
      type={type}
      className={classNames(
        `px-4 py-2 rounded-md font-medium ${style}`,
        {
          "bg-emerald-500 hover:bg-emerald-600 text-white ": fill,
        },
        { "text-white": fill || !isLightTheme },
        { border: outline },
        { "pointer-events-none": disabled }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
