import { AiOutlineMenu } from "react-icons/ai";
import useDrawer from "../hooks/useDrawer";
import useModal from "../hooks/useModal";
import Button from "./Button";
import Modal from "./Modal";
import OverLay from "./OverLay";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import Container from "./Container";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import Divider from "./Divider";

function Header() {
  const { isOpenModal, closeModal, openModal } = useModal();

  return (
    <>
      <header className="border-b sticky top-0 bg-white">
        <Container>
          <div className="h-[60px] flex items-center justify-between ">
            <div>
              <Link href="/">
                <a>
                  <h2 className="text-3xl font-medium text-red-500">MyTok</h2>
                </a>
              </Link>
            </div>
            <div className=" hidden md:flex items-center">
              <form className=" w-[360px] flex items-center py-2 pl-4 rounded-tl-full rounded-bl-full  bg-gray-100">
                <input
                  type="text"
                  className="w-full outline-none bg-transparent"
                  placeholder="Search..."
                />
                <Divider verticalBar />
                <button type="submit" hidden />
              </form>
              <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer py-[10px] px-4  rounded-tr-full rounded-br-full">
                <BsSearch size={20} className="text-gray-400" />
              </div>
            </div>
            <div className="shrink-0">
              <ul className="flex items-center gap-5 ">
                <Button icon={<AiOutlinePlus />} onClick={openModal}>
                  Upload
                </Button>
                <Button fill onClick={openModal}>
                  Log in
                </Button>
                <FiMoreVertical size={20} cursor="pointer" />
              </ul>
            </div>
          </div>
        </Container>
      </header>
      {isOpenModal && <Modal closeModal={closeModal} active={isOpenModal} />}
      <OverLay active={isOpenModal} />
    </>
  );
}

export default Header;
