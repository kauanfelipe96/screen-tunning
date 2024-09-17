import Slider from "./Slider";
import ft450 from '../assets/ft450.png'
import { VscChip } from "react-icons/vsc";

function Screen() {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-sky-950/25">
      <img src={ft450} className="absolute w-[800px]"/>
      <div className="flex items-center justify-center">
        <div className="bg-[url('./assets/bg-1.png')] bg-cover bg-no-repeat bg-center z-10 flex flex-col items-center justify-between bg-zinc-900 w-[433px] h-[252px]">

        
        <div className="w-[433px] h-[252px] bg-black/80 fixed"></div>


          <div className="flex items-center justify-center h-full z-10">
            {/* <Slider /> */}
            <div className="p-3 gap-3 flex items-center justify-center">
              <button className="border-2 border-black flex text-yellow-400 font-['Aldrich'] shadow-sm hover:bg-black p-1 duration-500 rounded-2xl">
                <VscChip className="text-[35px] " />
              </button>
              <button className="border-2 border-black flex text-yellow-400 font-['Aldrich'] p-1 duration-500 rounded-2xl shadow-sm hover:bg-black">
                <VscChip className="text-[35px] " />
              </button>
              <button className="border-2 border-black flex text-yellow-400 font-['Aldrich'] shadow-sm hover:bg-black p-1 duration-500 rounded-2xl">
                <VscChip className="text-[35px] " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
