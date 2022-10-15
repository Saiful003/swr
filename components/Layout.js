import classNames from "classnames";
import React from "react";
import { useTheme } from "../hooks/useTheme";
import Header from "./Header";

function Layout({ children }) {
  const { isLightTheme } = useTheme();

  return (
    <>
      {/* Header */}
      <Header />
      {/* Main */}
      <main>
        <div
          className={classNames("min-h-[calc(100vh-81px)]", {
            "bg-gray-900": !isLightTheme,
          })}
        >
          {children}
        </div>
      </main>
    </>
  );
}

export default Layout;
