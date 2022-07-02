import React, { useState } from "react";
import Header from "./Header";
import OverLay from "./OverLay";
import SideBar from "./SideBar";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <>
      <Header openDrawer={openDrawer} />
      <main>
        <div className="w-[90%] max-w-6xl mx-auto px-5">{children}</div>
      </main>
      <SideBar isDrawerOpen={isDrawerOpen} />
      <OverLay closeDrawer={closeDrawer} isDrawerOpen={isDrawerOpen} />
    </>
  );
}

export default Layout;
