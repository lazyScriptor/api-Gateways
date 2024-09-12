import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { MdOutlineArrowDropDown } from "react-icons/md";
import DarkMode from "./DarkMode";
const menuLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Shop", link: "/#shop" },
  { id: 3, name: "About", link: "/#about" },
  { id: 4, name: "Blogs", link: "/#blog" },
];
const dropDownLinks = [
  { id: 1, name: "Trending Products", link: "/trending" },
  { id: 2, name: "Best Selling", link: "/best-selling" },
  { id: 3, name: "Top Rated", link: "/top-rated" },
];
function NavbarNew() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* {logo and links } */}
          <div className="flex gap-4 items-center">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            {/* Menu items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {menuLinks.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {item.name}{" "}
                    </a>
                  </li>
                ))}
                {/* Dropdown */}
                <li className="group relative cursor-pointer">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] justify-center text-gray-500 dark:hover:text-white py-2"
                  >
                    <span className="truncate">Quick links</span>
                    <span>
                      <MdOutlineArrowDropDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Drop down links */}
                  <div className="absolute z-[9999] transition-all duration-200 hidden group-hover:block w-[200px] rounded-md bh-white shadow-lg dark:bg-gray-900 p-2 text-white ">
                    <ul className="space-y-2">
                      {dropDownLinks.map((item, index) => (
                        <li
                          key={index}
                          className="text-gray-500 hover:text-black dark:hover:text-white transition-all duration-200 hover:bg-primary/20 p-1 rounded"
                        >
                          <a href={item.link}>{item.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar Section */}
            <div className="flex justify-between items-center relative group ">
              <input type="text" placeholder="Search" className="search-bar" />
              <CiSearch className="group-hover:text-primary text-xl text-gray-600 dark:text-gray-400 absolute top-1-translate-y-1/2 right-3 duration-200" />
            </div>
            {/* Outer-button section */}

            <button className="relative p-3">
              <CiShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-primary text-white rounded-full absolute top-1 right-1 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            <div>
              <DarkMode />
            </div>
            {/* Dark mode =section */}
            <div></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default NavbarNew;
