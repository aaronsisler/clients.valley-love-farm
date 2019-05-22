import ReactGA from "react-ga";
import { analyticsTrackingId } from "../config";

const eventTestObject = {
  category: "Test Category",
  action: "Test Action",
  label: "Test Label"
};

export const initializeAnalytics = () => {
  ReactGA.initialize(analyticsTrackingId);
};

export const handlePageView = (pageUrl = window.location.pathname) => {
  ReactGA.pageview(pageUrl);
};

export const handleModalView = modalDetail => {
  ReactGA.modalview(modalDetail);
};

export const handleEvent = event => {
  ReactGA.event({
    ...event
  });
};

export const handleTestEvent = () => {
  ReactGA.event(eventTestObject);
};
