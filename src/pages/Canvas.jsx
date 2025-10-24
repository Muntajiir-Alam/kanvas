import React, { useState, useEffect } from "react";
import "remixicon/fonts/remixicon.css";

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
  Bolt,
  ArrowUp,
  ArrowUpToLine,
  ArrowDown,
  ArrowDownToLine,
} from "lucide-react";

const Canvas = () => {
  const [clicked, setClicked] = useState(true);
  const [clickedL, setClickedL] = useState(true);
  const [clickedR, setClickedR] = useState(true);
  const [clickedMenuR, setClickedMenuR] = useState(true);

  const btnstyle =
    "flex items-center justify-center h-9 w-9 hover:bg-emerald-700 rounded-sm outline-none focus:scale-110 focus:bg-emerald-700 focus:text-white transition-all duration-300";
  const menustyle =
    "flex text-white items-center border border-emerald-400 justify-center h-10 w-10  bg-background hover:bg-emerald-700 rounded-sm outline-none focus:scale-110 focus:bg-emerald-700 focus:text-white transition-all duration-300 border-emerald-500 shadow-stock shadow-xl/10";
  const menuAsideAf = `w-1/5 h-4/5 absolute text-xs text-white  flex item-center top-20 left-6 bg-background rounded-lg flex flex-col border border-emerald-500 shadow-stock shadow-xl/20`;
  const menuAsideBf = `w-1/5 h-4/5 absolute text-xs text-white  flex item-center top-20 -left-70 bg-background rounded-lg flex flex-col border border-emerald-500 shadow-stock shadow-xl/20`;

  return (
    <>
      <div className="relative h-screen w-full bg-canvas">
        {/* Top Toolbar */}
        <div className="absolute top-4 left-0 w-full flex items-center justify-between px-8">
          <button
            className={menustyle}
            onClick={function name() {
              setClickedL(!clickedL);
              setClickedMenuR(!clickedMenuR);
            }}
          >
            {clickedL ? <TextAlignJustify /> : <X strokeWidth={1.75} />}
          </button>

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

          <button className={menustyle} onClick={() => setClickedR(!clickedR)}>
            {clickedR ? <TextAlignJustify /> : <X strokeWidth={1.75} />}
          </button>
        </div>
        <aside className={clickedMenuR ? menuAsideBf : menuAsideAf}>
          <div className="w-10/12 h-15 ml-5 flex justify-between  items-center">
            <div
              className="h-8 w-8 bg-cover rounded-full"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1664540415069-bc45ce3e711e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387')",
              }}
            ></div>
            <div className="flex items-center justify-between text-1xl gap-2">
              <button
                className="cursor-pointer outline-none "
                onClick={() => setClicked(!clicked)}
              >
                {clicked ? (
                  <Eye className="p-0.5" />
                ) : (
                  <EyeClosed className="p-0.5" />
                )}
              </button>
              <button className="h-7 w-21 p-1 flex items-center justify-around bg-btn rounded-full cursor-pointer focus:scale-110 outline-none transition-all duration-300">
                <h1>Share</h1>
                <ExternalLink className="p-1" />
              </button>
            </div>
          </div>
          <hr className="text-stock mb-2" />
          <div className="h-6 w-8/10 ml-6 flex items-center justify-between">
            <h1 className="text">Stroke</h1>
            <div className="w-20 h-1 bg-red-700"></div>
            <Bolt strokeWidth={1.75} className="p-1" />
          </div>
          <hr className="text-stock my-2" />
          <div className="h-6 w-8/10 ml-6 flex items-center justify-between">
            <h1 className="text">Fill</h1>
            <div className="w-20 h-full rounded bg-yellow-700 "></div>
            <Bolt strokeWidth={1.75} className="p-1" />
          </div>
          <hr className="text-stock my-2" />
          <div className="h-6 w-8/10 ml-6 flex items-center justify-between">
            <h1 className="text">Layers</h1>
            <div className="h-full w-9/17 flex rounded gap-1">
              <button className="h-full w-1/4 bg-btn rounded">
                <ArrowDownToLine strokeWidth={1.75} className="p-1" />
              </button>
              <button className="h-full w-1/4 bg-btn rounded">
                <ArrowDown strokeWidth={1.75} className="p-1" />
              </button>
              <button className="h-full w-1/4 bg-btn rounded">
                <ArrowUp strokeWidth={1.75} className="p-1" />
              </button>
              <button className="h-full w-1/4 bg-btn rounded">
                <ArrowUpToLine strokeWidth={1.75} className="p-1" />
              </button>
            </div>
          </div>
          <hr className="text-stock text-xs mt-2" />
          <div className="w-8/10 h-8 mx-6  flex justify-between items-center text-white">
            <h1 className="text-xs">Ellipse</h1>
            <h1 className="text-xs">602 %</h1>
          </div>
          <div className="w-9/10 h-5 ml-7 flex justify-between items-center text-white">
            <h1 className="text-gray-300">Position</h1>
          </div>
          <div className="w-9/10 h-6.5 px-4 ml-3 mt-1 flex justify-between items-center text-white">
            <div className="flex items-center h-6.5 px-3 rounded w-8/17 bg-btn gap-2 ">
              X <h1 className="text-xs">602</h1>
            </div>
            <div className="flex items-center h-6.5 px-3 rounded w-8/17 bg-btn gap-2 ">
              Y <h1 className="text-xs">602</h1>
            </div>
          </div>
          <div className="w-9/10 h-5 ml-7 mt-1  flex justify-between items-center text-white">
            <h1 className="text-gray-300">Demention</h1>
          </div>
          <div className="w-9/10 h-6.5 px-4 ml-3 mt-1 flex justify-between items-center text-white">
            <div className="flex items-center h-6.5 px-3 rounded w-8/17 bg-btn gap-2 ">
              W <h1 className="text-xs">602</h1>
            </div>
            <div className="flex items-center h-6.5 px-3 rounded w-8/17 bg-btn gap-2 ">
              H <h1 className="text-xs">602</h1>
            </div>
          </div>
          <div className="w-9/10 h-5 ml-7 mt-1  flex justify-between items-center text-white">
            <h1 className="text-gray-300">Rotation</h1>
          </div>
          <div className="w-9/10 h-6.5 px-4 ml-3 mt-1 flex justify-between items-center text-white">
            <div className="flex items-center h-6.5 px-2 rounded w-8/17 bg-btn gap-1 ">
              <CircleGauge className="p-1" /> <h1 className="text-xs">602</h1>
              <sup>o</sup>
            </div>
            <div className="flex justify-evenly items-center h-6.5  rounded w-8/17 bg-btn  ">
              <button className="outline-none ">
                <RotateCw className="p-1  hover:bg-emerald-700 rounded " />
              </button>
              <button className="outline-none ">
                <FlipVertical2 className="p-1  hover:bg-emerald-700 rounded " />
              </button>
              <button className="outline-none ">
                <FlipHorizontal2 className="p-1  hover:bg-emerald-700 rounded " />
              </button>
            </div>
          </div>
          <hr className="text-stock mt-4 text-xs" />
          <div className="w-8/10 h-8 mx-6 flex justify-between items-center text-white">
            <h1 className="text-xs">Appearance</h1>
          </div>
          <div className="w-5/9 h-5 mx-7 mt-1  flex justify-between items-center text-white">
            <h1 className="text-gray-300">Opacity</h1>
            <h1 className="text-gray-300">Corner</h1>
          </div>
          <div className="w-9/10 h-6.5 px-4 ml-3 mt-1 flex justify-between items-center text-white">
            <div className="flex items-center h-6.5 px-1 rounded w-8/17 bg-btn gap-2 ">
              <Droplet className="p-1" />
            </div>
            <div className="flex items-center h-6.5 px-1 rounded w-8/17 bg-btn gap-2 ">
              <Scan className="p-1" />
              <h3 className="text-xs">8</h3>
            </div>
          </div>
          <div className="w-9/10 h-6.5 px-4 ml-3 mt-3 flex justify-between items-center text-white">
            <div className="flex items-center h-6.5 px-3 rounded w-8/17 bg-btn gap-2 "></div>
            <div className="flex items-center justify-evenly h-6.5 px-1 rounded w-8/17 bg-btn gap-2 ">
              <Blend className="p-1" />
              <h1 className="text-xs">Blend</h1>
              <ChevronDown className="p-1" />
            </div>
          </div>
          <hr className="text-stock mt-3" />
          <div className="w-full h-8  flex justify-around items-center text-white">
            <button className=" flex px-2  rounded outline-none gap-1 justify-evenly items-center focus:bg-btn">
              <FolderDown className="p-1" />
              <h1 className="text-xs">Import</h1>
            </button>
            <button className=" flex px-2  rounded outline-none gap-1 justify-evenly items-center focus:bg-btn">
              <FolderUp className="p-1" />
              <h1 className="text-xs">Export</h1>
            </button>
          </div>
        </aside>

        <div className="w-14/15 h-9 absolute bottom-2 left-6  flex justify-between text-stock px-9">
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
      </div>
    </>
  );
};

export default Canvas;
