import Icon from "./Icon";
import { AiFillHome } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import useModal from "../hooks/useModal";
import Button from "./Button";
import Divider from "./Divider";

function FixedSidebar() {
  const { openModal } = useModal();
  return (
    <div className="w-[80px] lg:w-[350px] h-[calc(100vh-61px)] shrink-0 pt-4 ml-[-20px]">
      <Icon icon={<AiFillHome size={25} />} text="For You" active />
      <Icon last icon={<TbUsers size={25} />} text="Following" />

      <Divider />
      <div className="my-5 pl-3 flex flex-col gap-4">
        <p className=" hidden lg:block text-gray-400">
          Log in to follow creators, like videos, and view comments.
        </p>

        <Button outlined loginLg hiddenWhenSmall onClick={openModal}>
          Log in
        </Button>
      </div>
      <Divider hiddenInMobile />
    </div>
  );
}

export default FixedSidebar;
