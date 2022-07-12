import { BsX } from "react-icons/bs";
import Login from "./Login";
import SignIn from "./SignIn";
import { useState } from "react";
import classNames from "classnames";
import useModal from "../hooks/useModal";

interface IProps {
  active: boolean;
}

function Modal({ active }: IProps) {
  const { closeModal, isLoginPage, switchPage } = useModal();
  return (
    <div
      className={classNames(
        "max-w-[490px] w-[90%] h-[555px] flex flex-col rounded-lg z-50 fixed p-3 bg-white top-1/2 left-1/2 transition-transform translate-x-[-50%] translate-y-[-50%] scale-0 shadow-md",
        { "scale-100": active }
      )}
    >
      <div className="flex justify-end">
        <div className=" rounded-full bg-gray-100 p-1">
          <BsX onClick={closeModal} size={30} className="cursor-pointer" />
        </div>
      </div>
      {isLoginPage ? <Login /> : <SignIn />}
      <div className="text-center py-3 border-t">
        <p>
          {isLoginPage ? " Don't have an account?" : "Already have an account?"}
          <a
            className=" text-sky-500 font-bold cursor-pointer hover:underline"
            onClick={switchPage}
          >
            {isLoginPage ? " Sign up" : " Log in"}
          </a>
        </p>
      </div>
    </div>
  );
}

export default Modal;
