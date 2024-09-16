import React from "react";
import Slider from "./Slider";
import { MdOutlineRefresh, MdSave, MdCheckCircleOutline } from "react-icons/md";

import { VscChip } from "react-icons/vsc";
import ft450 from '../assets/ft450.png'

function Screen() {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-sky-950/25">
      <img src={ft450} className="absolute w-[800px]"/>
      <div className="flex items-center justify-center">
        <div className="pt-10 z-10 flex flex-col items-center justify-between bg-zinc-950 w-[431px] h-[252px]">
          <div className="flex items-center justify-center">
            <Slider />
            {/* <div className="bg-black rounded-l-xl p-3 ml-5 gap-3 flex flex-col items-center justify-center">
              <button className="flex text-gray-400 font-['Aldrich'] text-[10px] hover:bg-slate-600 p-1 rounded-md">
                <span className="w-2">1</span>
                <VscChip className="text-[30px] " />
              </button>
              <button className="flex text-gray-400 font-['Aldrich'] text-[10px] hover:bg-slate-600 p-1 rounded-md">
                <span className="w-2">2</span>
                <VscChip className="text-[30px] " />
              </button>
              <button className="flex text-gray-400 font-['Aldrich'] text-[10px] hover:bg-slate-600 p-1 rounded-md">
                <span className="w-2">3</span>
                <VscChip className="text-[30px] " />
              </button>
            </div> */}
          </div>
          <div className="flex items-center justify-center gap-2 p-3 rounded-t-xl ">
            <MdOutlineRefresh className="text-[30px] bg-black text-gray-400 p-1  hover:text-red-400  rounded-md duration-500 cursor-pointer shadow-sm hover:shadow-red-500" />
            <MdSave className="text-[30px] bg-black text-gray-400 p-1  hover:text-blue-800 rounded-md duration-500 cursor-pointer shadow-sm hover:shadow-blue-800" />
            <MdCheckCircleOutline className="text-[30px] bg-black text-gray-400 p-1 hover:text-green-400 rounded-md duration-500 cursor-pointer shadow-sm hover:shadow-green-800" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
