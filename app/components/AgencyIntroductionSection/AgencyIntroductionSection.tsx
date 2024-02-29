"use client";
import * as React from "react";
import Image from "next/image";

import styles from "./AgencyIntroductionSection.module.scss";

function AgencyIntroductionSection() {
  const scrollToContactUsSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const contactUs = document.getElementById("contact_us");
    e.preventDefault();
    contactUs?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.mainInfoContainer}>
        <div className={styles.textContainer}>
          <h2>
            SMISS - cooperation that{" "}
            <span className={styles.gradient}> inspires</span>
          </h2>
          <p>
            Established in Ukraine 17 years ago, we have evolved into a
            full-blown digital agency, now with an office in Baden-Württemberg
            and an emphasis on the local market. We specialize in{" "}
            <strong>software development </strong>, as well as providing{" "}
            <strong>dedicated teams</strong> for you internal needs
          </p>
          <div className={styles.contactContainer}>
            <a className={styles.contact} onClick={scrollToContactUsSection}>
              Get in touch with us
              <div className={styles.imageContainer}>
                <Image
                  src="/arrow-right-circle.svg"
                  alt="Contact us image"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </a>
          </div>
          <div className={styles.circle}/>
        </div>
      </div>
    </div>
  );
}

export default AgencyIntroductionSection;
