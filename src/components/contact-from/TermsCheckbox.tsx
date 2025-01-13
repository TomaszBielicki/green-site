import styles from "./TermsCheckbox.module.css";

interface TermsCheckboxProps {
  label: string;
}

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({ label }) => {
  return (
    <div className={styles.termsCheckboxWrapper}>
      <input
        type="checkbox"
        id="terms-checkbox"
        aria-labelledby="terms-label"
      />
      <label id="terms-label" htmlFor="terms-checkbox">
        {label}
      </label>
    </div>
  );
};

export default TermsCheckbox;
