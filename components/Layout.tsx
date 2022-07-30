import React from "react";
import Header from "./Header";
import FixedSidebar from "./FixedSidebar";
import Container from "./Container";
import classNames from "classnames";
import { useTheme } from "../hooks/useTheme";
import CategoriesNav from "./CategoriesNav";
import Footer from "./Footer";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  const { light } = useTheme();

  return (
    <div className={classNames(" bg-white", { "bg-gray-600": !light })}>
      <Header />
      <Container>
        <div className="flex gap-[2.5em]  ">
          <FixedSidebar />
          <main className="flex-grow">
            <CategoriesNav />
            {children}
          </main>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
