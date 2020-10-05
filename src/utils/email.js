import axios from "axios";
import { validate } from "email-validator";
import { POINT_OF_CONTACT_EMAIL, SERVICES_GATEWAY_URL } from "../config";

const headers = {
  "Content-Type": "application/json"
};

const emailOptions = { headers };

export const isEmailValid = emailAddress => validate(emailAddress);

export const sendEmail = async (data, done, fail) => {
  const emailData = { pointOfContactEmail: POINT_OF_CONTACT_EMAIL, ...data };

  try {
    await axios.post(`${SERVICES_GATEWAY_URL}/email`, emailData, emailOptions);
    done();
  } catch (e) {
    fail();
  }
};
