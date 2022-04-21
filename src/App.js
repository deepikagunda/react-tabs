import Tabs from "./components/Tabs";
function App() {
  return (
    <div className="App">
      <Tabs
        prefix="homepage"
        selectedTab={0}
        tabList={[
          {
            id: "tab1",
            content: "tab content 1",
            prefix: "tab1",
            label: "Tab 1",
          },
          {
            id: "tab2",
            content: "tab content 2",
            prefix: "tab2",
            label: "Tab 2",
          },
          {
            id: "tab3",
            content: "tab content 3",
            prefix: "tab3",
            label: "Tab 3",
          },
        ]}
      />
    </div>
  );
}

export default App;
