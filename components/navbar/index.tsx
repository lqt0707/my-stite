import { Themes } from "constants/enum";
import { FC, useContext } from "react";
import { ThemeContext } from "stores/theme";
import styles from "./styles.module.scss";

export interface INavBarProps {}

export const NavBar: FC<INavBarProps> = ({}) => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div className={styles.navBar}>
      <a href="http://localhost:3000/">
        <div className={styles.logoIcon}></div>
      </a>
      <div
        className={styles.themeIcon}
        onClick={(): void => {
          if (localStorage.getItem("theme") === Themes.light) {
            setTheme(Themes.dark);
          } else {
            setTheme(Themes.light);
          }
        }}
      ></div>
    </div>
  );
};
