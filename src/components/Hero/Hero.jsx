import React from "react";

import styles from "./Hero.module.css";
import { getImageURL } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Harsha</h1>
        <p className={styles.description}>
          I'm a Computer Science Graduate with 2+ years of Professional Experience in Data Science and Web Development. I am seeking for a job in Data Science Associate, Data Engineer, Machine Learning Engineer and Software Engineer roles.
        </p>
        <a href="mailto:esamsankeerthms@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageURL("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      

      <div className={styles.bottomBlur} />
    </section>
  );
};
