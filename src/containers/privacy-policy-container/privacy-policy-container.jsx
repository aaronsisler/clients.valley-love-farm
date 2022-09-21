import React from "react";

import { privacyPolicyContent } from "../../content/privacy-policy";

import styles from "./privacy-policy-container.module.scss";

const PrivacyPolicyContainer = () => (
  <div className={styles.privacyPolicyContainer}>
    <h1 className={styles.privacyPolicyContainer__title}>
      Privacy Policy for {privacyPolicyContent.companyWebsite}
    </h1>
    <section className={styles.privacyPolicyContainer__policies}>
      {privacyPolicyContent.policies.map((policyLine, index) => {
        if (policyLine.isBold) {
          return (
            <React.Fragment key={index}>
              <br />
              <div className={styles.policy__title}>{policyLine.text}</div>
            </React.Fragment>
          );
        }
        return (
          <div className={styles.policy__content} key={index}>
            {policyLine.text}
          </div>
        );
      })}
    </section>
  </div>
);

export { PrivacyPolicyContainer };
