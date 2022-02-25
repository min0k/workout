import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.h3}>Workout<span className={styles.span}>!</span></h1>
      <nav>
        <ul className={styles.navbarLinks}>
            <Link className={styles.navbarItems} to="/">Home</Link>
            <Link className={styles.navbarItems} to="/savedworkouts">My Workouts</Link>
            <Link className={styles.navbarItems} to="/about">About</Link>
        </ul>
      </nav>
    </div>
  );
}

