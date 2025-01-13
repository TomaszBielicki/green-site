import React from "react";
import AboutUsTile from "./AboutUsTile";
import styles from "./AboutUs.module.css";
export default function AboutUs() {
  return (
    <section className={styles.aboutUs} aria-labelledby="about-us-heading">
      <AboutUsTile headText="About Us">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
        tincidunt posuere eu risus cursus. Senectus sed maecenas viverra tempus
        at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit
        morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut ultricies.
        Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus.
      </AboutUsTile>
      <AboutUsTile headText="About Us 2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
        tincidunt posuere eu risus cursus. Senectus sed maecenas viverra tempus
        at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit
        morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut ultricies.
        Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus.
      </AboutUsTile>
    </section>
  );
}
