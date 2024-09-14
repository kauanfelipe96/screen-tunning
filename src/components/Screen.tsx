import React from "react";
import Slider from "./Slider";
import { MdOutlineRefresh, MdSave, MdCheckCircleOutline } from "react-icons/md";

function Screen() {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-sky-950/50">
      <div className="flex flex-col items-center justify-center bg-stone-800/70 px-5 rounded-xl">
        <Slider />
        <div className="flex items-center justify-center gap-2 m-3 bg-stone-800 p-3 rounded-xl ">
          <MdOutlineRefresh className="text-[30px] text-gray-400 p-1 hover:bg-stone-600 hover:text-gray-200 rounded-md duration-500 cursor-pointer" />
          <MdSave className="text-[30px] text-gray-400 p-1 hover:bg-stone-600 hover:text-gray-200 rounded-md duration-500 cursor-pointer" />
          <MdCheckCircleOutline className="text-[30px] text-gray-400 p-1 hover:bg-stone-600 hover:text-gray-200 rounded-md duration-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Screen;
