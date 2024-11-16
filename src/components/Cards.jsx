import React, { useEffect, useRef } from "react";
import { Cards } from "./../assets/constant/Card";
import { motion, useInView } from "framer-motion";
const CardS = () => {
  const btncls =
    "bg-white hover:bg-black hover:text-white text-gray-800 font-semibold border border-gray-400 rounded-full shadow m-2 p-2 transition-all";
  const crd = useRef(null);
  return (
    <>
      <div className="relative">
        {Cards.map((Card, indx) => (
          <motion.div
            initial={{
              scale: 0.5,
              opacity: 0,
            }}
            whileInView={{
              zIndex: `${indx + 1}`,
              scale: 1,
              opacity: [0, 0.3, 0.7, 1],
            }}
            exit={{
              scale: 0,
              opacity: [1, 0.7, 0.3],
            }}
            viewport={{ margin: "-400px 0px -50px 0px" }}
            transition={{ duration: 1 }}
            ref={crd}
            key={indx}
            className="min-h-80 mx-16 bg-white rounded-[5rem] grid grid-cols-6 gap-1 my-0 p-0"
          >
            <div className="col-span-3 p-10">
              <div className="inline-flex text-[6rem]">{Card.heading}</div>
              <div className="flex-wrap pt-4 pb-2">
                {Card.buttons.map((btn, i) => (
                  <button key={i} className={btncls}>
                    {btn}
                  </button>
                ))}
              </div>
              <div className="flex-wrap p-4 font-semibold text-xl">
                {Card.para}
              </div>
              <div className="w-full flex justify-start">
                <button className="bg-white hover:bg-black hover:text-white text-gray-800 font-semibold text-[1.25rem] border border-black rounded-full shadow m-2 p-2 px-6 transition-all">
                  Find out more &rarr;
                </button>
              </div>
            </div>

            <div className="col-span-3 flex justify-end p-4">
              <video
                muted
                preload="auto"
                playsInline
                autoPlay
                loop
                className="w-full p-6 object-cover border-none rounded-tr-[12rem]"
              >
                <source src={Card.vid} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default CardS;
