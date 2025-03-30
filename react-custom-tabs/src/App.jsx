import { useState } from "react";
import Profile from "./cumponents/Profile";
import Details from "./cumponents/Details";
import Settings from "./cumponents/Settings";

import "./App.css";

function App() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabConfig = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Details",
      component: Details,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const handleClick = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  const SelectedComponent = tabConfig[selectedTab].component;

  return (
    <div className="wrapper">
      <div className="tabs">
        {tabConfig.map((tab, index) => (
          <div
            className={`tab-name ${selectedTab === index ? "active" : ""}`}
            key={index}
            onClick={() => handleClick(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="content">
        <SelectedComponent />
      </div>
      <div className="submit-button">
        {selectedTab === tabConfig.length - 1 && <button>Submit</button>}
      </div>
    </div>
  );
}

export default App;
