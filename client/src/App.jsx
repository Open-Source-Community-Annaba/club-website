import AppBarCS from "./components/AppBarCScustom";
import FirstCarrossa from "./components/FirstCarrossa";
import logo from "../assets/logo.svg";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="bg-[#aaaaaa] h-[100vh] w-full relative">
        <nav
          className={`w-full h-max bg-[#f2e9e4] px-5 md:absolute bottom-0 right-0`}
        >
          <div className="flex w-full h-full justify-between items-center">
            <div className="w-1/4 flex items-center justify-start p-2 text-xl font-bold">
              <img className="w-12" src={logo} alt="logo" />
            </div>

            <div className=" w-1/2 hidden md:flex gap-5 justify-around  items-center uppercase font-bold text-xs md:text-lg select-none">
              <span className="hover:border-b-2 hover:bg-slate-300 px-5 py-2 border-black cursor-pointer">
                home
              </span>
              <span className="hover:border-b-2 hover:bg-slate-300 px-5 py-2 border-black cursor-pointer">
                announcments
              </span>
              <span className="hover:border-b-2 hover:bg-slate-300 px-5 py-2 border-black cursor-pointer">
                blog
              </span>
            </div>
            <div
              onClick={() => toggle()}
              className="w-1/4 flex justify-end items-center h-full"
            >
              <Bars3Icon
                className={`${
                  open ? "rotate-180" : ""
                } transition-all duration-1000 w-12 md:hidden`}
              />
              <UserIcon className="w-8 hidden md:flex" />
            </div>
          </div>
          <div
            className={` w-full md:hidden border-purple-900 flex flex-col gap-5 uppercase font-bold text-xs md:text-lg overflow-hidden transition-all duration-500 ${
              open ? "h-64 py-5 border-t-2" : "h-0"
            }`}
          >
            <div className="h-12 flex justify-center items-center border px-5 py-2 border-black rounded-xl w-full">
              home
            </div>
            <div className="h-12 flex justify-center items-center border px-5 py-2 border-black rounded-xl w-full hover:bg-slate-300">
              announcments
            </div>
            <div className="h-12 flex justify-center items-center border px-5 py-2 border-black rounded-xl w-full hover:bg-slate-300">
              blog
            </div>
            <div className="h-12 flex justify-center items-center border px-5 py-2 border-black rounded-xl w-full hover:bg-slate-300">
              Account
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
