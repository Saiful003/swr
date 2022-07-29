import React from "react";
import Header from "./Header";
import OverLay from "./OverLay";
import FixedSidebar from "./FixedSidebar";
import Container from "./Container";
import classNames from "classnames";
import { useTheme } from "../hooks/useTheme";
import Link from "next/link";
import { useRouter } from "next/router";
import CategoryList from "./CategoryList";
import CategoriesNav from "./CategoriesNav";

type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  const { light } = useTheme();
  const { pathname } = useRouter();

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
      <OverLay />
    </div>
  );
}

export default Layout;
