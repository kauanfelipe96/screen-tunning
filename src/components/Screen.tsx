import React from "react";
import Slider from "./Slider";

function Screen() {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-sky-950/50">
      <div className="flex items-center justify-center bg-stone-800/70 p-5 rounded-xl">
        <Slider />
      </div>
    </div>
  );
}

export default Screen;
