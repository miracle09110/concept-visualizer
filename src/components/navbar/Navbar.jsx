import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <>
      <div className="lg:hidden z-50 block absolute top-16 w-full left-0 right-0 bg-primary backdrop-blur-lg bg-opcity-30 transition-300">
        <ul className="text-center text-xl p-5">
          <Link spy="true" smooth="true" to="/">
            <li className="my-2 py-2 border-b border-primary hover:rounded hover:text-secondary hover:shadow hover:bg-slate-800 ">
              Home
            </li>
          </Link>
          <Link spy="true" smooth="true" to="/" className="">
            <div className="group">
              <li className="my-2 py-2 border-b border-primary hover:rounded hover:text-secondary hover:shadow hover:bg-slate-800">
                <button>
                  <span className="flex hover:text-secondary border-b-2 border-slate-300 hover:bg-slate-800 transition rounded mx-2 cursor-pointer">
                    Algorithms <IoIosArrowDropdown className="m-1" />
                  </span>
                </button>
              </li>
              <div className="hidden group-hover:flex flex-col border-b border-primary rounded pl-3 pr-4 py-5 w-100 z-20 bg-slate-800 text-secondary duration-300">
                <div className="grid grid-cols-3 md-grid-cols-4 gap-5">
                  <div className="flex flex-col">
                    <h3 className="text-[0.6em] font-bold hover:underline">
                      <HashLink to="/#sort">Sorting</HashLink>
                    </h3>
                    <Link
                      to="/bubble"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      Bubble Sort
                    </Link>
                    <Link
                      to="/selection"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      Selection Sort
                    </Link>
                    <Link
                      to="/insertion"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      Insertion Sort
                    </Link>
                    <Link
                      to="/quick"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      Quick Sort
                    </Link>
                    <Link
                      to="/merge"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      Merge Sort
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[0.6em] font-bold hover:underline">
                      <HashLink to="/#search">Searching</HashLink>
                    </h3>
                    <Link
                      to="/linear"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      Linear Search
                    </Link>
                    <Link
                      to="/depth"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      Depth first
                    </Link>
                    <Link
                      to="/width"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      Width first
                    </Link>
                    <Link
                      to="/jump"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      Jump Search
                    </Link>
                    <Link
                      to="/binary"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      Binary Search
                    </Link>
                    <Link
                      to="/ternary"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      Ternary Search
                    </Link>
                    <Link
                      to="/exponential"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      Exponential Search
                    </Link>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[0.6em] font-bold hover:underline">
                      <HashLink to="/#path-finding">Path Finding</HashLink>
                    </h3>
                    <Link
                      to="/cycle-detection"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      Cycle detection
                    </Link>
                    <Link
                      to="/dijkstra"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      Dijkstra’s algorithm
                    </Link>
                    <Link
                      to="/a-star"
                      className="hover:underline text-[0.5em] mx-3"
                    >
                      A* algorithm
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <HashLink to="/#react">
            <div className="group">
              <li className="my-2 py-2 border-b border-primary hover:rounded hover:text-secondary hover:shadow hover:bg-slate-800">
                <button className="hover:text-secondary border-b-2 border-slate-300 hover:bg-slate-800 transition rounded mx-2 cursor-pointer">
                  <span className="flex">
                    React Concepts <IoIosArrowDropdown className="m-1" />
                  </span>
                </button>
              </li>
              <div className="hidden group-hover:flex flex-col rounded p-5 z-20 bg-slate-800 text-secondary duration-300">
                <div className="flex flex-col">
                  <h3 className="text-[0.6em] font-bold hover:underline mx-3">
                    <Link to="/state-props">State and Props</Link>
                  </h3>
                  <h3 className="text-[0.6em] font-bold hover:underline mx-3">
                    <Link to="/use-context">useContext</Link>
                  </h3>
                </div>
              </div>
            </div>
          </HashLink>
          <HashLink to="/#nodejs">
            <div className="group">
              <li className="my-2 py-2 border-b border-primary hover:rounded hover:text-secondary hover:shadow hover:bg-slate-800">
                <button className="hover:text-secondary border-b-2 border-slate-300 hover:bg-slate-800 transition rounded mx-2 cursor-pointer">
                  <span className="flex">
                    Web Concepts <IoIosArrowDropdown className="m-1" />
                  </span>
                </button>
              </li>
              <div className="hidden group-hover:flex flex-col rounded p-6 z-20 bg-slate-800 text-secondary duration-300">
                <div className="flex flex-col">
                  <Link
                    to="/server-client"
                    className="text-[0.6em] font-bold hover:underline mx-3"
                  >
                    <h3>Client-Server</h3>
                  </Link>

                  <h3 className="text-[0.6em] font-bold hover:underline mx-3">
                    <Link to="/rest-api">REST API</Link>
                  </h3>
                  <h3 className="text-[0.6em] font-bold hover:underline mx-3">
                    <Link to="/webhook">Webhook</Link>
                  </h3>
                </div>
              </div>
            </div>
          </HashLink>
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="flex items-center flex-1">
        <span className="text-lg font-bold">Concept Visualizer</span>
      </div>
      <div className="h-10vh justify-between z-50 text-black lg:py-5 pl-9 ">
        <div className="hidden lg:flex lg:flex-1 items-center justify-end font-normal">
          <div className="flex-10">
            <ul className="flex mx-2 text-[1.2em]">
              <Link spy="true" smooth="true" to="/">
                <li className="mx-6 hover:text-secondary transition rounded border-b-2 border-slate-300 hover:border-secondary hover:shadow hover:bg-slate-800 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link to="/">
                <div className="group">
                  <button className="hover:text-secondary border-b-2 border-slate-300 hover:bg-slate-800 transition rounded mx-6 cursor-pointer">
                    <span className="flex">
                      Algorithms <IoIosArrowDropdown className="m-1" />
                    </span>
                  </button>
                  <div
                    className="hidden group-hover:flex flex-col rounded absolute pl-3 pr-4 py-5
                  w-70 z-20 bg-slate-800 text-secondary duration-300"
                  >
                    <div className="grid grid-cols-3 md-grid-cols-4 gap-5">
                      <div className="flex flex-col">
                        <h3 className="text-[0.6em] font-bold hover:underline">
                          <HashLink to="/#sort">Sorting</HashLink>
                        </h3>
                        <Link
                          to="/bubble"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          Bubble Sort
                        </Link>
                        <Link
                          to="/selection"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          Selection Sort
                        </Link>
                        <Link
                          to="/insertion"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          Insertion Sort
                        </Link>
                        <Link
                          to="/quick"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          Quick Sort
                        </Link>
                        <Link
                          to="/merge"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          Merge Sort
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-[0.6em] font-bold hover:underline">
                          <HashLink to="/#search">Searching</HashLink>
                        </h3>
                        <Link
                          to="/linear"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          Linear Search
                        </Link>
                        <Link
                          to="/depth"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          Depth first
                        </Link>
                        <Link
                          to="/width"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          Width first
                        </Link>
                        <Link
                          to="/jump"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          Jump Search
                        </Link>
                        <Link
                          to="/binary"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          Binary Search
                        </Link>
                        <Link
                          to="/ternary"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          Ternary Search
                        </Link>
                        <Link
                          to="/exponential"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          Exponential Search
                        </Link>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-[0.6em] font-bold hover:underline">
                          <Link to="/#path-finding">Path Finding</Link>
                        </h3>
                        <Link
                          to="/cycle-detection"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          Cycle detection
                        </Link>
                        <Link
                          to="/dijkstra"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          Dijkstra’s algorithm
                        </Link>
                        <Link
                          to="/a-star"
                          className="hover:underline text-[0.5em] mx-3"
                        >
                          A* algorithm
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <HashLink to="/#react">
                <div className="group">
                  <button className="hover:text-secondary border-b-2 border-slate-300 hover:bg-slate-800 transition rounded mx-6 cursor-pointer">
                    <span className="flex">
                      React Concepts <IoIosArrowDropdown className="m-1" />
                    </span>
                  </button>
                  <div
                    className="hidden group-hover:flex flex-col rounded absolute p-6
                  w-[13rem] z-20 bg-slate-800 text-secondary duration-300"
                  >
                    <div className="flex flex-col">
                      <h3 className="text-[0.6em] font-bold hover:underline mx-3">
                        <Link to="/state-props">State and Props</Link>
                      </h3>

                      <h3 className="text-[0.6em] font-bold hover:underline mx-3">
                        <Link to="/use-context">useContext</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </HashLink>
              <HashLink to="/#nodejs">
                <div className="group">
                  <button className="hover:text-secondary border-b-2 border-slate-300 hover:bg-slate-800 transition rounded mx-6 cursor-pointer">
                    <span className="flex">
                      Web Concepts <IoIosArrowDropdown className="m-1" />
                    </span>
                  </button>
                  <div className="hidden group-hover:flex flex-col rounded absolute w-[13rem] p-6 z-20 bg-slate-800 text-secondary duration-300">
                    <div className="flex flex-col">
                      <Link
                        to="/server-client"
                        className="text-[0.6em] font-bold hover:underline mx-3"
                      >
                        <h3>Client-Server</h3>
                      </Link>

                      <h3 className="text-[0.6em] font-bold hover:underline mx-3">
                        <Link to="/rest-api">REST API</Link>
                      </h3>
                      <h3 className="text-[0.6em] font-bold hover:underline mx-3">
                        <Link to="/webhook">Webhook</Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </HashLink>
            </ul>
          </div>
        </div>
      </div>
      <div className="block lg:hidden items-center">
        {click && content}
        <button className="transition bg:secondary mx-10" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
