import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ item }) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState({});

  const handleToggle = (label) => {
    setSelectedMenuItem((prev) => ({
      ...prev,
      [label]: !selectedMenuItem[label],
    }));
  };

  // console.log(selectedMenuItem);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggle(item.label)}>
            {selectedMenuItem[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      selectedMenuItem[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
