import Icon from "./Icon";
import {
  AiOutlineAccountBook,
  AiOutlineAlibaba,
  AiOutlineAmazon,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function FixedSidebar() {
  return (
    <div className="w-[80px] md:w-[250px] min-h-[calc(100vh-150px)] shrink-0 border flex flex-col items-center justify-around md:justify-start md:items-start md:gap-2 md:pt-4 shadow-lg">
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
    </div>
  );
}

export default FixedSidebar;
