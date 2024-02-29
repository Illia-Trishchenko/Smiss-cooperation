"use client";
import { useEffect, useState } from "react";

const useIntersection = (id: string, shouldBeFullyVisible?: boolean) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    checkElementVisibility();

    window.addEventListener("scroll", checkElementVisibility);

    return () => {
      window.removeEventListener("scroll", checkElementVisibility);
    };
  });

  const checkElementVisibility = () => {
    const elementToCheck = document.getElementById(id);

    if (elementToCheck && isElementVisible(elementToCheck)) {
      setVisible(true);
    }
  };

  const isElementVisible = (element: HTMLElement) => {
    const item = element.getBoundingClientRect();
    return shouldBeFullyVisible
      ? item.top >= 0 &&
          item.left >= 0 &&
          item.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          item.right <=
            (window.innerWidth || document.documentElement.clientWidth)
      : item.top <=
          (window.innerHeight / 2 || document.documentElement.clientHeight / 2); //if half of the element is visible, it will be true
  };

  return isVisible;
};

export default useIntersection;
