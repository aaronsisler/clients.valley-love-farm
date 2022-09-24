import React, { useState } from "react";
import { BackgroundShape } from "../../atoms/background-shape";
import { ContactFormWidget } from "../../widgets/contact-form-widget";
import { ContactMethodModal } from "../../components/contact-method-modal";
import { ContactPhoneWidget } from "../../widgets/contact-phone-widget";

import styles from "./contact-container.module.scss";

const ContactContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(undefined);

  const determineContactModalChild = () => {
    switch (modalContent) {
      // case "Visit Us":
      //   return <div>Vist Us</div>;
      case "Call Us":
        return <ContactPhoneWidget />;
      case "Write Us":
        return <ContactFormWidget />;
      default:
        return <React.Fragment></React.Fragment>;
    }
  };

  const handleOpen = (method) => {
    setModalContent(method);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactContainer__title}>
        What works best for you?
      </h1>
      <BackgroundShape />
      <section className={styles.contactContainer__contactMethods}>
        {/* <button
          className={styles.contactMethodButton}
          onClick={() => handleOpen("Visit Us")}
        >
          Visit Us
        </button> */}
        <button
          className={styles.contactMethodButton}
          onClick={() => handleOpen("Call Us")}
        >
          Call Us
        </button>
        <button
          className={styles.contactMethodButton}
          onClick={() => handleOpen("Write Us")}
        >
          Write Us
        </button>
        <ContactMethodModal isOpen={isModalOpen} onClose={handleClose}>
          {determineContactModalChild()}
        </ContactMethodModal>
      </section>
    </div>
  );
};

export { ContactContainer };
