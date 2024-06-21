import React, { useState } from "react";
import SwitchTheme from "./SwitchMode";
import SearchBar from "./SearchBar";
import NewsTab from "./NewsTab";
import { Select, Field } from "@headlessui/react";
function Navbar() {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = () => {
    if (activeTab === 0) {
      setActiveTab(1);
      document.getElementById("News-Tabs").classList.remove("hidden");
    } else {
      setActiveTab(0);
      document.getElementById("News-Tabs").classList.add("hidden");
    }
  };
  return (
    <div className="sticky top-0 z-40">
      <div className="flex md:justify-around p-2 min-h-16 border-b navbar-color border-gray-100 dark:border-slate-900 gap-1 md:gap-3 items-center  ">
        <div className="font-extrabold font-mono text-center  text-nowrap text-lg sm:text-xl md:text-3xl m-auto px-5 ">
          <span className="sm:hidden">NB</span>
          <span className="hidden sm:inline">News Buzz</span>
        </div>
        <div className="flex-1 h-12 my-1">
          <SearchBar />
        </div>
        <div className="hidden md:flex justify-center gap-1 px-4 items-center w-24">
          {/* <Field>
            <Select
              name="language"
              defaultValue="English"
              className="block appearance-none rounded-2xl border-2  py-0.5 px-3 text-sm/6  focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 dark:bg-slate-800 dark:border-indigo-950"
            >
              <option value="English">ENG</option>
              <option value="French">FRN</option>
              <option value="Spins">SPR</option>
            </Select>
          </Field> */}
          {/* NOT FOR PRODUCTION */}
          {/* <Field>
            <Select
              name="language"
              defaultValue="IND"
              className="block appearance-none rounded-2xl border-2  py-0.5 px-3 text-sm/6  focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 dark:bg-slate-800 dark:border-indigo-950"
            >
              <option value="IND">IND</option>
              <option value="USA">USA</option>
              <option value="JPN">JPN</option>
            </Select>
          </Field> */}
        </div>
        <div className="md:hidden cursor-pointer mx-2" onClick={handleClick}>
          {activeTab ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>
      <NewsTab />
    </div>
  );
}

export default Navbar;
