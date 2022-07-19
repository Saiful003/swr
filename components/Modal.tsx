import classNames from "classnames";
import useModal from "../hooks/useModal";
import React from "react";

interface IProps {
  active: boolean;
  children: React.ReactNode;
}

function Modal({ active, children }: IProps) {
  return (
    <div
      className={classNames(
        "max-w-[490px] w-[90%] h-[555px] flex flex-col rounded-lg z-50 fixed p-3 bg-white top-1/2 left-1/2 transition-transform translate-x-[-50%] translate-y-[-50%] scale-0 shadow-md",
        { "scale-100": active }
      )}
    >
      {children}
    </div>
  );
}

export default Modal;
