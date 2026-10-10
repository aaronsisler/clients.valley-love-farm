// Fails the build when a required NEXT_PUBLIC_* variable is missing.
// Next.js only inlines `process.env.NEXT_PUBLIC_X` when written literally,
// so callers pass the value in rather than this looking it up by name.
const requireEnv = (name, value) => {
  if (!value) {
    throw new Error(`${name} must be set at build time`);
  }
  return value;
};

// Client Name
export const CLIENT_NAME = "Valley Love Farm";

// Email
// Injected at build time (see the GitHub workflows): the "to" address
export const POINT_OF_CONTACT_EMAIL = requireEnv(
  "NEXT_PUBLIC_POINT_OF_CONTACT_EMAIL",
  process.env.NEXT_PUBLIC_POINT_OF_CONTACT_EMAIL,
);

// CDN URL
export const CDN_URL =
  "https://cdn-e-and-b-solutions.s3.amazonaws.com/valley-love-farm";

// Google Maps
export const CONTACT_ADDRESS = ["305 Teal Lake Dr", "Holly Springs, NC 27540"];
export const GOOGLE_MAPS_LOCATION =
  "https://www.google.com/maps/place/Valley+Love+Farm/@35.6345421,-78.8258538,17z/data=!3m1!4b1!4m5!3m4!1s0x89ac8e398fca3d89:0x1beac6300ebfef9b!8m2!3d35.6345421!4d-78.8236651";

// Phone number
export const CONTACT_PHONE_NUMBER = "(919) 886-9101";

// Services Gateway
// Injected at build time (see the GitHub workflows): "beta" or "prod"
const DEPLOYED_ENVIRONMENT = requireEnv(
  "NEXT_PUBLIC_DEPLOYED_ENVIRONMENT",
  process.env.NEXT_PUBLIC_DEPLOYED_ENVIRONMENT,
);
export const SERVICES_GATEWAY_URL = `https://services.eandbsolutions.com/${DEPLOYED_ENVIRONMENT}`;

// Email Path
export const EMAIL_PATH = "email/v2";
