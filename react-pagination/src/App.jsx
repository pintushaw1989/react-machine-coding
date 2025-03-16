import ProductList from "./components/ProductList.jsx";

import "./App.css";

function App() {
  return (
    <ProductList url={"https://dummyjson.com/products"} productPerPage={20} />
  );
}

export default App;
