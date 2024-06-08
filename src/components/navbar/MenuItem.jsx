import React from "react";
import MenuList from "./MenuList";
import { HashLink } from "react-router-hash-link";

function MenuItem({ item }) {
  return (
    <li className="text-white">
      <details>
        <summary>
          <HashLink smooth to={item.link}>
            {item.name}
          </HashLink>
        </summary>
        {item && item.children && item.children.length > 0 ? (
          <MenuList list={item.children} />
        ) : null}
      </details>
    </li>
  );
}

export default MenuItem;
