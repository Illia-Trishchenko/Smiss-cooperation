"use client";
import * as React from "react";
import Image from "next/image";

import styles from "./GallerySection.module.scss";

const GallerySection = ({
  isLoaded,
  setLoaded,
}: {
  isLoaded: boolean;
  setLoaded: (isLoaded: boolean) => void;
}) => {
  return (
    <div className={styles.sectionContainer}>
      <div
        className={`${styles.imagesContainer} ${
          isLoaded && styles.imagesContainerAnimation
        }`}
      >
        <div className={styles.imageContainer}>
          <Image
            src="/gallery-photo-1.jpg"
            alt="Gallery image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/gallery-photo-2.jpg"
            alt="Gallery image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/gallery-photo-3.jpg"
            alt="Gallery image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/gallery-photo-4.jpg"
            alt="Gallery image"
            fill
            style={{ objectFit: "cover" }}
            onLoad={() => setTimeout(() => setLoaded(true))}
          />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
