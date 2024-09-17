import React, { useState } from "react";
import { style } from "../style";
import {
  MdOutlineRefresh,
  MdSave,
  MdCheckCircleOutline,
  MdArrowBack,
} from "react-icons/md";

const barsCount = 15;

type LabelType = "ACC" | "TSP" | "TRA" | "BRA";

function Slider({ setShow }: { setShow: (value: boolean) => void }) {
  const [values, setValues] = useState<Record<LabelType, number>>({
    ACC: 0,
    TSP: 0,
    TRA: 0,
    BRA: 0,
  });

  const [activeSlider, setActiveSlider] = useState<LabelType | null>(null);

  const handleDrag = (e: React.MouseEvent, label: LabelType) => {
    e.preventDefault();
    const box = e.currentTarget;
    const rect = box.getBoundingClientRect();
    const newValue = Math.min(
      Math.max(0, ((e.clientX - rect.left) / rect.width) * 100),
      100
    );
    setValues((prev) => ({ ...prev, [label]: newValue }));
  };

  const handleMouseMove = (e: React.MouseEvent, label: LabelType) => {
    if (e.buttons === 1 && activeSlider === label) {
      handleDrag(e, label);
    }
  };
  const handleMouseUp = () => {
    setActiveSlider(null);
  };

  const handleMouseDown = (e: React.MouseEvent, label: LabelType) => {
    setActiveSlider(label);
    handleDrag(e, label);
  };

  const generateGradientColors = (
    steps: number,
    startColor: string,
    endColor: string
  ): string[] => {
    const start = hexToRgb(startColor);
    const end = hexToRgb(endColor);
    const stepFactor = 1 / (steps - 1);
    const gradientColors: string[] = [];

    for (let i = 0; i < steps; i++) {
      gradientColors.push(
        rgbToHex(interpolateColor(start, end, stepFactor * i))
      );
    }
    return gradientColors;
  };

  const hexToRgb = (hex: string): [number, number, number] => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return [r, g, b];
  };

  const rgbToHex = ([r, g, b]: [number, number, number]): string => {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  const interpolateColor = (
    [r1, g1, b1]: [number, number, number],
    [r2, g2, b2]: [number, number, number],
    factor: number
  ): [number, number, number] => {
    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));
    return [r, g, b];
  };

  const gradientColors = generateGradientColors(
    barsCount,
    "#00ffff",
    "#0000ff"
  );

  const handleReset = () => {
    setValues({
      ACC: 0,
      TSP: 0,
      TRA: 0,
      BRA: 0,
    });
  };

  return (
    <div
      className="flex flex-col items-center justify-center gap-2 onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}"
    >
      {(["ACC", "TSP", "TRA", "BRA"] as LabelType[]).map((label) => {
        const barValue = Math.round((values[label] / 100) * barsCount);

        return (
          <div
            key={label}
            className="flex items-center justify-center"
            onMouseUp={handleMouseUp}
          >
            <h1 className="font-['Aldrich'] text-slate-50 mr-2  text-sm font-bold">
              {label}
            </h1>
            <div
              className={`${style.box} cursor-pointer`}
              onMouseDown={(e) => handleMouseDown(e, label)}
              onMouseMove={(e) => handleMouseMove(e, label)}
            >
              {Array.from({ length: barsCount }).map((_, index) => (
                <div
                  key={index}
                  className={style.bar}
                  style={{
                    backgroundColor:
                      index < barValue ? gradientColors[index] : "transparent",
                  }}
                ></div>
              ))}
            </div>
            <div
              className={`${style.box} w-[60px] text-white font-bold text-md font-['Aldrich']`}
            >
              {Math.round(values[label])}
            </div>
          </div>
        );
      })}
      <div className="flex items-center justify-center gap-2 p-3 rounded-t-xl ">
        <MdArrowBack
          className="text-[30px] bg-black text-gray-400 p-1  hover:text-orange-400  rounded-md duration-500 cursor-pointer shadow-sm hover:shadow-orange-500"
          onClick={() => setShow(false)}
        />
        <MdOutlineRefresh
          className="text-[30px] bg-black text-gray-400 p-1  hover:text-red-400  rounded-md duration-500 cursor-pointer shadow-sm hover:shadow-red-500"
          onClick={handleReset}
        />
        <MdSave className="text-[30px] bg-black text-gray-400 p-1  hover:text-blue-800 rounded-md duration-500 cursor-pointer shadow-sm hover:shadow-blue-800" />
        <MdCheckCircleOutline className="text-[30px] bg-black text-gray-400 p-1 hover:text-green-400 rounded-md duration-500 cursor-pointer shadow-sm hover:shadow-green-800" />
      </div>
    </div>
  );
}

export default Slider;
