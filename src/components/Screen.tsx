import Slider from "./Slider";
import ft450 from '../assets/ft450.png'

function Screen() {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-sky-950/25">
      <img src={ft450} className="absolute w-[800px]"/>
      <div className="flex items-center justify-center">
        <div className="pt-10 z-10 flex flex-col items-center justify-between bg-zinc-950 w-[433px] h-[252px]">
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
        </div>
      </div>
    </div>
  );
}

export default Screen;
