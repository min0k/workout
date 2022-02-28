import styles from "./HomePage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

import ExcerciseCard from "../components/ExcerciseCard";
import useWorkout from "../hooks/useWorkout";

export default function HomePage() {
  const { workout, handleInputChange, handleSelectChange, addNewExcercise } =
    useWorkout();

  let navigate = useNavigate();

function goToHomePage() {
  // const reshapedWorkout = reshapeWorkoutObject(workout);
  navigate("/workout", {state: workout});
}

  return (
    <div className={styles.pageContainer}>
      <div className={styles.createWorkoutContainer}>
        {workout.map((e, idx) => {
          return (
            <ExcerciseCard
              key={idx}
              idNumber={idx}
              rep_break={e.rep_break}
              reps={e.reps}
              length={e.length}
              excercise={e.excercise}
              excercise_break={e.excercise_break}
              handleSelectChange={handleSelectChange}
              handleInputChange={handleInputChange}
            />
          );
        })}
        <button onClick={addNewExcercise}>Add new excercise</button>
      </div>
      <div className={styles.startWorkoutContainer}>
        <FontAwesomeIcon className={styles.startIcon} icon={faRunning} />
        <h2 onClick={goToHomePage} className={styles.startText}>
          Start
        </h2>
      </div>
    </div>
  );
}
