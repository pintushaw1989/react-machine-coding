import React from "react";
import "./Modal.css";

const Modal = ({ id, header, content, footer, setIsModalOpen }) => {
  return (
    <div id={id || "modal"} className="modal">
      <div className="modal-content">
        <div className="header">
          <span className="close-button" onClick={() => setIsModalOpen(false)}>
            &times;
          </span>
          {header ? header : <h2>This is Header</h2>}
        </div>
        <div className="content">
          {content ? content : <p>This is content</p>}
        </div>
        <div className="footer">
          {footer ? footer : <h4>This is footer</h4>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
