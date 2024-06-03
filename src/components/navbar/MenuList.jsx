import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
  return (
    <ul className="menu menu-horizontal">
      {list && list.length
        ? list.map((listItem) => {
            return <MenuItem item={listItem} />;
          })
        : null}
    </ul>
  );
}

export default MenuList;
