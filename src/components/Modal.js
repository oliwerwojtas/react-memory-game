import { useEffect, useState } from "react";
import "./Modal.css";
const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    toggleModal();
  }, []);

  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay" onClick={toggleModal}></div>
          <div className="modal-content">
            <h2 className="modal-header">Welcome!</h2>
            <p className="modal-text">This is a simple memory game with NBA teams logo.</p>
            <p className="modal-text">Let's have some fun!</p>
            <button className="close-modal" onClick={toggleModal}>
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
