import React from "react";

interface IProps {
  icon: React.ReactNode;
  contentCounter?: number;
  prefix?: string;
  hoverColor?: string;
}

function RoundedIcon({ icon, contentCounter = 0, prefix = "" }: IProps) {
  return (
    <div className="w-[40px] flex flex-col items-center gap-2 mb-2 last:mb-0">
      <div
        className={`w-full aspect-square rounded-full bg-gray-100 flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-200`}
      >
        {icon}
      </div>
      {contentCounter || prefix ? <p>{`${contentCounter}${prefix}`}</p> : null}
    </div>
  );
}

export default RoundedIcon;
