import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { HashLink } from "react-router-hash-link";
import MenuList from "./MenuList";

const NavbarView = ({ conceptLinks }) => {
  console.log(conceptLinks);
  return (
    <div className="fixed w-full h-16 px-4 flex justify-between items-center bg-gradient-to-r from-[#FF76CE] to-[#dd55ad] shadow-md z-20">
      <div className="flex flex-1">
        <HashLink
          smooth
          to={"/#header"}
          className="text-white text-xl font-bold font-fugaz pl-4"
          style={{ textShadow: "2px 1px 4px rgba(18, 0, 0, 0.85)" }}
        >
          CONCEPT VISUALIZER
        </HashLink>
      </div>
      {/* Menu for large screen */}
      <div className="hidden lg:flex items-center">
        <MenuList list={conceptLinks} />
      </div>
      {/* Menu for mobile */}
      <div className="flex text-white">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <CiMenuFries />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0"
          >
            <MenuList list={conceptLinks} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarView;
