import classNames from "classnames";
import React from "react";

interface IProps {
  icon: React.ReactNode;
  isRightIcon?: boolean;
  text?: string;
  style?: string;
  deleteFlavour?: boolean;
  onClick?: () => void;
}

function IconButton({
  icon,
  isRightIcon,
  text,
  style,
  deleteFlavour,
  onClick,
}: IProps) {
  return (
    <a
      onClick={onClick}
      className={`w-max flex select-none items-center gap-2 px-3 py-1 rounded-md cursor-pointer ${style} ${
        isRightIcon && "flex-row-reverse"
      }  ${deleteFlavour && "bg-red-100 text-red-600 hover:bg-red-200"} ${
        !deleteFlavour && " hover:bg-gray-200"
      }`}
    >
      <div
        className={classNames(
          {
            "text-red-500": deleteFlavour,
          },
          { "text-gray-500": !deleteFlavour }
        )}
      >
        {icon}
      </div>
      <p className="font-medium">{text}</p>
    </a>
  );
}

export default IconButton;
