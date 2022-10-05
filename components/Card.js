import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import IconButton from "./IconButton";

function Card({
  age,
  id,
  introduceBy,
  name,
  image,
  profession,
  gender,
  onClick,
}) {
  const router = useRouter();

  return (
    <div>
      <div className="relative w-full h-[200px] overflow-hidden">
        <Image
          className="rounded-sm"
          src={image.url}
          alt="friend-image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="p-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium mb-2 pb-2 border-b border-b-emerald-300">
            {name}
          </h2>
          <p className="font-medium text-sm"> Age : {age} </p>
          <p className="font-medium text-sm"> Profession : {profession} </p>
          <p className="font-medium text-sm"> Introduce : {introduceBy} </p>
          <p className="font-medium text-sm"> Gender : {gender} </p>
        </div>
        <div className="flex gap-2 mt-4">
          <IconButton
            onClick={() => router.push(`/friend/${id}`)}
            icon={<MdModeEdit />}
            text="Edit"
          />
          <IconButton
            onClick={() => onClick(id)}
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
