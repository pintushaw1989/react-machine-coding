import React, { useEffect, useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleScroll = () => {
    // total document/content height
    const documentHeight = document.documentElement.scrollHeight;
    // user window height
    const clienWindowHeight = document.documentElement.clientHeight;
    // how much user can scroll
    const howMuchScrolled = document.documentElement.scrollTop;

    // total scrollable height
    const scrollableHeight = documentHeight - clienWindowHeight;

    setScrollPercentage((howMuchScrolled / scrollableHeight) * 100);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>Scroll Indicator</h1>
        <div className="scroll-indicator-container">
          <div
            className="scroll-progress"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="content">
        {data && data.length > 0
          ? data.map((product) => <div key={product.id}>{product.title}</div>)
          : ""}
      </div>
    </div>
  );
};

export default ScrollIndicator;
