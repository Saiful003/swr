import React from "react";

interface Ipros {
  children: React.ReactNode;
}
function Container({ children }: Ipros) {
  return (
    <div className="max-w-6xl mx-auto px-5 w-full lg:w-[99%]"> {children} </div>
  );
}

export default Container;
