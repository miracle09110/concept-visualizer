import React from "react";
import { Link } from "react-router-dom";

function NavbarPopup({ list = [], setToggleNavbar }) {
  function handleClickLink() {
    setToggleNavbar(false);
  }
  return (
    <div className="absolute top-16 right-0 w-[16rem] py-1 px-4 bg-neutral-800 text-neutral-300 h-screen overflow-scroll pb-16">
      {list.map((item) => {
        return (
          <div key={item.name} className="py-2">
            <span className="font-bold">{item.name}</span>
            <ul className="pl-4">
              {item && item.children && item.children.length
                ? item.children.map((child) => {
                    return (
                      <li key={child.name} className="list-none py-1">
                        <Link to={child.link} onClick={handleClickLink}>
                          {child.name}
                        </Link>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default NavbarPopup;
