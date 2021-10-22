import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      to="/movie"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Movie
    </NavLink>
  </nav>
);

export default Navigation;
