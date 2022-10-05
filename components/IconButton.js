import classNames from "classnames";
import React from "react";

function IconButton({
  icon,
  isRightIcon,
  text,
  style,
  deleteFlavour,
  onClick,
}) {
  return (
    <a
      onClick={onClick}
      className={`w-max flex select-none items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${style} ${
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
