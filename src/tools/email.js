import { validate } from 'email-validator';
import { apiGatewayEmailURL, apiGatewayToken, pointOfContactEmail } from '../config';

const createRequest = (data, done, fail) => {
    const emailProperties = {
        pointOfContactEmail,
        name: "",
        website: "",
        emailAddress: "",
        phoneNumber: "",
        message: "",
        ...data
    }
    const request = new XMLHttpRequest();
    request.onload = function () {
        done();
    }
    request.onerror = function () {
        fail();
    }
    request.open('POST', apiGatewayEmailURL, true);
    request.setRequestHeader("X-Api-Key", apiGatewayToken);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(emailProperties));
}

export const isEmailValid = (emailAddress) => validate(emailAddress);

export const sendEmail = (data, done, fail) => {
    createRequest(data, done, fail);
}
