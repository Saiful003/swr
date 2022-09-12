import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import IconButton from "./IconButton";
import img from "../public/Screenshot_6.png";

interface IProps {
  id: number;
  introduceBy: string;
  name: string;
  age: number;
  profession: string;
  deleteFriend: (id: number) => void;
}

function Card({
  age,
  id,
  introduceBy,
  name,
  profession,
  deleteFriend,
}: IProps) {
  const router = useRouter();

  return (
    <div className="shadow-md">
      {/* <div>
        <Image layout="responsive" src={img} alt="image" />
      </div> */}

      <div className="p-2">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium mb-2 pb-2 border-b border-b-emerald-300">
            {name}
          </h2>
          <p className="font-medium text-sm"> Age : {age} </p>
          <p className="font-medium text-sm"> Profession : {profession} </p>
          <p className="font-medium text-sm"> Introduce : {introduceBy} </p>
        </div>
        <div className="flex gap-2 mt-4">
          <IconButton
            onClick={() => router.push(`/friend/${id}`)}
            icon={<MdModeEdit />}
            text="Edit"
          />
          <IconButton
            onClick={() => deleteFriend(id)}
            deleteFlavour
            icon={<MdDelete />}
            text="Delete"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
