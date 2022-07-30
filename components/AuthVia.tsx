import React from "react";

interface IProps {
  icon: React.ReactNode;
  way: string;
  hidden?: boolean;
}

function AuthVia({ icon, way, hidden }: IProps) {
  return (
    <div
      className={`flex items-center  mb-5 last:mb-0 p-2 w-[376px] border mx-auto cursor-pointer ${
        hidden && "hidden"
      }`}
    >
      <div>{icon}</div>
      <div className="flex-grow text-center font-medium"> {way} </div>
    </div>
  );
}

export default AuthVia;
