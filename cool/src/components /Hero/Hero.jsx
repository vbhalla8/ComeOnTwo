import React, { useState } from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  const [isSecondImageVisible, setSecondImageVisible] = useState(false);

  const handleTriangleClick = () => {
    setSecondImageVisible(!isSecondImageVisible);
  };

  return (
    <section className={styles.container}>
      <div>
        <h1></h1>
        <p></p>
      </div>

      {/* Container for images */}
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl('Hero/Intersect.png')}
          className={`${styles.firstRectangle} ${isSecondImageVisible ? styles.hidden : ''}`}
          alt="Intersect"
        />
        <img
          src={getImageUrl('Hero/Subtract.png')}
          className={`${styles.secondRectangle} ${isSecondImageVisible ? styles.visible : ''}`}
          alt="Subtract"
        />
        {/* Triangle for switching images */}
        <div
          className={styles.triangleDown}
          onClick={handleTriangleClick}
        ></div>
      </div>
    </section>
  );
};
