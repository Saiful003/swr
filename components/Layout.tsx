import React, { useState } from "react";
import Header from "./Header";
import OverLay from "./OverLay";
import SideBar from "./SideBar";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  return (
    <>
      <Header />
      <main>
        <div className="w-[90%] max-w-6xl mx-auto px-5">{children}</div>
      </main>
      <SideBar />
      <OverLay />
    </>
  );
}

export default Layout;
