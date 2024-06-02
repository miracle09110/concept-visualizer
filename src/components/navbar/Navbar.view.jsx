import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { HashLink } from "react-router-hash-link";

const NavbarView = ({ conceptLinks }) => {
  const concepts = conceptLinks.map((item) => {
    return (
      <li key={item.category}>
        {item.children ? (
          <details>
            <summary>{item.category}</summary>
            <ul>
              <li>Sort</li>
            </ul>
          </details>
        ) : (
          <HashLink to={item.link}>{item.category}</HashLink>
        )}
      </li>
    );
  });

  return (
    <div className="h-16 flex justify-between items-center bg-[#FF76CE]">
      <div className="flex flex-1">
        <Link to={"/"} className="btn btn-ghost text-xl font-bold">
          Concept Visualizer
        </Link>
      </div>
      <div className="hidden lg:flex items-center">
        <ul className="menu menu-horizontal">
          {concepts}
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="flex">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <CiMenuFries />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarView;
