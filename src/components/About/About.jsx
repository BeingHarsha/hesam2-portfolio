import React from "react";

import styles from "./About.module.css";
import { getImageURL } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="assets/about/aboutImage.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.aboutItems}>
      <p>I am a data enthusiast with a strong background in both data science and software engineering.
         While my passion for data drives my enthusiasm for uncovering insights through analysis and machine learning,
          I am equally eager to take on software engineering roles where I can contribute to building innovative and impactful 
          software solutions. With my experience in data science, machine learning, and software development, I am seeking opportunities
           that allow me to apply my skills in these areas. I am particularly interested in roles related to Data Science, Machine 
           Learning, Software Engineering, or Software Development Engineering (SWE/SDE), where I can collaborate with
            teams to solve complex problems and make a meaningful impact.
</p>
      </div>
      </div>
    </section>
  );
};
