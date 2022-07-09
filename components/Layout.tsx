import React from "react";
import Header from "./Header";
import OverLay from "./OverLay";
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
        <div className="flex gap-[2.5em]  ">
          <FixedSidebar />
          <main className="flex-grow">
            <div className="mt-4">{children}</div>
          </main>
        </div>
      </Container>
      <OverLay />
    </>
  );
}

export default Layout;
