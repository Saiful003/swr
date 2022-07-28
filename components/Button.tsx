import React from "react";
import classNames from "classnames";
import { useTheme } from "../features/themeSlice";
import { useAppSelector } from "../hooks/redux-hooks/tsVersionHooks";

interface IProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  hiddenWhenSmall?: boolean;
  fill?: boolean;
  outlined?: boolean;
  loginLg?: boolean;
  isBorder?: boolean;
}

function Button({
  children,
  onClick,
  hiddenWhenSmall,
  icon,
  fill,
  outlined,
  loginLg,
}: IProps) {
  const { siteTheme } = useAppSelector((state) => state);
  const { light } = siteTheme;
  return (
    <a
      onClick={onClick}
      href="#"
      className={classNames(
        " border py-2 px-4 rounded-sm hover:bg-neutral-100 font-medium",

        {
          "font-bold items-center text-md text-gray-700 flex gap-2 hover:bg-neutral-100":
            icon,
          "border-none bg-white": !light && icon,
        },
        {
          "border border-red-500 font-bold hover:bg-red-100 rounded-md text-red-500 py-2 px-6":
            outlined,
        },
        {
          "border text-center text-lg font-bold py-2 text-red-500 hover:bg-red-100 rounded-sm border-red-500 lg:block":
            outlined && loginLg,
        },
        {
          hidden: hiddenWhenSmall,
        },
        {
          "bg-red-500 shrink-0 py-2 px-6 border-none text-white hover:bg-red-600 font-bold rounded-md":
            fill,
        }
      )}
    >
      {icon && <div className="shrink-0">{icon}</div>}
      {children}
    </a>
  );
}

export default Button;
