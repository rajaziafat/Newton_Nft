import { IoLogoDiscord } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelegram, BsYoutube, BsInstagram } from "react-icons/bs";

function Hero() {
  return (
    <div className="pt-8 sm:pt-10 pb-20 lg:pt-0 lg:pb-0 lg:min-h-[calc(100vh-var(--navbar-height))] flex items-center z-10 relative">
      <div className="container flex flex-col items-center justify-center">
        {/* max-w-[1030px]  */}
        <img
          src="images/joker.png"
          className="max-w-[8rem] sm:max-w-[10rem] w-full block lg:hidden"
          alt=""
        />
        <div className="max-w-[24rem] lg:max-w-none w-full bg-brand-500 relative shadow-[-8px_8px_10px_rgba(0,0,0,.4)]">
          <div className="p-4 sm:p-8 w-full lg:w-[56%]">
            <div className="px-6 sm:px-10 py-6 sm:py-12 relative z-10 mb-4">
              <div className="w-[8%] border-r-0 h-full absolute top-0 left-0 -z-20 border-2 border-white opacity-30"></div>

              <div className="w-[8%] border-l-0 h-full absolute top-0 right-0 -z-20 border-2 border-white opacity-30"></div>

              <img
                src="images/logo-secondary.png"
                className="w-full mb-2 sm:mb-5 pointer-events-none select-none"
                alt=""
              />
              <img
                src="images/figth-for-destiny.png"
                className="w-[94%] sm:w-[84%] block mx-auto pointer-events-none select-none"
                alt=""
              />
            </div>
            <div className="flex items-center justify-center space-x-4">
              <a href="/" target="_blank" className="text-xl sm:text-2xl">
                <IoLogoDiscord className="fill-secondary" />
              </a>
              <a href="/" target="_blank" className="text-xl sm:text-2xl">
                <BsInstagram className="fill-secondary" />
              </a>
              <a href="/" target="_blank" className="text-xl sm:text-2xl">
                <AiFillTwitterCircle className="fill-secondary" />
              </a>
              <a href="/" target="_blank" className="text-xl sm:text-2xl">
                <BsTelegram className="fill-secondary" />
              </a>
              <a href="/" target="_blank" className="text-xl sm:text-2xl">
                <BsYoutube className="fill-secondary" />
              </a>
            </div>
          </div>
          <img
            src="images/joker.png"
            className="h-[80vh] hidden lg:block absolute bottom-0 right-[10%]"
            alt=""
          />
        </div>
      </div>

      <img
        src="images/pattren.png"
        className="absolute bottom-0 right-0 -z-10  w-[60%]"
        alt=""
      />
    </div>
  );
}

export default Hero;
