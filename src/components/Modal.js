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
            <h2>Hello modal</h2>
            <p>eqrqwrqwrqwrqwrqrqw</p>
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
