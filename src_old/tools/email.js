import axios from "axios";
import { validate } from "email-validator";
import {
  pointOfContactEmail,
  servicesApiGatewayURL,
  servicesApiGatewayToken
} from "../config";

const headers = {
  "Content-Type": "application/json",
  "X-Api-Key": servicesApiGatewayToken
};

const emailOptions = { headers };

export const isEmailValid = emailAddress => validate(emailAddress);

export const sendEmail = async (data, done, fail) => {
  const emailData = { pointOfContactEmail, ...data };

  try {
    await axios.post(servicesApiGatewayURL, emailData, emailOptions);
    done();
  } catch {
    fail();
  }
};
