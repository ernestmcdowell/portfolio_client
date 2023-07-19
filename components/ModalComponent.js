import React from "react";

const ModalComponent = ({ image, onClose }) => {
  return (
    <div>
      <dialog id="image_modal" className="modal container" open>
        <div className="container">
          <img
            src={image}
            alt="Adventure Photo"
            className="w-full h-full object-cover"
          />
        </div>
        <form method="dialog" className="modal-backdrop" onClick={onClose}>
          <button onClick={onClose}>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default ModalComponent;
