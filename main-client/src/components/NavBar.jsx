import logoTitle from "../../assets/logo-with-text.png";
import logo from "../../assets/logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { UserIcon, GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const languages = [
  { code: "ar", name: "العربية" },
  { code: "en", name: "English" },
  { code: "fr", name: "français" },
];

export default function NavBar() {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const toggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);
  return (
    <nav
      className={`w-full flex-wrap md:gap-2 md:flex-nowrap flex items-center bg-slate-900 px-5 select-none text-white`}
    >
      <div className="w-1/2 md:w-max h-16 flex justify-start items-center order-1 p-2">
        <img
          className="h-full hidden md:flex cursor-pointer"
          src={logoTitle}
          alt="logo"
        />
        <img
          className=" h-full flex md:hidden cursor-pointer"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="w-1/2 md:w-max h-16 flex justify-end items-center gap-5 order-2 md:order-3">
        <Bars3Icon
          className={`${
            open ? "rotate-180" : ""
          } transition-all duration-1000 w-8 md:hidden cursor-pointer`}
          onClick={() => toggle()}
        />

        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="focus:outline-0 focus:border-0">
                <GlobeEuropeAfricaIcon className="w-6 hidden md:flex cursor-pointer" />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute z-10 mt-3 w-48 max-w-sm -translate-x-2/3 transform px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                    <div className="relative bg-slate-500 flex gap-2 flex-col p-2 lg:grid-cols-2">
                      {languages.map((lang) => (
                        <div
                          onClick={() => setLanguage(lang.code)}
                          className="flex justify-between items-center rounded-lg hover:bg-slate-700 p-5"
                        >
                          <div className="uppercase">{lang.code}</div>
                          <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                          <div className="capitalize">{lang.name}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <UserIcon className="w-6 hidden md:flex cursor-pointer" />
      </div>

      <div
        className={`w-full md:grow flex flex-col md:flex-row justify-center items-center gap-5 uppercase text-sm md:text-md overflow-hidden transition-all md:transition-none duration-1000 order-3 md:order-2 md:h-16 md:p-0 ${
          open ? " h-60 p-5" : "h-0"
        }`}
      >
        <div className="h-12 flex justify-center items-center px-5 py-2 hover:border-b-2 border-white cursor-pointer">
          {t("announcements")}
        </div>
        <div className="h-12 flex justify-center items-center px-5 py-2 hover:border-b-2 border-white cursor-pointer">
          {t("blog")}
        </div>
        <div className="h-12 flex justify-center items-center px-5 py-2 hover:border-b-2 border-white cursor-pointer">
          {t('about')}
        </div>
        <div className="h-12 flex md:hidden justify-center items-center px-5 py-2 hover:border-b-2 border-white cursor-pointer">
          {t("account")}
        </div>
      </div>
    </nav>
  );
}
