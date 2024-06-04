import React from "react";
import MenuList from "./MenuList";
import { Link } from "react-router-dom";

function MenuItem({ item }) {
  return (
    <li className="text-white">
      <details>
        <summary>
          <Link to={item.link}>{item.name}</Link>
        </summary>
        {item && item.children && item.children.length > 0 ? (
          <MenuList list={item.children} />
        ) : null}
      </details>
    </li>
  );
}

export default MenuItem;
