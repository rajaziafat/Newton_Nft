import Stripe from "components/Stripe";
import React from "react";

function About() {
  return (
    <>
      <Stripe direction="right" />
      <div className="py-16 md:py-100px relative z-10">
        <img
          src="images/about-us-banner-bg.png"
          className="absolute top-0 left-0 w-full h-full object-cover -z-20 pointer-events-none select-none"
          alt=""
        />

        <div className="relative bg-brand-600 pt-12 md:pt-7 md:bg-transparent overflow-hidden md:py-7 md:w-[80%] z-20">
          <img
            src="images/about-us-bg.png"
            className="absolute hidden md:block top-0 left-0 w-full h-full -z-20 select-none pointer-events-none drop-shadow-[0px_0px_14px_rgba(0,0,0,1)]"
            alt=""
          />

          <div className="absolute block md:hidden w-[20rem] h-[20rem] border-2 border-secondary-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full -z-10"></div>

          <div className="absolute block md:hidden w-[22rem] h-[22rem] border-2 border-secondary-400 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full -z-10"></div>

          <img
            src="images/logo-main.svg"
            className="block md:hidden absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[80%] opacity-20"
            alt=""
          />

          <div className="w-full max-w-[18rem] md:max-w-none md:w-[42%] mx-auto md:mx-0 md:ml-[11%] text-center h-full flex flex-col justify-center items-center mb-12 md:mb-0 md:pb-[64px] relative">
            {/*  */}

            {/*  */}
            <h1 className="font-eras-demi text-lg xl:text-2xl drop-shadow-navLinks text-secondary-1000 uppercase mb-2 xl:mb-4">
              About US
            </h1>

            <p className="font-eras-demi text-gradient text-sm xl:text-xl drop-shadow-navLinks font-black">
              Newton Mint Labs is a company of experienced developers, on the
              path to change blockchain gaming industry and NFT standards.
            </p>
          </div>

          <img
            src="images/about-us-stripe.png"
            className="md:absolute bottom-0 left-0 -z-20 w-[90%] h-[56px]"
            alt=""
          />
        </div>
      </div>
      <Stripe direction="left" />
    </>
  );
}

export default About;
