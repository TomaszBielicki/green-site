import React from "react";
import darkGreenLeafs from "../../assets/images/p2.jpg";
import styles from "./AboutUsTile.module.css";
interface TileProps {
  headText: string;
  children: React.ReactNode;
}

const Tile: React.FC<TileProps> = ({ headText, children }) => {
  return (
    <div className={styles.aboutSectionWrapper} aria-labelledby="tile-heading">
      <div className={styles.aboutImgWrapper}>
        <img src={darkGreenLeafs} alt="Dark green leafs" />
      </div>
      <div className={styles.aboutTextWrapper}>
        <h2 aria-labelledby="about-heading">{headText}</h2>
        <p>{children}</p>
        <div className={styles.aWrapper}>
          <a href="#" aria-label={`Learn more about:  ${headText}`}>
            Learn more about
          </a>
          &rarr;
        </div>
      </div>
    </div>
  );
};

export default Tile;
