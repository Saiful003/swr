import React, { useState } from "react";
import Header from "./Header";
import OverLay from "./OverLay";
import Drawer from "./Drawer";
import FixedSidebar from "./FixedSidebar";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  return (
    <>
      <Header />
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex gap-[2.5em] ">
          <FixedSidebar />
          <main className="flex-grow self-start">
            <div className="mt-4">{children}</div>
          </main>
        </div>
      </div>
      <Drawer />
      <OverLay />
    </>
  );
}

export default Layout;
