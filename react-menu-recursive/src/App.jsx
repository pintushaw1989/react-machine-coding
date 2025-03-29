import TreeView from "./components/TreeView";
import { menus } from "./assets/data";
import "./App.css";

function App() {
  return (
    <div className="app">
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
