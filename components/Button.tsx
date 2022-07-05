import React from "react";
import classNames from "classnames";

interface IProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  hiddenWhenSmall?: boolean;
  fill?: boolean;
  outlined?: boolean;
  loginLg?: boolean;
}

function Button({
  children,
  onClick,
  hiddenWhenSmall,
  icon,
  fill,
  outlined,
  loginLg,
}: IProps) {
  if (icon) {
    return (
      <a
        onClick={onClick}
        href="#"
        className={`border font-bold text-md text-gray-700 flex items-center justify-center gap-2 py-2 px-3 hover:bg-neutral-100 rounded-sm`}
      >
        <div>{icon}</div>
        {children}
      </a>
    );
  }
  return (
    <a
      onClick={onClick}
      href="#"
      className={classNames(
        {
          "border border-red-500 font-bold hover:bg-red-100 rounded-md text-red-500 py-2 px-6":
            outlined,
        },
        {
          "border text-center text-lg font-bold py-3 text-red-500 hover:bg-red-100 rounded-sm border-red-500 lg:block":
            outlined && loginLg,
        },
        {
          " hidden": hiddenWhenSmall,
        },
        {
          "bg-red-500 py-2 px-6 text-white hover:bg-red-600 font-bold rounded-md":
            fill,
        }
      )}
    >
      {children}
    </a>
  );
}

export default Button;
