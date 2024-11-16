import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { FaArrowLeft } from "react-icons/fa";
import React from "react";

const OurServices = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#leftarrow",
      {
        rotation: "0",
      },
      {
        rotation: "-45",
        scrollTrigger: {
          trigger: "#leftarrow",
          start: "top 70%",
          end: "top 50%",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div id="our" className="flex flex-col w-full justify-center items-center">
      <div className="flext w-3/4 text-[8rem]">OUR</div>
      <div className="mx-8 w-3/4 flex justify-between text-[9rem] pl-36">
        <div className="flex justify-center">SERVICES</div>
        <span id="leftarrow" className="text-9xl flex items-end">
          <FaArrowLeft />
        </span>
      </div>
    </div>
  );
};

export default OurServices;
