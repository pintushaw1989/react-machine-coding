import React, { useEffect, useState } from "react";
import Pagination from "./Pagination.jsx";

import "./ProductList.css";

const ProductList = ({ url, productPerPage }) => {
  const [products, setProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [page]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${url}?skip=${productPerPage * (page - 1)}&&limit=${productPerPage}`
      );
      const data = await response.json();
      console.log(data);

      if (data && data.products && data.products.length > 0) {
        setProducts(data.products);
        setTotalProduct(data.total);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  // console.log(page);

  return (
    <div className="pagination-app">
      <h1>React Pagination App</h1>
      <div className="product-list">
        {products && products.length > 0
          ? products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <Pagination
        productCount={totalProduct}
        page={page}
        setPage={setPage}
        productPerPage={productPerPage}
      />
    </div>
  );
};

export default ProductList;
