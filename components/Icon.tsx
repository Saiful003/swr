import React from "react";

interface IProps {
  icon: React.ReactNode;
  text: string;
}

function Icon({ icon, text }: IProps) {
  return (
    <div className="flex flex-col items-center md:flex-row md:w-full gap-3 cursor-pointer md:py-2 md:hover:bg-blue-500 md:hover:text-white md:pl-3">
      <div>{icon}</div>
      <p className=" font-medium text-md "> {text} </p>
    </div>
  );
}

export default Icon;
