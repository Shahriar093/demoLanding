import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import vd from "../../public/Kota-loop.mp4";
const Highlights = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#img",
      {
        y: "100",
        opacity: 0,
      },
      {
        y: 0,
        duration: 1.5,
        opacity: 1,
      }
    );
    gsap.fromTo(
      "#sp3",
      {
        y: "100",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
      }
    );
  }, []);
  return (
    <div className="relative">
      <a href="#" className="absolute w-full flex justify-start">
        <p className="top-16 pb-4 flex justify-center">
          Celebrating 10 years : 2013 - 2023
        </p>
      </a>

      <div className="mt-0.5 mx-12 pt-0 pb-10 flex justify-center lg:relative md:relative sm:flex sm:flex-col">
        <div id="img" className="relative">
          <img src="highlight.svg" width={1000} />
          <div className="absolute bottom-12 left-40 pl-3">
            <video
              muted
              preload="auto"
              playsInline
              autoPlay
              loop
              className="border-none object-cover h-[8rem] w-[8rem] rounded-full"
              // width={180}
            >
              <source src={vd} type="video/mp4" />
            </video>
          </div>
        </div>

        <h1 className="absolute lg:w-1/4 sm:w-full md:w-full lg:right-0 lg:bottom-24 md:bottom-0 sm:bottom-0">
          <span id="sp3">
            We’re a creative web design and branding agency based in London that
            crafts beautiful work for brands who{" "}
            <strong>refuse to blend in.</strong>
          </span>
        </h1>
      </div>
      <div>
        <div className="w-full flex items-start">
          <img
            className="m-6"
            src="https://kota-content.b-cdn.net/app/uploads/2024/03/Digital-Agency-Network.svg"
            alt=""
          />
          <img
            className="m-6"
            src="https://kota-content.b-cdn.net/app/uploads/2024/02/clutch.svg"
            alt=""
          />
          <img
            className="m-6"
            src="https://kota-content.b-cdn.net/app/uploads/2024/02/awwwards.svg"
            alt=""
          />
          <img
            className="m-6"
            src="https://kota-content.b-cdn.net/app/uploads/2024/02/cssda.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
