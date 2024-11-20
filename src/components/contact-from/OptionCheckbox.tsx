import React, { useState } from "react";
import styles from "./OptionCheckbox.module.css";

interface OptionCheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const OptionCheckbox: React.FC<OptionCheckboxProps> = ({
  label,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label className={styles.optionWrapper}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        aria-checked={isChecked}
        aria-labelledby={`label-${label}`}
      />
      <span id={`label-${label}`}>{label}</span>
    </label>
  );
};

export default OptionCheckbox;
