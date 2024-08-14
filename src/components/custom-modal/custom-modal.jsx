import React from "react";
import NewListItem from "../todo-component/new-list-item.component";

export const CustomModal = ({ openModal, closeModal, component }) => {
  const handleCloseModal = (e) => {
    const target = e.target
    if (target.id === "modal-backdrop") closeModal();
  };

  if (!openModal) return null;

  return (
    <div
      id="modal-backdrop"
      className="bg-black fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[99]"
      onClick={handleCloseModal}
    >
      <div className="w-[85%] md:w-1/2">
        {/* <NewListItem closeModal={closeModal} /> */}
        {component}
      </div>
    </div>
  );
};