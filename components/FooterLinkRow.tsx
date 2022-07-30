import React from "react";
interface IProps {
  children: React.ReactNode;
}

function FooterLinkRow({ children }: IProps) {
  return <div className=" mb-3 last:mb-0">{children}</div>;
}

export default FooterLinkRow;
