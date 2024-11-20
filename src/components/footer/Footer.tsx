import Button from "../button/Button";
import styles from "./Footer.module.css";

import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/mastercard.png";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper} role="contentinfo">
      <div className={styles.contentWrapper}>
        <div className={styles.subscribeWrapper}>
          <h1>PlantMe</h1>
          <p>
            Subscribe and be the first to know about our news and promotions.
          </p>
          <div
            className={styles.subscribeInputWrapper}
            aria-labelledby="newsletter-subscription"
          >
            <input
              placeholder="example@gmail.com"
              aria-label="Enter your email address"
            />
            <Button aria-label="Subscribe to newsletter">Subscribe</Button>
          </div>
        </div>
        <nav className={styles.linksWrapper} aria-label="Site links">
          <a id={styles.link} href="#">
            About Us
          </a>
          <a id={styles.link} href="#">
            Contact Us
          </a>
          <a id={styles.link} href="#">
            Blog
          </a>
          <a id={styles.link} href="#">
            Site Map
          </a>
        </nav>
        <div className={styles.linksWrapper}>
          <a id={styles.link} href="#">
            Contacts
          </a>
          <a className={styles.phoneNubmer} aria-label="Call us">
            +38 063 072 0121
          </a>
          <a className={styles.email} aria-label="Email us">
            plantme.store@gmail.com
          </a>

          <div className={styles.visaWrapper}>
            <img src={visa} />
            <img src={mastercard} />
          </div>
        </div>
      </div>
      <div className={styles.copyrightsWrapper}>
        <p>© 2022 PlantMe. All Rights Reserved</p>
        <div className={styles.policyTermsWrapper}>
          <p aria-label="View our Privacy Policy">Privacy Policy</p>
          <p aria-label="View our Terms of Service">Terms of service</p>
          <p aria-label="Change site language">Language</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
