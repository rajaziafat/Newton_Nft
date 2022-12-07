import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function Navbar() {
  const [isSidebarVisible, setSidebarVisibility] = useState<boolean>(false);
  const sidebarRef = OutsideClickDetector(() => setSidebarVisibility(false));

  return (
    <div className="bg-secondary-800">
      <div className="container h-ofNavbarHeight flex space-x-12">
        <img
          src="images/logo.png"
          className="h-[70px] lg:h-[84px] xl:h-[140px] translate-y-2"
          alt=""
        />

        <div className="h-full flex-1 flex lg:hidden items-center justify-end">
          <button
            className="text-2xl flex"
            onClick={() => setSidebarVisibility((val) => !val)}
          >
            <MdMenu className="fill-brand-600" />
          </button>
        </div>

        <div
          ref={sidebarRef}
          className={`flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-10 xl:space-x-16 fixed top-0 right-0 w-[260px] lg:w-auto h-full lg:h-auto bg-secondary-1000 lg:bg-transparent lg:static p-10 lg:p-0 transition-all duration-300 z-[200] ${
            isSidebarVisible
              ? "translate-x-0"
              : "translate-x-[260px] lg:translate-x-0"
          }`}
        >
          {/*  */}
          <div className="flex lg:hidden pb-3">
            <button
              className="text-2xl -translate-x-1"
              onClick={() => setSidebarVisibility(false)}
            >
              <IoClose className="fill-brand-600" />
            </button>
          </div>

          <a
            href="/"
            className="text-xs xl:text-sm text-primary uppercase cursor-pointer font-medium drop-shadow-navLinks"
          >
            home
          </a>
          <a
            href="/"
            className="text-xs xl:text-sm text-primary uppercase cursor-pointer font-medium drop-shadow-navLinks"
          >
            about
          </a>
          <a
            href="/"
            className="text-xs xl:text-sm text-primary uppercase cursor-pointer font-medium drop-shadow-navLinks"
          >
            game
          </a>
          <a
            href="/"
            className="text-xs xl:text-sm text-primary uppercase cursor-pointer font-medium drop-shadow-navLinks"
          >
            nfts
          </a>
          <a
            href="/"
            className="text-xs xl:text-sm text-primary uppercase cursor-pointer font-medium drop-shadow-navLinks"
          >
            team
          </a>
        </div>
      </div>

      <div className={`black-screen ${isSidebarVisible && "show"}`}></div>
    </div>
  );
}

export default Navbar;
