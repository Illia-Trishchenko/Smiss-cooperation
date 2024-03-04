"use client";
import React from "react";
import Image from "next/image";

import useIntersection from "../../hooks/useIntersection";
import { domainsSectionId } from "../../const";

import styles from "./CustomersSection.module.scss";

const customersBottom = [
  { text: "E-Commerce" },
  { text: "Greentech" },
  { text: "Logistics" },
];
const customersTop = [
  { text: "Business automation" },
  { text: "Healthcare & pharma" },
  { text: "Accounting & finance", customClass: "rotated" },
];

const CustomerItem = ({
  text,
  customClass,
}: {
  text: string;
  index: number;
  isVisible: boolean;
  customClass: string;
}) => {
  return (
    <div
      className={`${styles.customer} 
      ${styles[customClass]}`}
    >
      <Image src="/customer-back.svg" alt="Back image" fill />
      <div className={styles.customerInfoContainer}>
        <div className={styles.customerInfo}>{text}</div>
        <div className={styles.circle} />
      </div>
    </div>
  );
};

const CustomersSection = () => {
  const isVisible = useIntersection(domainsSectionId);

  return (
    <div className={styles.sectionContainer} id={domainsSectionId}>
      <div
        className={`${styles.textContainer} ${
          isVisible && styles.revealAnimationSectionContainer
        }`}
      >
        <h2>Who are our customers?</h2>
        <p>
          Our clientele includes a diverse range of businesses, spanning from
          startups to well-established companies, and from small and
          medium-sized enterprises (SMEs) to large corporations. Throughout our
          time in operation, we have successfully assisted clients hailing from
          a diverse array of business domains, including, but not limited to
        </p>
      </div>

      <div className={styles.customersContainer}>
        {customersTop.map((customer, index) => (
          <div
            key={customer.text}
            className={`${styles.customerContainer} ${
              isVisible && styles.customerTopContainer
            }`}
          >
            <CustomerItem
              index={index}
              text={customer.text}
              isVisible={isVisible}
              customClass={customer.customClass || ""}
            />
          </div>
        ))}
      </div>
      <div className={styles.customersContainer}>
        {customersBottom.map((customer, index) => (
          <div
            key={customer.text}
            className={`${styles.customerContainer} ${
              isVisible && styles.customerBottomContainer
            }`}
          >
            <CustomerItem
              index={index}
              text={customer.text}
              isVisible={isVisible}
              customClass={""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersSection;
