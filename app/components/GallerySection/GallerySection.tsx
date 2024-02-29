import * as React from "react";
import Image from "next/image";

import styles from "./GallerySection.module.scss";

function GallerySection() {

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
            />
          </div>
        </div>
      </div>
  );
}

export default GallerySection;
