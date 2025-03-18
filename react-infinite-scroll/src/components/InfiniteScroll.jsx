import React, { useState, useEffect } from "react";

import "./InfiniteScroll.css";

const InfiniteScroll = ({ url, productPerPage }) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${url}?skip=${productPerPage * (page - 1)}&&limit=${productPerPage}`
      );
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setProducts((prev) => [...prev, ...data.products]);
        setTotal(data.total);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = (e) => {
    // console.log("height:", document.documentElement.scrollHeight); // total scroll hight
    // console.log("Top:", document.documentElement.scrollTop); // scroll to react top
    // console.log("Window:", window.innerHeight); // current window height

    // top + window + 1 > height
    e.preventDefault();
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="product-list">
        {products && products.length > 0
          ? products.map((item) => (
              <div className="product-card" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      {products.length === total ? (
        <p>No more product to show!</p>
      ) : (
        loading && <div>Loading...</div>
      )}
    </>
  );
};

export default InfiniteScroll;
