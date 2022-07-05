import React, { useState } from "react";
import Header from "./Header";
import OverLay from "./OverLay";
import Drawer from "./Drawer";
import FixedSidebar from "./FixedSidebar";
import Container from "./Container";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  return (
    <>
      <Header />
      <Container>
        <div className="flex gap-[2.5em] ">
          <FixedSidebar />
          <main className="flex-grow self-start">
            <div className="mt-4">{children}</div>
          </main>
        </div>
      </Container>

      <Drawer />
      <OverLay />
    </>
  );
}

export default Layout;
