import styles from "./HomePage.module.css";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

import { createSearchParams, Link } from "react-router-dom";

import ExcerciseCard from "../components/ExcerciseCard";
import useWorkout from "../hooks/useWorkout";
import IExcercise from "../Interface";

interface IProps {
  workout: IExcercise[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    idN: number
  ) => void;
  handleSelectChange: (
    e: React.ChangeEvent<HTMLSelectElement>,
    idN: number
  ) => void;
  addNewExcercise: () => void;
}

export default function HomePage({
  workout,
  handleInputChange,
  handleSelectChange,
  addNewExcercise,
}: IProps) {
  let navigate = useNavigate();

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
        <h2
          onClick={() => navigate("/workout", { state: workout })}
          className={styles.startText}
        >
          Start
        </h2>
      </div>
    </div>
  );
}
