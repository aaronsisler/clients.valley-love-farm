import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "../../atoms/input";
import { CLIENT_NAME } from "../../config";
import { sendEmail } from "../../utils";
import { ContactEmailSentWidget } from "../../widgets/contact-email-sent-widget";

import styles from "./contact-form.module.scss";

const errorMessages = {
  emailAddress: "Please enter a valid email address",
  name: "Please enter your name",
  phoneNumber: "Phone number must be 10 digits",
};

const contactSchema = yup.object().shape({
  emailAddress: yup.string().email().required(),
  name: yup.string().required(),
  phoneNumber: yup
    .string()
    .test(
      "is-phone-number",
      errorMessages.phoneNumber,
      (value) =>
        value.trim() === "" || (value.match(/^[0-9]*$/) && value.length === 10)
    ),
});

const useFormOptions = {
  mode: "onBlur",
  resolver: yupResolver(contactSchema),
};

const ContactForm = () => {
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [sendButtonText, setSendButtonText] = useState("Send It");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(useFormOptions);

  if (emailSent) {
    return <ContactEmailSentWidget />;
  }

  const onSubmit = ({ emailAddress, message, name, phoneNumber }) => {
    setIsSendButtonDisabled(true);
    setSendButtonText("Sending");

    const formData = {
      emailAddress,
      message,
      name,
      phoneNumber,
      subject: `${CLIENT_NAME}: Contact Submission`,
    };

    const done = () => {
      setEmailSent(true);
    };
    const fail = () => {
      setSendButtonText("Please try again");
      setIsSendButtonDisabled(false);
    };

    sendEmail(formData, done, fail);
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.contactForm__title}>Send a message</h2>
      <Input
        className={styles.contactForm__input}
        errorMessage={errorMessages.name}
        hasError={Boolean(errors?.name)}
        label="Name"
        name="name"
        registerProp={register}
      />
      <Input
        className={styles.contactForm__input}
        errorMessage={errorMessages.emailAddress}
        hasError={Boolean(errors?.emailAddress)}
        label="Email"
        name="emailAddress"
        registerProp={register}
      />
      <Input
        className={styles.contactForm__input}
        errorMessage={errorMessages.phoneNumber}
        hasError={Boolean(errors?.phoneNumber)}
        label="Phone (Digits only, no dashes, etc.)"
        name="phoneNumber"
        registerProp={register}
      />
      <textarea
        className={styles.contactForm__message}
        name="message"
        placeholder="What's on your mind?"
        {...register("message")}
        rows="4"
      />
      <input
        className={styles.contactForm__button}
        disabled={
          isSendButtonDisabled ||
          !watch("name") ||
          !watch("emailAddress") ||
          Object.keys(errors).length
        }
        type="submit"
        value={sendButtonText}
      />
    </form>
  );
};

export { ContactForm };
