import styles from "./WorkoutPage.module.css";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router";
import IExcercise from "../Interface";

export default function WorkoutPage() {
  const [timer, setTimer] = React.useState(10);
  const [currentExcercise, setCurrentExcercise] = React.useState<IExcercise>();
  const [rep, setRep] = React.useState<Number>();
  const [excerciseNumber, setExcerciseNumber] = React.useState(0);
  const [breakTime, setBreakTime] = React.useState<boolean>(false);


  const location = useLocation();
  const state = location.state as IExcercise[];

  // MINO -- Forget everything below, try to 
  // make one useEffect that'll do most of everything
  // with dependency on the timer (if/then statements every second);

  // OR learn more about using multiple useEffects cause theres
  // a gap in knowledge here..

  //   // Update which excercise we're on and how many reps
  //   // React.useEffect(() => {
  //   //   setCurrentExcercise(state[excerciseNumber]);
  //   //   if (currentExcercise) {
  //   //     setRep(currentExcercise.reps)
  //   //   }
  //   // }, [excerciseNumber]);

  //   // Manage rep number
  //   React.useEffect(() => {

  //   }, []);

  //   // Setup Timer
  //   React.useEffect(() => {
  //     if (currentExcercise) {
  //       setTimer(currentExcercise.length);
  //     }
  //   }, [currentExcercise]);



  // // Start timer, if timer 0 do stuff
  // React.useEffect(() => {
  //   const startTimer = setTimeout(() => {
  //     if (breakTime) {
  //       setTimer((prevValue) => prevValue - 1);
  //     } else {
  //       setCurrentExcercise(state[excerciseNumber]);
  //       if (currentExcercise) {
  //         setRep(currentExcercise.reps);
  //       }
  //     }

  //     if (timer === 0) {
  //       setBreakTime((prevValue) => true);
  //       if (currentExcercise && breakTime) {
  //         setTimer(currentExcercise.excercise_break);
  //       }
  //       setExcerciseNumber((prevValue) => prevValue + 1);
  //     } else {
  //       setTimer((prevValue) => prevValue - 1);
  //     }
  //   }, 100);
  //   return () => {
  //     clearTimeout(startTimer);
  //   };
  // }, [timer]);



  // //setup breaks
  // React.useEffect(() => {
  //   if (currentExcercise && breakTime) {
  //     setTimer(currentExcercise.excercise_break);
  //   }
  // },[breakTime])





  console.log(`WorkoutPage`);
  console.log(currentExcercise);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.workoutContainer}>
        <p>Excercise #{excerciseNumber + 1}</p>
        <p>Pushups</p>
        <p>__ second breaks</p>
        <p>{rep} reps</p>
      </div>
      <div className={styles.countdownContainer}>
        <FontAwesomeIcon className={styles.timerIcon} icon={faStopwatch} />
        <h2 className={styles.timerText}>{timer}</h2>
      </div>
    </div>
  );
}
