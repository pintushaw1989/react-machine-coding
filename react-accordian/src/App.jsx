import Accordian from "./components/Accordian.jsx";
import data from "./assets/data";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Accordian data={data} />
    </div>
  );
}

export default App;
