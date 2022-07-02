import { AiOutlineMenu } from "react-icons/ai";
import { useBlog } from "../context/BlogContext";
import NavList from "./NavList";

function Header() {
  const { openDrawer } = useBlog();

  return (
    <header className="bg-blue-600">
      <div className=" w-[90%] max-w-6xl mx-auto px-5">
        <div className="h-[150px] flex items-center justify-between">
          <div>
            <h2 className=" text-4xl text-white">Logo</h2>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-5">
              <NavList linkName="Home" />
              <NavList linkName="Blog" />
              <NavList linkName="Portfolio" />
            </ul>
          </div>
          <div className="md:hidden">
            <AiOutlineMenu
              onClick={openDrawer}
              cursor={"pointer"}
              color="#fff"
              size={25}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
