import React from "react";
import { BsX } from "react-icons/bs";
import { useModal } from "../features/modalSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../hooks/redux-hooks/tsVersionHooks";
import Login from "./Login";
import SignIn from "./SignIn";

function AuthModal() {
  const { closeModal, switchPage } = useModal();
  const { myModal } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { isLoginPage } = myModal;
  return (
    <>
      <div className="flex justify-end">
        <div className=" rounded-full bg-gray-100 p-1">
          <BsX
            onClick={() => dispatch(closeModal())}
            size={30}
            className="cursor-pointer"
          />
        </div>
      </div>
      {isLoginPage ? <Login /> : <SignIn />}
      <div className="text-center py-3 border-t">
        <p>
          {isLoginPage ? " Don't have an account?" : "Already have an account?"}
          <a
            className=" text-red-500 font-bold cursor-pointer hover:underline"
            onClick={() => dispatch(switchPage())}
          >
            {isLoginPage ? " Sign up" : " Log in"}
          </a>
        </p>
      </div>
    </>
  );
}

export default AuthModal;
