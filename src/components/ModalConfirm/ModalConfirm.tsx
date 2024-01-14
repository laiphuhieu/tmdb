import React from "react";

interface ModalConfirmState {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({ isOpen, onConfirm, onCancel }: ModalConfirmState) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "visible" : "hidden"
      }`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-[24px] rounded shadow-[0_4px_6px_-10x_rgba(0,0,0,0.1)] z-10">
        <p className="text-[18px] font-semibold mb-[16px]">Are you sure?</p>
        <div className="flex justify-end">
          <button
            className="mr-[8px] px-[16px] py-[8px] text-black rounded hover:bg-black hover:text-white transition-colors duration-300"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-[16px] py-[8px] text-red rounded border-[2px] border-solid border-red hover:bg-red hover:text-white transition-colors duration-300"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
