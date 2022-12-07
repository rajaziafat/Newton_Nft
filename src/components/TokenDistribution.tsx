import React from "react";

function TokenDistribution() {
  return (
    <div className="py-16 xl:py-100px">
      <div className="container flex flex-col items-center text-center">
        <img
          src="images/token.png"
          className="max-w-[120px] xl:max-w-[164px] w-full mb-5 md:mb-8"
          alt=""
        />
        <p className="font-staatliches text-base md:text-lg xl:text-2xl text-secondary-1000 uppercase text-center mb-2">
          REVIVAL TOKEN DISTRIBUTION
        </p>
        <p className="font-staatliches text-base md:text-lg xl:text-2xl text-secondary-1000 uppercase text-center">
          Total Supply 1,000,000,000 $RVVL
        </p>
      </div>
    </div>
  );
}

export default TokenDistribution;
