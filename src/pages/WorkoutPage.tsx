import styles from "./WorkoutPage.module.css";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router";
import IExcercise from "../Interface";

export default function WorkoutPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as IExcercise[];

  const [excerciseNumber, setExcerciseNumber] = React.useState(0);
  const [currentExcercise, setCurrentExcercise] = React.useState<IExcercise>(
    state[excerciseNumber]
  );
  const [timer, setTimer] = React.useState(currentExcercise.length);
  const [breakTime, setBreakTime] = React.useState<boolean>(false);

  //fence posting for my if else statements
  // const fakeSTate = [
  //   {
  //     reps: 4,
  //   },
  //   {
  //     reps: 7,
  //   },
  // ];
  // const reps = fakeSTate[excerciseNumber].reps;
  // console.log("Seung", reps);

  React.useEffect(() => {
    const startTimer = setTimeout(() => {
      if (timer !== 0) {
        setTimer((prevValue) => prevValue - 1);
      } else if (timer === 0 && breakTime === false) {
        // Decriment rep count, set breaktime to true, set timer to rep_break.
        const newObj = { ...currentExcercise, reps: currentExcercise.reps - 1 };
        setCurrentExcercise(newObj);
        setBreakTime(true);
        setTimer(currentExcercise.rep_break);
      } else if (timer === 0 && breakTime) {
        // Determine if last excercise
        if (currentExcercise.reps === 0) {
          if (excerciseNumber + 1 === state.length) {
            navigate("/workoutdone");
          } else {
            setTimer(currentExcercise.excercise_break);
            setExcerciseNumber((prevValue) => prevValue + 1);
            setCurrentExcercise(state[excerciseNumber + 1]);
          }
        } else {
          setBreakTime(false);
          setTimer(currentExcercise.length);
        }
      }
    }, 100);

    return () => {
      clearTimeout(startTimer);
    };
  }, [timer]);

  console.log(state);
  console.log(currentExcercise);

  return (
    <div className={styles.pageContainer}>
      {breakTime ? (
        <div className={styles.countdownContainer}>
          <h1>Break time</h1>
          <FontAwesomeIcon className={styles.timerIcon} icon={faStopwatch} />
          <h2 className={styles.timerText}>{timer}</h2>
        </div>
      ) : (
        <div>
          <div className={styles.workoutContainer}>
            <p>Excercise {excerciseNumber + 1}</p>
            <p>{currentExcercise.excercise}</p>
            <p>{currentExcercise.rep_break} second breaks</p>
            <p>{currentExcercise.reps} reps left</p>
          </div>
          <div className={styles.countdownContainer}>
            <FontAwesomeIcon className={styles.timerIcon} icon={faStopwatch} />
            <h2 className={styles.timerText}>{timer}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
