import React from "react";
import { LuSettings } from "react-icons/lu";

function UnderDevelopmentView() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-400 text-2xl text-center text-neutral-200">
      <span>
        <LuSettings size={96} />
      </span>
      <span className="mt-6 text-5xl font-semibold">COMING SOON</span>
      <span className="w-4/5">We're currently working on it!</span>
    </div>
  );
}

export default UnderDevelopmentView;
