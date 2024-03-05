"use client";
import * as React from "react";
import Image from "next/image";

import {
  advantagesSectionId,
  contactUsSectionId,
  domainsSectionId,
  servicesSectionId,
} from "../../const";

import styles from "./HeaderSection.module.scss";

const HeaderSection = () => {
  const scrollToContactUsSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    const contactUs = document.getElementById(id);
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
          <a
            href={`#${servicesSectionId}`}
            onClick={(e) => scrollToContactUsSection(e, servicesSectionId)}
          >
            Services
          </a>
          <a
            href={`#${domainsSectionId}`}
            onClick={(e) => scrollToContactUsSection(e, domainsSectionId)}
          >
            Domains
          </a>
          <a
            href={`#${advantagesSectionId}`}
            onClick={(e) => scrollToContactUsSection(e, advantagesSectionId)}
          >
            Advantages
          </a>
        </div>
        <div className={styles.contactContainer}>
          <a
            href={`#${contactUsSectionId}`}
            className={styles.contact}
            onClick={(e) => scrollToContactUsSection(e, contactUsSectionId)}
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
