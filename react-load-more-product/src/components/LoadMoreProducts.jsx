import React, { useEffect, useState } from "react";

import "./LoadMoreProducts.css";

const LoadMoreProducts = ({ url, productPerPage }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [productCount, setProductCount] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${url}?skip=${productPerPage * (page - 1)}&&limit=${productPerPage}`
      );
      const data = await response.json();

      console.log(data);

      if (data && data.products && data.products.length > 0) {
        setProducts((prev) => [...prev, ...data.products]);
        setProductCount(data.total);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div className="container">
      <h1>React Load More Products</h1>
      <div className="product-list">
        {products && products.length > 0
          ? products.map((product, index) => (
              <div key={index} className="product-card">
                <img src={product.thumbnail} alt={product.title} />
                <p>{product.title}</p>
              </div>
            ))
          : null}
      </div>
      <button
        className="load-more-button"
        disabled={page === Math.ceil(productCount / productPerPage)}
        onClick={() => setPage(page + 1)}
      >
        {loading ? "Loading...." : "Load More Products"}
      </button>
    </div>
  );
};

export default LoadMoreProducts;
