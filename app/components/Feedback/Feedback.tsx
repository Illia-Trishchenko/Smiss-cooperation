import * as React from "react";
import Image from "next/image";
import Slider from "react-slick";

import styles from "./Feedback.module.scss";

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NextArrow = (props: ArrowProps) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${styles.arrowImageContainer} ${styles.nextArrow}`}
    >
      <Image src="arrow-right-slider.svg" alt="Arrow right" fill />
    </div>
  );
};

const PrevArrow = (props: ArrowProps) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${styles.arrowImageContainer} ${styles.prevArrow}`}
    >
      <Image src="arrow-left-slider.svg" alt="Arrow left" fill />
    </div>
  );
};

const Feedback = () => {
  const [width, setWidth] = React.useState<number | null>(null);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width && width <= 430;

  const feedbacks = [
    {
      id: 1,
      quote: `“As a demanding client with precision expectations, I am pleased that they raise to the bar each time we challenge them. If you’re looking for a professional, dedicated, digital development partner, I highly recommend SMISS company.”`,
      author: "Gerd H. Schick",
      position: "CEO, TELENORMA Group",
      imageSrc: "/feedback-photo-1.svg",
    },
    {
      id: 2,
      quote: `“We have complete confidence in the SMISS team and plan to use them for years to come, they were highly responsive to our needs. Its states at any point.”`,
      author: "Andrejs Strods",
      position:
        "Founder at Benebay, Founder/Board Director at Blue Bridge Technologies, Entrepreneurship Educator",
      imageSrc: "/feedback-photo-2.svg",
    },
    {
      id: 3,
      quote: `“The developers at SMISS are really looking out to make sure us happy and make sure our experience with then is a good one, the made me feel totally ease and were able to understand my needs and solve my problems.”`,
      author: "Wolfgang Maas",
      position: "Founder & CEO, Maas",
      imageSrc: "/feedback-photo-3.svg",
    },
    {
      id: 4,
      quote: `“Throughout that whole process, they’ve been patient and willing to give us the focus required to achieve success. SMISS is an honest company to deal with, they were always fair and reasonable.”`,
      author: "Roddy Richards",
      position: "Founder & CEO, Westlink",
      imageSrc: "/feedback-photo-4.svg",
    },
  ];

  const settings = {
    centerMode: !isMobile && true,
    infinite: true,
    centerPadding: "45px",
    slidesToShow: 1,
    speed: 400,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {feedbacks.map((feedback) => (
          <div key={feedback.id}>
            <div className={styles.feedbackContainer}>
              <Image src={feedback.imageSrc} alt={feedback.author} fill />
              <div className={styles.feedbackContentContainer}>
                <p>{feedback.quote}</p>
                <h2>{feedback.author}</h2>
                <div className={styles.authorPositionContainer}>
                  <p>{feedback.position}</p>
                  <div className={styles.imageContainer}>
                    <Image src="/stars.svg" alt={feedback.author} fill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className={styles.arrowsContainer} />
    </div>
  );
};

export default Feedback;
