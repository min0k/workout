import styles from "./WorkoutPage.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStopwatch} from '@fortawesome/free-solid-svg-icons'


export default function WorkoutPage() {
    return (
        <div className={styles.pageContainer}>
        <div className={styles.workoutContainer}>
          <p>Pushups</p>
          <p>10 second break</p>
          <p>Pushups</p>
          <p>10 second break</p>
          <p>Pushups</p>
          <p>10 second break</p>
          <p>Pushups</p>
          <p>10 second break</p>
          <p>Pushups</p>
        </div>
        <div className={styles.countdownContainer}>
           <FontAwesomeIcon className={styles.timerIcon} icon={faStopwatch} />
           <h2 className={styles.timerText}>17</h2>
        </div>
      </div>
    )
}