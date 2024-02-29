"use client";
import * as React from "react";
import Image from "next/image";

import styles from "./HeaderSection.module.scss";

function HeaderSection() {
  const scrollToContactUsSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const contactUs = document.getElementById("contact_us");
    e.preventDefault();
    contactUs?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/logo.svg"
            alt="Logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.navigationContainer}>
          <a onClick={scrollToContactUsSection}>Services</a>
          <a onClick={scrollToContactUsSection}>Domains</a>
          <a onClick={scrollToContactUsSection}>Advantages</a>
        </div>
        <div className={styles.contactContainer}>
          <a className={styles.contact} onClick={scrollToContactUsSection}>
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
