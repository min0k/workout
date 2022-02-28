import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { useNavigate } from "react-router";

export default function Navbar() {
  let navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <h1 className={styles.h1} onClick={() => {navigate("/")}} >Workout<span className={styles.span}>!</span></h1>
      <nav>
        <ul className={styles.navbarLinks}>
            <Link className={styles.navbarItems} to="/savedworkouts">Workouts</Link>
            <Link className={styles.navbarItems} to="/about">About</Link>
            <Link className={styles.navbarItems} to="/workoutdone">Finished</Link>
        </ul>
      </nav>
    </div>
  );
}

