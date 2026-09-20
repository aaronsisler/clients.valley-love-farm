import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  { ignores: ["**/build/**", "**/.next/**", "**/node_modules/**"] },
  ...nextCoreWebVitals,
];

export default eslintConfig;
