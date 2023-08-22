import React from "react";

import styles from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode
  isShowing : boolean
  hide: () => void
}


const Modal = ({ isShowing, hide, children }: ModalProps) => {
  return (
    <>
      {isShowing ? (
        <>
          <div className={`${styles["modal-overlay"]}`} />
          <div
            className={`${styles["modal-wrapper"]}`}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className={`${styles["modal"]}`}>
              <div className={`${styles["modal-header"]}`}>
                <h2 className={`${styles["modal-title"]}`}>Official Trailer</h2>
                <button
                  type="button"
                  className={`${styles["modal-close-button"]}`}
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {children}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
