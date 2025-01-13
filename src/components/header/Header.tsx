import Input from "../input/Input";
import logo from "../../assets/images/Logo.svg";
import arrowDown from "../../assets/Icon/arrowDown.svg";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header>
      <nav className={styles.navigation}>
        <img src={logo} alt="PlantMe logo" />
        <ul role="menu">
          <li role="menuitem">About Us</li>
          <li role="menuitem">Contact Us</li>
          <li role="menuitem">Blog</li>
          <li role="menuitem">Site Map</li>
          <li role="menuitem">Eng</li>
          <img src={arrowDown} />
        </ul>
      </nav>
      <Input aria-label="Search site" />
    </header>
  );
}
