import Icon from "./Icon";
import {
  AiOutlineAccountBook,
  AiOutlineAlibaba,
  AiOutlineAmazon,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function FixedSidebar() {
  return (
    <div className="w-[80px] md:w-[250px] h-[calc(100vh-61px)]  shrink-0 flex flex-col items-center pt-4 md:justify-start md:items-start gap-2 md:gap-3 border-r overflow-y-hidden hover:overflow-y-scroll">
      <Icon
        icon={<AiOutlineShoppingCart size={30} cursor="pointer" />}
        text="Cart"
      />
      <Icon
        icon={<AiOutlineAlibaba size={30} cursor="pointer" />}
        text="Ali-Baba"
      />
      <Icon
        icon={<AiOutlineAmazon size={30} cursor="pointer" />}
        text="Amazon"
      />
      <Icon
        icon={<AiOutlineAccountBook size={30} cursor="pointer" />}
        text="Icon"
      />
      <Icon
        icon={<AiOutlineAccountBook size={30} cursor="pointer" />}
        text="Icon"
      />
      <Icon
        icon={<AiOutlineAccountBook size={30} cursor="pointer" />}
        text="Icon"
      />
      <Icon
        icon={<AiOutlineAccountBook size={30} cursor="pointer" />}
        text="Icon"
      />
      <Icon
        icon={<AiOutlineAccountBook size={30} cursor="pointer" />}
        text="Icon"
      />
      <Icon
        icon={<AiOutlineAccountBook size={30} cursor="pointer" />}
        text="Icon"
      />
      <Icon
        icon={<AiOutlineAccountBook size={30} cursor="pointer" />}
        text="Icon"
      />
      <Icon
        icon={<AiOutlineAccountBook size={30} cursor="pointer" />}
        text="Icon"
      />
      <Icon
        icon={<AiOutlineAccountBook size={30} cursor="pointer" />}
        text="Icon"
      />
      <Icon
        icon={<AiOutlineAccountBook size={30} cursor="pointer" />}
        text="Icon"
      />
    </div>
  );
}

export default FixedSidebar;
