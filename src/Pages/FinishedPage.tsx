import styles from "./FinishedPage.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'



export default function FinishedPage() {

  return (
    <div className={styles.pageContainer}>
      <div className={styles.workoutCompleteContainer}>
        <h1>Complete</h1>
        <p>Share your workout with others</p>
      </div>
      <div className={styles.icon}>
         <FontAwesomeIcon className={styles.startIcon} icon={faThumbsUp} />
      </div>
    </div>
  );
}