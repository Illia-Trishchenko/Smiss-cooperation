"use client";
import React from "react";
import Image from "next/image";

import useIntersection from "../../hooks/useIntersection";
import { advantagesSectionId } from "../../const";

import styles from "./AdvantagesSection.module.scss";

const AdvantageCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) => (
  <div className={styles.advantage}>
    <div>
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
    <div className={styles.imageContainer}>
      <Image src={imageSrc} alt={imageAlt} fill />
    </div>
  </div>
);

const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Focus on the German market",
      description:
        "SMISS possesses a proven track record in working on German market. We’ve successfully delivered 50+ projects for regional companies. Scroll down to the bottom in order to view our customers’  testimonials.",
      imageSrc: "/smiss-area.svg",
      imageAlt: "Greentech project illustration",
    },
    {
      title: "Instant availability (start within 5 business days)",
      description:
        "As a fast-acting, low-bureaucracy team, we are well-prepared to initiate the resolution of your issue within a 5-day timeframe. The instant availability is vital for maintaining agility, saving time and money, and staying competitive in the ever-evolving world of technology and business",
      imageSrc: "/availability.svg",
      imageAlt: "Availability illustration",
    },
    {
      title: "Test period",
      description:
        "The test period for a dedicated team is a critical phase in the partnership between a client and a service provider. It helps mitigate risks, assess performance, and ensure that the dedicated team is the right fit for the project, ultimately leading to a successful and productive collaboration. At SMISS, we give you the chance to personally witness the high quality of our services with a favourable trial period.",
      imageSrc: "/test-period.svg",
      imageAlt: "Test period illustration",
    },
    {
      title: "Flexible teams, flexible rates",
      description:
        "In order to tailor our services to match our customers' requirements and preferences, we present a selection of collaboration options, notably:  <br /> Choices between prepayment and post payment. <br /> Versatile cooperation termination, with 0, 30, or 60 days' notice. <br /> Flexible rates, depending on project length, required skills, workload, and project length.",
      imageSrc: "/flexible-teams.svg",
      imageAlt: "Flexible teams illustration",
    },
  ];

  const isVisible = useIntersection(advantagesSectionId);

  return (
    <div className={styles.sectionContainer} id={advantagesSectionId}>
      <div
        className={` ${styles.contentContainer} ${
          isVisible && styles.revealAnimationSectionContainer
        }`}
      >
        <h2>What are the advantages of collaborating with us</h2>
        <div className={styles.advantagesContainer}>
          {advantages.map((advantage, index) => (
            <AdvantageCard key={index} {...advantage} />
          ))}
        </div>

        <div className={styles.circle} />
      </div>
    </div>
  );
};

export default AdvantagesSection;
