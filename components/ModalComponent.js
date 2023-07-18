import React from "react";

const ModalComponent = ({ image, onClose }) => {
  return (
    <div>
      <dialog id="my_modal_2" className="modal" open>
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
    <img src={image} alt="Adventure Photo" />
  </form>
  <form method="dialog" className="modal-backdrop" onClick={onClose}>
    <button onClick={onClose}>close</button>
  </form>
</dialog>
    </div>
  );
};

export default ModalComponent;
