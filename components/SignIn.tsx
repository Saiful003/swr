import AuthVia from "./AuthVia";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
function SignIn() {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="flex-grow">
      <h2 className=" text-3xl text-center font-bold mb-5 ">
        Sign in to Pro-File
      </h2>
      <div>
        <AuthVia icon={<AiOutlineUser size={20} />} way="Use phone or email" />
        <AuthVia
          icon={<BsFacebook className="fill-blue-500" size={20} />}
          way="Continue with Facebook"
        />
        <AuthVia
          icon={<FcGoogle className="fill-blue-500" size={20} />}
          way="Continue with Google"
        />
        <AuthVia
          hidden={isHidden}
          icon={<BsTwitter className="fill-sky-500" size={20} />}
          way="Continue with Twitter"
        />
        <div
          className={`flex justify-center  ${!isHidden && "hidden"}`}
          onClick={() => setIsHidden(false)}
        >
          <MdOutlineKeyboardArrowDown size={30} className=" cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
