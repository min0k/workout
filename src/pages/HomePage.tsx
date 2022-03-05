import styles from "./HomePage.module.css";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

import { Link } from "react-router-dom";

import ExcerciseCard from "../components/ExcerciseCard";
import useWorkout from "../hooks/useWorkout";

export default function HomePage() {
  const { workout, handleInputChange, handleSelectChange, addNewExcercise } =
    useWorkout();

  let navigate = useNavigate();

  function goToWorkoutPage() {
    //Use context or query params
    navigate("/workout", { state: workout });
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.createWorkoutContainer}>
        {workout.map((e, idx) => {
          return (
            // Pass all props as one whole thing
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
        <Link to="/workout" state={workout} className={styles.startText}>
          <h2>Start</h2>
        </Link>
      </div>
    </div>
  );
}
