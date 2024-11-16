import React from "react";

const BespokeText = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center h-screen w-1/2 mx-auto">
        <h1 className="text-[5rem] font-semibold text-black leading-snug text-center">
          We develop bespoke websites with{" "}
          <span className="relative inline-block">
            three
            <span className="absolute left-0 bottom-0 w-full h-1 bg-black"></span>
          </span>{" "}
          things in mind
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-2 opacity-10 hover:opacity-100">
          <div className="bg-red-600 col-span-1 row-span-1 w-full h-24 "></div>
          <div className="bg-green-600 col-span-1 row-span-1 w-full h-24 "></div>
        </div>
        <div className="grid grid-cols-2 opacity-10 hover:opacity-100">
          <div className="bg-green-600 col-span-1 row-span-1 w-full h-24 "></div>
          <div className="bg-red-600 col-span-1 row-span-1 w-full h-24 "></div>
        </div>
        <div className="grid grid-cols-2 opacity-10 hover:opacity-100">
          <div className="bg-red-600 col-span-1 row-span-1 w-full h-24 "></div>
          <div className="bg-green-600 col-span-1 row-span-1 w-full h-24 "></div>
        </div>
      </div>
    </div>
  );
};

export default BespokeText;
