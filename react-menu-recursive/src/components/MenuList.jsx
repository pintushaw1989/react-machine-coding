import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list }) => {
  // console.log(list);
  return (
    <ul className="menu-list">
      {list && list.length > 0
        ? list.map((listItem) => (
            <MenuItem key={listItem.label} item={listItem} />
          ))
        : null}
    </ul>
  );
};

export default MenuList;
