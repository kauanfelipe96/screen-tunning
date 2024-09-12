import React from "react";
import Slider from "./Slider";

function Screen() {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center  bg-slate-500">
      <div className="flex items-center justify-center bg-slate-900 p-5">
        <Slider />
      </div>
    </div>
  );
}

export default Screen;
