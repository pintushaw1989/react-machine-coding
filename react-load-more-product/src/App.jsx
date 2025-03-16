import "./App.css";
import LoadMoreProducts from "./components/LoadMoreProducts";

function App() {
  return (
    <LoadMoreProducts
      url={"https://dummyjson.com/products"}
      productPerPage={10}
    />
  );
}

export default App;
