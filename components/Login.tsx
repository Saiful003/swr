import { BsFacebook, BsTwitter, BsApple, BsInstagram } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineQrcode, AiOutlineUser } from "react-icons/ai";
import AuthVia from "./AuthVia";

function Login() {
  return (
    <div className=" flex-grow">
      <h2 className=" text-3xl text-center font-bold mb-5 ">
        Log in to Pro-File
      </h2>
      <div>
        <AuthVia icon={<AiOutlineQrcode size={20} />} way="Use QR Code" />
        <AuthVia
          icon={<AiOutlineUser size={20} />}
          way="Use phone / email / username"
        />
        <AuthVia
          icon={<BsFacebook className="fill-blue-500" size={20} />}
          way="Continue with Facebook"
        />
        <AuthVia
          icon={<FcGoogle className="fill-blue-500" size={20} />}
          way="Continue with Google"
        />
        <AuthVia
          icon={<BsTwitter className="fill-sky-500" size={20} />}
          way="Continue with Twitter"
        />
        <AuthVia icon={<BsApple size={20} />} way="Continue with Apple" />
      </div>
    </div>
  );
}

export default Login;
