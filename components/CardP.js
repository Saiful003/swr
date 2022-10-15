import React from "react";
import { useTheme } from "../hooks/useTheme";

function CardP({ children }) {
  const { isLightTheme } = useTheme();
  return (
    <p className={`font-medium text-sm ${!isLightTheme && "text-white"} `}>
      {children}
    </p>
  );
}

export default CardP;
