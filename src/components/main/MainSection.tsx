import React from "react";
import greenLeafsImg from "../../assets/images/p2.jpg";
import styles from "./Main.module.css";
import Button from "../button/Button";
export default function MainSection() {
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.textWrapper}>
        <h1>Lorem ipsum dolor sit amet</h1>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p className={styles.mainText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
          tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
          hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut
          ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
        <Button aria-label="Buy the product">Buy Now</Button>
      </div>
      <div className={styles.imgWrapper}>
        <img
          className={styles.greenLeafs}
          src={greenLeafsImg}
          alt="Decorative green leaves"
        />
      </div>
    </main>
  );
}
