import Icon from "./Icon";
import { AiFillHome } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import useModal from "../hooks/useModal";
import Button from "./Button";
import Divider from "./Divider";
import HasTag from "./HasTag";
import HasTagRow from "./HasTagRow";
import FixedSideBarFooter from "./FixedSideBarFooter";

function FixedSidebar() {
  const { openModal } = useModal();
  return (
    <div className="w-[80px] border-r h-[calc(100vh-61px)] shrink-0 sticky top-[61px] -ml-5 pt-4 lg:w-[350px] lg:ml-0 lg:border-none ">
      <Icon icon={<AiFillHome size={25} />} text="For You" active />
      <Icon last icon={<TbUsers size={25} />} text="Following" />

      <Divider />
      <div className="my-5  flex flex-col gap-4">
        <p className=" hidden lg:block text-gray-400">
          Log in to follow creators, like videos, and view comments.
        </p>

        <Button outlined loginLg hiddenWhenSmall onClick={openModal}>
          Log in
        </Button>
      </div>
      <Divider hiddenInMobile />
      <div className="hidden lg:block mb-4">
        <p className=" my-4 text-gray-400 font-normal">Discover</p>
        <HasTagRow>
          <HasTag text="eidulazha" />
          <HasTag text="mangoseason" />
        </HasTagRow>
        <HasTagRow>
          <HasTag text="ekshoteeksho" />
          <HasTag text="tiktokvlog" />
        </HasTagRow>
        <HasTagRow>
          <HasTag text="priyobaba" />
        </HasTagRow>
      </div>
      <Divider hiddenInMobile />
      <FixedSideBarFooter />
    </div>
  );
}

export default FixedSidebar;
