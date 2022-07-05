import Icon from "./Icon";
import { AiFillHome } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import useModal from "../hooks/useModal";
import Button from "./Button";

function FixedSidebar() {
  const { openModal } = useModal();
  return (
    <div className="w-[80px] lg:w-[350px] h-[calc(100vh-61px)] shrink-0 pt-4">
      <Icon icon={<AiFillHome size={25} />} text="For You" active />
      <Icon icon={<TbUsers size={25} />} text="Following" />
      <hr className=" w-11 mx-auto lg:w-full" />
      <p className=" hidden lg:block text-gray-400">
        Log in to follow creators, like videos, and view comments.
      </p>
      <Button outlined loginLg hiddenWhenSmall onClick={openModal}>
        Log in
      </Button>
    </div>
  );
}

export default FixedSidebar;
