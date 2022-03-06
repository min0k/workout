import styles from "./Workout.module.css";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import IExcercise from "../Interface";

interface IProps {
  workout: IExcercise[];
}

export default function Workout({ workout }: IProps) {
  const navigate = useNavigate();

  const [excerciseNumber, setExcerciseNumber] = React.useState(0);
  const [currentExcercise, setCurrentExcercise] = React.useState<IExcercise>(
    workout[excerciseNumber]
  );
  const [timer, setTimer] = React.useState(currentExcercise.length);
  const [breakTime, setBreakTime] = React.useState<boolean>(false);

  React.useEffect(() => {
    const startTimer = setTimeout(() => {
      if (timer !== 0) {
        setTimer((prevValue) => prevValue - 1);
      } else if (timer === 0 && breakTime === false) {
        const newObj = { ...currentExcercise, reps: currentExcercise.reps - 1 };
        setCurrentExcercise(newObj);
        setBreakTime(true);
        setTimer(currentExcercise.rep_break);
      } else if (timer === 0 && breakTime) {
        if (currentExcercise.reps === 0) {
          if (excerciseNumber + 1 === workout.length) {
            navigate("/workoutdone");
          } else {
            setTimer(currentExcercise.excercise_break);
            setExcerciseNumber((prevValue) => prevValue + 1);
            setCurrentExcercise(workout[excerciseNumber + 1]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

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
