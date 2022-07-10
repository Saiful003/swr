import { CgHashtag } from "react-icons/cg";

interface IProps {
  text: string;
}
function HasTag({ text }: IProps) {
  return (
    <a
      href="#"
      className=" flex xl:self-start items-center gap-1 rounded-full px-2 border text-gray-500 hover:bg-gray-100"
    >
      <div>
        <CgHashtag size={20} className="text-black" />
      </div>
      {text}
    </a>
  );
}

export default HasTag;
