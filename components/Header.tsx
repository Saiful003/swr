import { AiOutlineMenu } from "react-icons/ai";
import useDrawer from "../hooks/useDrawer";
import useModal from "../hooks/useModal";
import Button from "./Button";
import Modal from "./Modal";
import OverLay from "./OverLay";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import DropDown from "./DropDown";
import Container from "./Container";

function Header() {
  const { isOpenModal, closeModal, openModal } = useModal();
  const { openDrawer } = useDrawer();

  return (
    <header className=" border-b">
      <Container>
        <div className="h-[60px] flex items-center justify-between">
          <div>
            <h2 className=" text-4xl font-medium text-purple-700">Pro-File</h2>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-5">
              <Button icon={<AiOutlinePlus />} onClick={openModal}>
                Upload
              </Button>
              <Button fill onClick={openModal}>
                Log in
              </Button>
              <Button icon={<FiMoreVertical size={23} />} isBorder={false}>
                <DropDown />
              </Button>
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

      {isOpenModal && <Modal closeModal={closeModal} active={isOpenModal} />}
      <OverLay active={isOpenModal} />
    </header>
  );
}

export default Header;
