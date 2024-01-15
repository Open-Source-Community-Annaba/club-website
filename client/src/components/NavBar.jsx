import logo from "../../assets/logo.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <nav className={`w-full flex flex-wrap justify-around items-center bg-[#f2e9e4] px-5 select-none`}>
      <div className="w-1/2 md:w-1/4 flex justify-start items-center text-xl font-bold order-1 p-2">
        <img className="w-12 cursor-pointer" src={logo} alt="logo" />
      </div>
      <div
        onClick={() => toggle()}
        className="w-1/2 md:w-1/4 flex justify-end items-center order-2 md:order-3"
      >
        <Bars3Icon
          className={`${
            open ? "rotate-180" : ""
          } transition-all duration-1000 w-12 md:hidden cursor-pointer`}
          onClick={() => toggle()}
        />
        <UserIcon className="w-8 hidden md:flex cursor-pointer" />
      </div>

      <div
        className={`w-full md:w-1/2 col-span-2 row-span-3 md:col-span-2 border-purple-900 flex flex-col md:flex-row justify-center items-center gap-5 uppercase font-bold text-xs md:text-lg overflow-hidden transition-all md:transition-none duration-500 order-3 md:order-2 md:h-16 ${
          open ? "h-56 p-5" : "h-0"
        }`}
      >
        <div className="h-12 md:w-1/3 flex justify-center items-center px-5 py-2 hover:border-b-2 border-black cursor-pointer">
          home
        </div>
        <div className="h-12 md:w-1/3 flex justify-center items-center px-5 py-2 hover:border-b-2 border-black cursor-pointer">
          announcments
        </div>
        <div className="h-12 md:w-1/3 flex justify-center items-center px-5 py-2 hover:border-b-2 border-black cursor-pointer">
          blog
        </div>
        <div className="h-12 flex md:hidden justify-center items-center px-5 py-2 hover:border-b-2 border-black cursor-pointer">
          Account
        </div>
      </div>
    </nav>
  );
}
