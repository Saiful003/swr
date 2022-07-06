import React from "react";

interface IProps {
  children: React.ReactNode;
}

function HasTagRow({ children }: IProps) {
  return <div className="flex gap-2 mb-2 last:mb-0"> {children} </div>;
}

export default HasTagRow;
