import React from "react";
import facebookIcon from "../../assets/Icon/facebookIcon.svg";
import styles from "./ContactInfo.module.css";

interface ContactInfoProps {
  label: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ label }) => {
  return (
    <div
      className={styles.infoWrapper}
      role="contentinfo"
      aria-label="Phone number: +380 93 15 32 456"
    >
      <img src={facebookIcon} alt="Phone Icon" />
      <p>{label}</p>
    </div>
  );
};

export default ContactInfo;
