import React from "react";

function Form({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 shadow-lg border-emerald-300 rounded-lg px-4 pb-4 pt-2 w-[448px] mx-auto">
      {children}
    </div>
  );
}

export default Form;
