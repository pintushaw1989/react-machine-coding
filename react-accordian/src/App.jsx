import Accordian from "./components/Accordian.jsx";
import data from "./assets/data";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div>
        <h1>React Single/Multi Select Accordian</h1>
      </div>
      <Accordian data={data} />
    </div>
  );
}

export default App;
