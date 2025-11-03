import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import UserIMG from "../components/UserData/UserImg";

import {
  TextAlignJustify,
  Eraser,
  LineSquiggle,
  Square,
  Type,
  ImagePlus,
  PenTool,
  Circle,
  X,
  Undo,
  Redo,
  Plus,
  Minus,
  Music,
  MoveDownLeft,
  Eye,
  ExternalLink,
  EyeClosed,
  FolderUp,
  FolderDown,
  CircleGauge,
  RotateCw,
  FlipVertical2,
  FlipHorizontal2,
  Blend,
  ChevronDown,
  Droplet,
  Scan,
  ArrowUp,
  ArrowUpToLine,
  ArrowDown,
  ArrowDownToLine,
  ChevronRight,
  MessagesSquare,
  Radio,
  Link,
} from "lucide-react";

const Canvas = () => {
  const [clicked, setClicked] = useState(true);
  const [clickedL, setClickedL] = useState(true);
  const [clickedR, setClickedR] = useState(true);
  const navigate = useNavigate();
  const btnstyle =
    "flex items-center justify-center h-8 w-8 hover:bg-emerald-700 rounded-sm outline-none focus:scale-110 focus:bg-emerald-700 focus:text-white transition-all duration-300 p-1 cursor-pointer";
  const menustyle =
    "flex text-white items-center border border-emerald-400 justify-center h-10 w-10  bg-background hover:bg-emerald-700 rounded-sm outline-none focus:scale-110 focus:bg-emerald-700 focus:text-white transition-all duration-300 border-emerald-500 shadow-stock shadow-xl/10 cursor-pointer";

  return (
    <>
      <div className="h-full w-full relative">
        <div className="absolute h-screen w-full ">
          {/* mene-left */}
          <div className="absolute top-4 left-0 w-full flex items-center justify-between px-8">
            <button
              className={menustyle}
              onClick={function name() {
                setClickedL(!clickedL);
              }}
            >
              {clickedL ? <TextAlignJustify /> : <X strokeWidth={1.75} />}
            </button>
            {/* Top Toolbar */}
            <div className="flex h-12 gap-3 px-2 rounded-lg bg-background text-gray-300 justify-between items-center border border-emerald-500 shadow-stock shadow-xl/10">
              <button className={btnstyle}>
                <LineSquiggle />
              </button>
              <button className={btnstyle}>
                <Square />
              </button>
              <button className={btnstyle}>
                <Circle />
              </button>
              <button className={btnstyle}>
                <Eraser />
              </button>
              <button className={btnstyle}>
                <MoveDownLeft />
              </button>
              <button className={btnstyle}>
                <Type />
              </button>
              <button className={btnstyle}>
                <ImagePlus />
              </button>
              <button className={btnstyle}>
                <PenTool />
              </button>
            </div>
            <button
              className={menustyle}
              onClick={() => {
                setClickedR(!clickedR);
              }}
            >
              {clickedR ? <TextAlignJustify /> : <X strokeWidth={1.75} />}
            </button>
          </div>
          {/* left menu div  */}
          <div
            className={`${
              clickedL ? "hidden" : null
            } w-[260px] h-[560px] absolute text-xs text-white  flex item-center top-20 left-6 bg-background rounded-lg  flex-col border border-emerald-500 shadow-stock shadow-xl/20`}
          >
            {/* header */}
            <div className="w-10/12 h-15 ml-5 flex justify-between  items-center">
              <div className="h-8 w-8 bg-cover rounded-full">
                <UserIMG />
              </div>
              <h1 className="text-[13px] tracking-widest font-bold">Ellipse</h1>
              <div className="flex items-center justify-between text-1xl gap-2">
                <button
                  className=" outline-none "
                  onClick={() => setClicked(!clicked)}
                >
                  {clicked ? (
                    <Eye className="p-0.5" />
                  ) : (
                    <EyeClosed className="p-0.5" />
                  )}
                </button>
              </div>
            </div>
            {/* stock */}
            <div className="h-10 w-full  px-6 flex items-center justify-between border-t border-stock">
              <label for="color1" className="cursor-pointer">
                Stroke
              </label>
              <input
                id="color1"
                type="color"
                className=" cursor-pointer w-20 h-3 outline-none rounded"
              />
              <button className="cursor-pointer outline-none active:bg-emerald-500 rounded">
                <ChevronRight className="p-1" />
              </button>
            </div>
            {/* fill */}
            <div className="h-10 w-full  px-6 flex items-center justify-between ">
              <label for="corol2" className="cursor-pointer">
                Fill
              </label>
              <input
                id="corol2"
                type="color"
                className=" cursor-pointer w-20 h-8 rounded outline-none "
              />
              <button className="cursor-pointer outline-none active:bg-emerald-500 rounded">
                <ChevronRight className="p-1" />
              </button>
            </div>
            {/* Layers */}
            <div className="h-10 w-full mb-3  px-6  flex items-center justify-between ">
              <h1>Layers</h1>
              <div className="h-full w-36 flex items-center gap-1">
                <button className="h-8 w-8 bg-btn rounded  flex items-center  justify-center  cursor-pointer outline-none active:bg-emerald-500">
                  <ArrowDownToLine className="p-1" />
                </button>
                <button className="h-8 w-8 bg-btn rounded  flex items-center  justify-center  cursor-pointer outline-none active:bg-emerald-500">
                  <ArrowDown strokeWidth={1.75} className="p-1" />
                </button>
                <button className="h-8 w-8 bg-btn rounded  flex items-center  justify-center  cursor-pointer outline-none active:bg-emerald-500">
                  <ArrowUp strokeWidth={1.75} className="p-1" />
                </button>
                <button className="h-8 w-8 bg-btn rounded  flex items-center  justify-center  cursor-pointer outline-none active:bg-emerald-500">
                  <ArrowUpToLine strokeWidth={1.75} className="p-1" />
                </button>
              </div>
            </div>
            <div className="w-full h-1 bg-stock mb-3"></div>
            {/* Position */}
            <h1 className="text-gray-300 ml-5 ">Position</h1>
            <div className="h-10 w-full  px-5 flex items-center justify-between  ">
              <div className="flex gap-1">
                <div className="flex items-center h-7  rounded w-26 bg-btn ">
                  <label
                    for="x"
                    className="border-r border-background  h-8 w-7 flex items-center justify-center"
                  >
                    X
                  </label>
                  <input
                    id="x"
                    type="number"
                    placeholder="620"
                    className="h-full w-18  pl-3 outline-none"
                  />
                </div>
                <div className="flex items-center h-7  rounded w-26 bg-btn ">
                  <label
                    for="Y"
                    className="border-r border-background  h-8 w-7 flex items-center justify-center"
                  >
                    Y
                  </label>
                  <input
                    id="Y"
                    type="number"
                    placeholder="620"
                    className="h-full w-18  pl-3 outline-none"
                  />
                </div>
              </div>
            </div>
            {/* Demention */}
            <h1 className="text-gray-300 ml-5">Demention</h1>
            <div className="h-10 w-full   px-5 flex items-center justify-between  ">
              <div className="flex gap-1">
                <div className="flex items-center h-7  rounded w-26 bg-btn ">
                  <label
                    for="H"
                    className="border-r border-background  h-8 w-7 flex items-center justify-center"
                  >
                    H
                  </label>
                  <input
                    id="H"
                    type="number"
                    placeholder="620"
                    className="h-full w-18  pl-3 outline-none"
                  />
                </div>
                <div className="flex items-center h-7  rounded w-26 bg-btn ">
                  <label
                    for="W"
                    className="border-r border-background  h-8 w-7 flex items-center justify-center"
                  >
                    W
                  </label>
                  <input
                    id="W"
                    type="number"
                    placeholder="620"
                    className="h-full w-18  pl-3 outline-none"
                  />
                </div>
              </div>
            </div>
            {/* Rotation */}
            <h1 className="text-gray-300 ml-5 mb-2">Rotation</h1>
            <div className="h-10 w-full px-5 flex items-center justify-between  pb-3 ">
              <div className="flex gap-1 mr-2">
                <div className="flex items-center h-7  rounded w-26 bg-btn ">
                  <label
                    for="H"
                    className="border-r-1 border-background  h-8 w-7 flex items-center justify-center"
                  >
                    <CircleGauge className="p-1" />{" "}
                  </label>
                  <input
                    id="H"
                    type="number"
                    placeholder="620"
                    className="h-full w-18  pl-3 outline-none"
                  />
                </div>
                <div className="flex items-center justify-around h-7 bg-btn  rounded w-26">
                  <button className="outline-none cursor-pointer h-7 w-7 hover:bg-emerald-700 rounded bg-btn flex items-center justify-center">
                    <RotateCw className="p-1  " />
                  </button>
                  <button className="outline-none cursor-pointer h-7 w-7 hover:bg-emerald-700 rounded bg-btn flex items-center justify-center">
                    <FlipVertical2 className="p-1  " />
                  </button>
                  <button className="outline-none cursor-pointer h-7 w-7 hover:bg-emerald-700 rounded bg-btn flex items-center justify-center">
                    <FlipHorizontal2 className="p-1  " />
                  </button>
                </div>
              </div>
            </div>
            {/* Opacity */}
            <div className="h-24 w-full px-5 pt-3 border-t border-stock">
              <div className="h-14 w-full ">
                <div className="w-full flex justify-between items-center mb-1 px-1">
                  <label for="Opacity">Opacity</label>
                  <h1>100</h1>
                </div>
                <div className="flex items-center h-8 rounded w-full ">
                  <input
                    id="Opacity"
                    type="range"
                    placeholder="620"
                    className="h-2 w-full mx-1 outline-none shadow "
                  />
                </div>
              </div>
              <div className="h-7 w-full  flex items-center justify-around  ">
                <div className="flex items-center h-7  rounded w-26 bg-btn ">
                  <label
                    for="Corner"
                    className="border-r-1 border-background  h-8 w-7 flex items-center justify-center"
                  >
                    <Scan className="p-1" />
                  </label>
                  <input
                    id="Corner"
                    type="number"
                    placeholder="620"
                    className="h-full w-18  pl-3 outline-none "
                  />
                </div>
                <div className="flex items-center justify-center h-7 rounded w-26 bg-btn ">
                  <select name="blend" id="">
                    <option value="option 1" className="bg-btn">
                      {" "}
                      Multiply
                    </option>
                    <option value="option 2" className="bg-btn">
                      {" "}
                      Lighten
                    </option>
                    <option value="option 2" className="bg-btn" selected>
                      {" "}
                      Blend
                    </option>
                  </select>
                </div>
              </div>
            </div>
            {/* import - export */}
            <div className="w-full h-17 px-5 flex justify-around items-center text-white border-t border-stock mt-4">
              <button className="h-8 w-26 bg-btn flex px-4  rounded outline-none gap-1 justify-between items-center focus:bg-btn cursor-pointer hover:bg-emerald-700">
                <FolderDown className="p-1" />
                <h1 className="text-xs">Import</h1>
              </button>
              <button className=" h-8 w-26 bg-btn  flex px-4  rounded outline-none gap-1 justify-evenly items-center focus:bg-btn cursor-pointer hover:bg-emerald-700">
                <FolderUp className="p-1" />
                <h1 className="text-xs">Export</h1>
              </button>
            </div>
          </div>
          {/* bottom */}
          <div className="w-14/15 h-9 absolute bottom-2 left-6  flex justify-between  px-9  text-stock">
            <div className="flex  gap-8">
              <div className="flex gap-2 items-center">
                <button className="cursor-pointer">
                  <Plus />
                </button>
                <h1>100%</h1>
                <button className="cursor-pointer">
                  <Minus />
                </button>
              </div>
              <div className="flex gap-4 items-center">
                <button className="cursor-pointer">
                  <Undo />
                </button>
                <button className="cursor-pointer">
                  <Redo />
                </button>
              </div>
            </div>
            <button className="cursor-pointer absolute bottom-14 right-4 h-16 flex items-center justify-center w-16 bg-background rounded-full border border-emerald-500 shadow-stock shadow-xl/20  ">
              <Music />
            </button>
          </div>
          {/* rigth menu funtion  */}
          <div
            className={`${
              clickedR ? "hidden" : null
            } h-40 w-25 bg-background absolute top-18 right-8 rounded text-white flex flex-col items-center justify-around px-2 py-2 gap-1 border border-stock `}
          >
            <button
              onClick={() => {
                navigate("/KanvasChat");
              }}
              className="flex justify-around items-center w-full cursor-pointer outline-none  active:bg-btn h-12 py-2 rounded hover:bg-emerald-700 transition-all duration-300"
            >
              <MessagesSquare /> Chat
            </button>
            <button className="flex justify-around items-center w-full  cursor-pointer outline-none  active:bg-btn h-12 py-2 rounded hover:bg-emerald-700 transition-all duration-300">
              <Radio /> Live
            </button>
            <button className="flex justify-around items-center w-full  cursor-pointer outline-none  active:bg-btn h-12 py-2 rounded hover:bg-emerald-700 transition-all duration-300">
              <Link /> Link
            </button>
          </div>
        </div>
        <canvas className="h-full w-full bg-canvas">

        </canvas>
      </div>
    </>
  );
};

export default Canvas;
