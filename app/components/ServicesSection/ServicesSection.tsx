import React from "react";

import { servicesSectionId } from "../../const";

import styles from "./ServicesSection.module.scss";

const VerticalMarquee = ({ children }: { children: React.JSX.Element[] }) => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marqueeContent}>
        {children}
        {children}
      </div>
    </div>
  );
};

const ServiceListItem = ({ children }: { children: string }) => {
  return <div className={styles.serviceItem}>{children}</div>;
};

const ServicesSection = () => {
  const services = [
    "Custom software development",
    "Dedicated developer/team",
    "MVP Development",
    "IT Consulting",
    "Support and maintenance",
    "QA and Testing",
  ];

  return (
    <div className={styles.sectionContainer} id={servicesSectionId}>
      <div className={styles.contentContainer}>
        <h2>What services do we provide? </h2>
        <p>
          SMISS offers an extensive array of services designed to elevate your
          operations, enhance customer service, and streamline business
          processes through automation. Here are some of the services we offer:
        </p>
        <div className={styles.servicesListContainer}>
          <VerticalMarquee>
            {services.map((service) => (
              <ServiceListItem key={service}>{service}</ServiceListItem>
            ))}
          </VerticalMarquee>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
