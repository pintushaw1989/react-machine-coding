import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal.jsx";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen((isModalOpen) => !isModalOpen);
  };
  return (
    <div>
      <button onClick={handleModal}>Open Modal</button>
      {isModalOpen && (
        <Modal
          header={<h2>Header</h2>}
          content={<div>This is body content</div>}
          footer={<h4>Footer</h4>}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}

export default App;
