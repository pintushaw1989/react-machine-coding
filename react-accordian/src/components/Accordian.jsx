import React, { useState } from "react";
import "./Accordian.css";

const Accordian = ({ data }) => {
  const [selectionType, setSelectionType] = useState("single");
  const [selectedId, setSelectedId] = useState(null);
  const [multiSelectedId, setMultiSelectedId] = useState([]);

  const handleSelect = (id) => {
    if (selectionType === "single") {
      setMultiSelectedId([]);
      id === selectedId ? setSelectedId(null) : setSelectedId(id);
    } else {
      setSelectedId(null);
      const multiIds = [...multiSelectedId];

      multiIds.includes(id)
        ? multiIds.splice(multiIds.indexOf(id), 1)
        : multiIds.push(id);

      setMultiSelectedId(multiIds);
    }
  };

  const onOptionChange = (e) => {
    // Reset both the selection
    setSelectedId(null);
    setMultiSelectedId([]);

    //Set the selected value
    setSelectionType(e.target.value);
  };

  return (
    <div className="wrapper">
      <div>
        <input
          type="radio"
          name="selection"
          value="single"
          id="single"
          checked={selectionType === "single"}
          onChange={onOptionChange}
        />
        <label htmlFor="single">Single Select</label>
        <input
          type="radio"
          name="selection"
          value="multi"
          id="multi"
          checked={selectionType === "multi"}
          onChange={onOptionChange}
        />
        <label htmlFor="multi">Multi Select</label>
      </div>
      {data.map((item) => (
        <div key={item.id} className="accordian-item">
          <div className="question" onClick={() => handleSelect(item.id)}>
            {item.question}
            <span>
              {selectedId === item.id || multiSelectedId.includes(item.id)
                ? "-"
                : "+"}
            </span>
          </div>
          {selectionType === "single"
            ? selectedId === item.id && <p>{item.answer}</p>
            : multiSelectedId.includes(item.id) && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
