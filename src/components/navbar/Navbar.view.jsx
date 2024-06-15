import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { HashLink } from "react-router-hash-link";
import NavbarLinks from "./NavbarLinks";
import NavbarPopup from "./NavbarPopup";

const NavbarView = ({ conceptLinks }) => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  function handleToggleNavbar() {
    setToggleNavbar(!toggleNavbar);
  }

  return (
    <div className="fixed w-full h-16 px-4 flex justify-between items-center bg-gradient-to-r from-[#FF76CE] to-[#dd55ad] shadow-md z-20">
      <div className="flex flex-1">
        <HashLink
          smooth
          to={"/#header"}
          className="text-white text-xl font-bold font-fugaz pl-2"
          style={{ textShadow: "2px 1px 4px rgba(18, 0, 0, 0.85)" }}
        >
          CONCEPT VISUALIZER
        </HashLink>
      </div>
      {/* Menu for large screen */}
      <div className="hidden lg:flex items-center">
        <NavbarLinks list={conceptLinks} />
      </div>
      {/* Menu for mobile */}
      <div className="flex lg:hidden items-center text-white">
        <div onClick={handleToggleNavbar}>
          <CiMenuFries />
        </div>
        {toggleNavbar ? (
          <NavbarPopup setToggleNavbar={setToggleNavbar} list={conceptLinks} />
        ) : null}
      </div>
    </div>
  );
};

export default NavbarView;
