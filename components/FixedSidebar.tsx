import Icon from "./Icon";
import { AiFillHome } from "react-icons/ai";
import { TbUsers } from "react-icons/tb";
import Button from "./Button";
import Divider from "./Divider";
import HasTag from "./HasTag";
import FixedSideBarFooter from "./FixedSideBarFooter";
import classNames from "classnames";
import { useTheme } from "../hooks/useTheme";
import { useModal } from "../hooks/useModal";

function FixedSidebar() {
  const { handleOpenModal } = useModal();
  const { light } = useTheme();

  return (
    <div
      className={classNames(
        "w-[80px] border-r  h-[calc(100vh-61px)] shrink-0 sticky top-[61px] -ml-5 pt-4 lg:w-[350px] lg:ml-0 lg:border-none",
        { "border-gray-500": !light }
      )}
    >
      <Icon icon={<AiFillHome size={25} />} text="For You" active />
      <Icon last icon={<TbUsers size={25} />} text="Following" />

      <Divider />
      <div className="my-5  flex flex-col gap-4">
        <p
          className={classNames(
            "hidden lg:block ",
            { "text-gray-400": light },
            {
              "text-white": !light,
            }
          )}
        >
          Log in to follow creators, like videos, and view comments.
        </p>

        <Button
          outlined
          loginLg
          hiddenWhenSmall
          onClick={() => handleOpenModal("auth")}
        >
          Log in
        </Button>
      </div>
      <Divider hiddenInMobile />
      <div className="hidden lg:block mb-4">
        <p className=" my-4 text-gray-400 font-normal">Discover</p>
        <div className="flex flex-wrap gap-2 mb-2 last:mb-0">
          <HasTag text="eidulazha" />
          <HasTag text="mangoseason" />
          <HasTag text="ekshoteeksho" />
          <HasTag text="tiktokvlog" />
          <HasTag text="priyobaba" />
        </div>
      </div>
      <Divider hiddenInMobile />
      <FixedSideBarFooter />
    </div>
  );
}

export default FixedSidebar;
