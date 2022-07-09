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

function Header() {
  const { isOpenModal, closeModal, openModal } = useModal();
  const { openDrawer } = useDrawer();

  return (
    <>
      <header className="border-b sticky top-0 bg-white">
        <Container>
          <div className="h-[60px] flex items-center justify-between">
            <div>
              <Link href="/">
                <a>
                  <h2 className=" text-3xl font-medium text-red-500">MyTok</h2>
                </a>
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center gap-5">
                <Button icon={<AiOutlinePlus />} onClick={openModal}>
                  Upload
                </Button>
                <Button fill onClick={openModal}>
                  Log in
                </Button>
                <FiMoreVertical size={20} cursor="pointer" />
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
        </Container>
      </header>
      {isOpenModal && <Modal closeModal={closeModal} active={isOpenModal} />}
      <OverLay active={isOpenModal} />
    </>
  );
}

export default Header;
