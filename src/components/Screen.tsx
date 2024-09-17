import Slider from "./Slider";
import ft450 from "../assets/ft450.png";
import { LiaMicrochipSolid } from "react-icons/lia";
import { useState } from "react";

function Screen() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-sky-950/25">
      <img src={ft450} className="absolute w-[800px]" />
      <div className="flex items-center justify-center">
        <div className="bg-[url('./assets/bg-1.png')] bg-cover bg-no-repeat bg-center z-10 flex flex-col items-center justify-between bg-zinc-900 w-[433px] h-[252px]">
          <div className="w-[433px] h-[252px] bg-black/80 fixed"></div>

          <div className="flex items-center justify-center h-full z-10">
            {show && <Slider setShow={setShow} />}
            {!show && (
              <div className="p-3 gap-3 flex items-center justify-center">
                {/* <button className="border-2 border-black flex text-yellow-400 font-['Aldrich'] shadow-sm hover:bg-black p-1 duration-500 rounded-2xl" onClick={() => setShow(true)}>
                  <LiaMicrochipSolid className="text-[35px] " />
                </button>
                <button className="border-2 border-black flex text-yellow-400 font-['Aldrich'] p-1 duration-500 rounded-2xl shadow-sm hover:bg-black">
                  <LiaMicrochipSolid className="text-[35px] " />
                </button>
                <button className="border-2 border-black flex text-yellow-400 font-['Aldrich'] shadow-sm hover:bg-black p-1 duration-500 rounded-2xl">
                  <LiaMicrochipSolid className="text-[35px] " />
                </button> */}
                <button className="card" onClick={() => setShow(true)}>
                  <div className="content">
                    <div className="back">
                      <div className="back-content">
                        <LiaMicrochipSolid className="text-[35px] " />
                        <strong>1</strong>
                      </div>
                    </div>
                    <div className="front">
                      <div className="img">
                        <div className="circle"></div>
                        <div className="circle" id="right"></div>
                        <div className="circle" id="bottom"></div>
                      </div>

                      <div className="front-content">
                        {/* <small className="badge">Pasta</small> */}
                        <div className="description">
                          <p className="title">
                            <strong>Meriva</strong>
                          </p>
                          <p className="card-footer">Classe: A+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="card" onClick={() => setShow(true)}>
                  <div className="content">
                    <div className="back">
                      <div className="back-content">
                        <LiaMicrochipSolid className="text-[35px] " />
                        <strong>2</strong>
                      </div>
                    </div>
                    <div className="front">
                      <div className="img">
                        <div className="circle"></div>
                        <div className="circle" id="right"></div>
                        <div className="circle" id="bottom"></div>
                      </div>

                      <div className="front-content">
                        {/* <small className="badge">Pasta</small> */}
                        <div className="description">
                          <p className="title">
                            <strong>Skyline R34</strong>
                          </p>
                          <p className="card-footer">Classe: S+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="card" onClick={() => setShow(true)}>
                  <div className="content">
                    <div className="back">
                      <div className="back-content">
                        <LiaMicrochipSolid className="text-[35px] " />
                        <strong>3</strong>
                      </div>
                    </div>
                    <div className="front">
                      <div className="img">
                        <div className="circle"></div>
                        <div className="circle" id="right"></div>
                        <div className="circle" id="bottom"></div>
                      </div>

                      <div className="front-content">
                        {/* <small className="badge">Pasta</small> */}
                        <div className="description">
                          <p className="title">
                            <strong>T20</strong>
                          </p>
                          <p className="card-footer">Classe: A+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen;
