import React from "react";
import classNames from "classnames";
import { useTheme } from "../hooks/useTheme";

interface IProps {
  icon: React.ReactNode;
  text?: string;
  active?: boolean;
  last?: boolean;
}

function Icon({ icon, text, active, last }: IProps) {
  const { light } = useTheme();
  return (
    <div
      className={classNames(
        "icon__container ",
        { "lg:lg:hover:bg-neutral-100": light },
        { "lg:hover:bg-gray-700": !light },
        {
          "text-red-500": active,
        },
        { "text-white": !light && last },
        { "lg:mb-2": last }
      )}
    >
      <div className="sidebar__icon__wrapper">{icon}</div>
      <p className="hidden lg:block font-bold text-lg flex-grow"> {text} </p>
    </div>
  );
}

export default Icon;
