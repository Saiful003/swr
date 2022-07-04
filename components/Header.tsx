import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useBlog } from "../context/BlogContext";
import useDrawer from "../hooks/useDrawer";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import NavList from "./NavList";
import OverLay from "./OverLay";

function Header() {
  const { isOpenModal, closeModal, openModal } = useModal();
  const { openDrawer } = useDrawer();

  return (
    <header className=" border-b">
      <div className=" w-full px-3 max-w-6xl mx-auto">
        <div className="h-[60px] flex items-center justify-between">
          <div>
            <h2 className=" text-4xl font-medium text-purple-700">Pro-File</h2>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-5">
              <NavList linkName="Home" />
              <NavList linkName="Blog" />
              <NavList linkName="Portfolio" />
              <NavList linkName="Login" onClick={openModal} />
            </ul>
          </div>
          <div className="md:hidden">
            <AiOutlineMenu
              onClick={openDrawer}
              className="cursor-pointer text-gray-900"
              size={25}
            />
          </div>
        </div>
      </div>
      {isOpenModal && <Modal closeModal={closeModal} active={isOpenModal} />}
      <OverLay active={isOpenModal} />
    </header>
  );
}

export default Header;
