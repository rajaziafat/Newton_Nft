import React from "react";

function Video() {
  return (
    <>
      <div className="container">
        <img
          src="images/video.png"
          className="w-full max-w-[842px] mb-4 sm:mb-8 md:mb-12 mx-auto"
          alt=""
        />
      </div>
      <div className="py-4 sm:py-0 sm:h-[55px] relative z-10">
        <div
          className="absolute top-0 left-0 h-full w-[90%] bg-[rgba(0,0,0,.6)] -z-20"
          style={{ clipPath: "polygon(0 0, 98% 0, 100% 100%, 0% 100%)" }}
        ></div>
        <div className="container flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8 h-full justify-start md:justify-center">
          <p className="text-sm sm:text-base md:text-lg xl:text-2xl uppercase text-secondary-800">
            POWERED BY THE BEST
          </p>

          <img
            src="images/avalanche.png"
            className="h-[30px] sm:h-[50%] md:h-[60%] xl:h-[80%]"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Video;
