import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { HashLink } from "react-router-hash-link";

function NavbarLinks({ list = [] }) {
  return (
    <div className="flex text-white">
      {list.map((item) => {
        return (
          <div
            key={item.name}
            className="flex gap-1 items-center px-2 py-5 hover:bg-[#bb4491] transition-colors"
          >
            <HashLink smooth to={item.link}>
              {item.name}
            </HashLink>{" "}
            <IoIosArrowDropdown />
          </div>
        );
      })}
    </div>
  );
}

export default NavbarLinks;
