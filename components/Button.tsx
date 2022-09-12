import React from "react";

interface IProps {
  children: React.ReactNode;
  onClick: () => void;
}

function Button({ children, onClick }: IProps) {
  return (
    <button
      className="px-2 py-1 font-medium rounded-md bg-emerald-500 text-white "
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
