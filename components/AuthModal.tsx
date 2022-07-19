import React from "react";
import { BsX } from "react-icons/bs";
import useModal from "../hooks/useModal";
import Login from "./Login";
import SignIn from "./SignIn";

function AuthModal() {
  const { isLoginPage, switchPage, closeModal } = useModal();
  return (
    <>
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
            className=" text-red-500 font-bold cursor-pointer hover:underline"
            onClick={switchPage}
          >
            {isLoginPage ? " Sign up" : " Log in"}
          </a>
        </p>
      </div>
    </>
  );
}

export default AuthModal;
