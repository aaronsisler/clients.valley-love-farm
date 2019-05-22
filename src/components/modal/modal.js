import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import "./modal.scss";

const Modal = ({ children, isOpen, onClose, title }) => {
  ReactModal.setAppElement("#root");

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={200}
      className="modal"
      overlayClassName="modal__overlay"
    >
      {title && <div className="modal__title">{title}</div>}
      {children}
      <div className="modal__close">
        <button className="modal__close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </ReactModal>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default Modal;
