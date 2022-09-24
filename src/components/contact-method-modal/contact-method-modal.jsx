import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { CloseX } from "../../atoms/close-x";

import styles from "./contact-method-modal.module.scss";

const ContactMethodModal = ({ isOpen, onClose, children }) => (
  <Modal
    open={isOpen}
    onClose={onClose}
    aria-labelledby="Modal for selected contact method"
    aria-describedby="Information for selected contact method"
    className={styles.contactMethodModal}
  >
    <Box className={styles.contactMethodModal__wrapper}>
      <div className={styles.contactMethodModal__wrapperContent}>
        <CloseX
          className={styles.contactMethodModal__close}
          onClick={onClose}
        />
        {children}
      </div>
    </Box>
  </Modal>
);

export { ContactMethodModal };
