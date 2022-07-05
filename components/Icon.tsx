import React from "react";
import classNames from "classnames";

interface IProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

function Icon({ icon, text, active }: IProps) {
  return (
    <div
      className={classNames("sidebar__icon__wrapper", {
        "text-red-500": active,
      })}
    >
      <div
        className={`py-2 px-3 transition-colors hover:bg-neutral-100 mb-2 lg:mb-0  `}
      >
        {icon}
      </div>
      <p className=" hidden lg:block font-bold text-lg flex-grow "> {text} </p>
    </div>
  );
}

export default Icon;
