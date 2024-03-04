"use client";
import * as React from "react";
import Image from "next/image";

import styles from "./GallerySection.module.scss";

const GallerySection = ({
  setLoaded,
}: {
  setLoaded: (isLoaded: boolean) => void;
}) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.imagesContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/gallery-photo-1.svg"
            alt="Gallery image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/gallery-photo-2.svg"
            alt="Gallery image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/gallery-photo-3.svg"
            alt="Gallery image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/gallery-photo-4.svg"
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
