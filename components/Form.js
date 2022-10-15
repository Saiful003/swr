import React from "react";

function Form({ children }) {
  return (
    <div className="h-[calc(100vh-82px)] flex items-center justify-center">
      <div className="border-2 shadow-lg border-emerald-300 rounded-lg px-4 pb-4 pt-2 w-[448px] mx-auto">
        {children}
      </div>
    </div>
  );
}

export default Form;
