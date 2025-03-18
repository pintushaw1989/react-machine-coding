import InfiniteScroll from "./components/InfiniteScroll";
import "./App.css";

function App() {
  return (
    <div className="infinite-scroll">
      <h1>React Infinite Scroll</h1>
      <InfiniteScroll
        url={"https://dummyjson.com/products"}
        productPerPage={10}
      />
    </div>
  );
}

export default App;
