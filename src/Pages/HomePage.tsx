import styles from "./HomePage.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRunning } from '@fortawesome/free-solid-svg-icons'


export default function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.createWorkoutContainer}>
        <p>Pushups -- 30 seconds -- 5 reps -- 10 second breaks</p>
        <p>2 minute break</p>
        <p>Jumping Jacks -- 1 minute -- 10 reps -- 10 second breaks</p>
        <p>5 minute break</p>
        <p>Pushups -- 30 seconds -- 5 reps -- 10 second breaks</p>
        <p>2 minute break</p>
        <p>Jumping Jacks -- 1 minute -- 10 reps -- 10 second breaks</p>
        <p>Done!</p>
      </div>
      <div className={styles.startWorkoutContainer}>
         <FontAwesomeIcon className={styles.startIcon} icon={faRunning} />
         <h2 className={styles.startText}>Start</h2>
      </div>
    </div>
  );
}
