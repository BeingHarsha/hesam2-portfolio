import React from "react";

import styles from "./Hero.module.css";
import { getImageURL } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Harsha</h1>
        <p className={styles.description}>
          <h2>Data Enthusiast & Web Developer</h2>
          
        </p>
        <a href="mailto:esamsankeerthms@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="assets/hero/heroImage.png" alt="Hero" 

        
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      

      <div className={styles.bottomBlur} />
    </section>
  );
};
