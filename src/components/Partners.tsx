import React from "react";

function Partners() {
  return (
    <div>
      <h1 className="mb-12 text-center text-2xl xl:text-4xl font-staatliches">
        OFFICIAL PARTNERS
      </h1>
      <div className="grid grid-cols-[auto_auto] gap-y-8 md:gap-y-12 gap-x-14 xl:gap-y-0 xl:gap-x-0 xl:flex items-center xl:space-x-8 justify-center xl:justify-between">
        <img src="images/partner-1.svg" className="h-10 xl:h-16" alt="" />
        <img src="images/partner-2.svg" className="h-6 md:h-8 xl:h-10" alt="" />
        <img
          src="images/partner-3.svg"
          className="h-8 md:h-10 xl:h-16"
          alt=""
        />
        <img
          src="images/partner-4.svg"
          className="h-12 md:h-14 xl:h-20"
          alt=""
        />
      </div>
    </div>
  );
}

export default Partners;
