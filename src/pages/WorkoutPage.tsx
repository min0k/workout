import styles from "./WorkoutPage.module.css";

import React from "react";

import useWorkout from "../hooks/useWorkout";
import HomePageComponent from "../components/HomePageComponent";
import Workout from "./Workout";

export default function WorkoutPage() {
  const { workout, handleInputChange, handleSelectChange, addNewExcercise } =
    useWorkout();

  const [workoutStarted, setWorkoutStarted] = React.useState(false);

  function startWorkout() {
    setWorkoutStarted(true);
  }

  console.log(workoutStarted);

  // Bugs -- all added excercies are named squats
  // If you set break time to zero it gets stuck there.
  // Work in the workout page..

  return (
    <div className={styles.pageContainer}>
      {workoutStarted ? (
        <Workout workout={workout} />
      ) : (
        <HomePageComponent
          workout={workout}
          handleInputChange={handleInputChange}
          handleSelectChange={handleSelectChange}
          addNewExcercise={addNewExcercise}
          startWorkout={startWorkout}
        />
      )}
    </div>
  );
}
