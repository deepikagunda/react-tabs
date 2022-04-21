import { useState, useEffect } from "react";
import Tab from "./Tab";
import "./Tabs.css";
const Tabs = (props) => {
  //TODO:infra to add new tabs and edit content
  const [activeTab, setActiveTab] = useState(props.selectedTab);
  const [tabContent, setTabContent] = useState(props.tabList[0].content);

  const handleClick = (tabId) => {
    if (activeTab !== tabId) {
      setActiveTab(tabId);
      setTabContent(props.tabList[tabId].content);
    }
  };

  return (
    <div className="tabContainer">
      <ul className="Tabs" key={`tabs${props.prefix}`}>
        {props.tabList.map((tab, idx) => (
          <Tab
            key={`tab-${props.prefix}-${idx}`}
            details={tab}
            idx={idx}
            activeTab={activeTab}
            onClick={handleClick}
          ></Tab>
        ))}
      </ul>

      <div className="tabContent" key={`tabContent${props.prefix}`}>
        {tabContent}
      </div>
    </div>
  );
};
export default Tabs;
