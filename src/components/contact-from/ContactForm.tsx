import React from "react";
import styles from "./ContactForm.module.css";
import OptionCheckbox from "./OptionCheckbox";
import FormInput from "./FormInput";
import ContactInfo from "./ContactInfo";
import facebookIcon from "../../assets/Icon/facebookIcon.svg";
import Message from "./Message";
import TermsCheckbox from "./TermsCheckbox";
import Button from "../button/Button";

export default function ContactForm() {
  return (
    <div className={styles.contactFormWrapper}>
      <div
        className={styles.contactForm}
        role="form"
        aria-labelledby="contact-us-header"
      >
        <div className={styles.contactWrapper}>
          <div className={styles.contactTextWrapper}>
            <div className={styles.contactHeadTextWrapper}>
              <h1 id="contact-us-header">Contact Us</h1>
              <p>
                Fill up the form and ur Team will get back to you within 24
                hours. Happy to see your message!
              </p>
            </div>
            <div className={styles.contactInfoWrapper}>
              <ContactInfo label="+380 93 15 32 456" />
              <ContactInfo label="example@gmail.com" />
              <ContactInfo label="Pidmurma 5a, Lviv" />
            </div>
          </div>
          <div className={styles.iconWrapper} aria-label="Social Media Links">
            <img src={facebookIcon} alt="Facebook" />
            <img src={facebookIcon} alt="Facebook" />
            <img src={facebookIcon} alt="Facebook" />
          </div>
        </div>

        <div className={styles.formWrapper}>
          <div className={styles.inputRowWrapper}>
            <FormInput inputText="First Name" placeholder="John" />
            <FormInput inputText="Last Name" placeholder="Doe" />
          </div>
          <div className={styles.inputRowWrapper}>
            <FormInput inputText="Email" placeholder="example@gmail.com" />
            <FormInput inputText="Phone nubmer" placeholder="00 000 00 00" />
          </div>

          <div className={styles.optionCheckboxWrapper}>
            <OptionCheckbox label="UI Developer" />
            <OptionCheckbox label="UI/UX Designer" />
            <OptionCheckbox label="Accessibility  Expert" />
            <OptionCheckbox label="QA Engineer" />
            <OptionCheckbox label="Other" />
          </div>
          <Message />
          <div className={styles.termsWrapper}>
            <TermsCheckbox label="Accept the Terms" />
            <TermsCheckbox label="Accept the Terms 2" />
          </div>
          <Button aria-label="Send Message">Send Message</Button>
        </div>
      </div>
    </div>
  );
}
