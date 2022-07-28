import React from "react";
import Header from "./Header";
import OverLay from "./OverLay";
import FixedSidebar from "./FixedSidebar";
import Container from "./Container";
import classNames from "classnames";
import { useAppSelector } from "../hooks/redux-hooks/tsVersionHooks";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  const { siteTheme } = useAppSelector((state) => state);
  const { light } = siteTheme;
  return (
    <div className={classNames(" bg-white", { "bg-gray-600": !light })}>
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
    </div>
  );
}

export default Layout;
