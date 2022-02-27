import styles from "./HomePage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning } from "@fortawesome/free-solid-svg-icons";

import React from "react";

import { useNavigate } from "react-router";
import ExcerciseCard from "../Components/ExcerciseCard";
import IExcercise from "../Interface";

export default function HomePage() {
  const [workout, setWorkout] = React.useState<IExcercise[]>([
    {
      idNumber: 0,
      excercise: "squats",
      length: 60,
      reps: 3,
      rep_break: 20,
      excercise_break: 600
    }
  ]);

  let navigate = useNavigate();

  function addNewExcercise() {
    setWorkout(prevValue => [
      ...prevValue,
      {
        idNumber: prevValue.length,
        excercise: "squats",
        length: 60,
        reps: 3,
        rep_break: 20,
        excercise_break: 600
      }
    ])
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>, idN: number) {
    // console.log(e);
    // console.log(idN);
    setWorkout((prevWorkout) => {
      return prevWorkout.map(excercise => {
        return excercise.idNumber === idN ? {...excercise, [e.target.name]: parseInt( e.target.value)} : excercise
      })
    })
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>, idN: number) {
    console.log(e.target.value);
    console.log(idN);
    setWorkout((prevWorkout) => {
      return prevWorkout.map(excercise => {
        return excercise.idNumber === idN ? {...excercise, [e.target.name]: e.target.value} : excercise
      })
    })
  }

//   const handleUpdateFruits = (id: string) => {
//     setFruits((prevFruits) =>
//       prevFruits.map((fruit) => {
//         return fruit.id === id ? { ...fruit, inStock: !fruit.inStock } : fruit;
//       }),
//     );
// };


  const Excercises = workout.map((e, idx) => {
    return <ExcerciseCard key={idx} idNumber={idx} rep_break={e.rep_break} reps={e.reps} length={e.length} excercise={e.excercise} excercise_break={e.excercise_break} handleSelectChange={handleSelectChange} handleInputChange={handleInputChange}/>
  })

console.log(workout);


  return (
    <div className={styles.pageContainer}>
      <div className={styles.createWorkoutContainer}>
        {Excercises}
        <button onClick={addNewExcercise}>Add new excercise</button>
      </div>
      <div className={styles.startWorkoutContainer}>
        <FontAwesomeIcon className={styles.startIcon} icon={faRunning} />
        <h2 onClick={() => navigate("/workout")} className={styles.startText}>
          Start
        </h2>
      </div>
    </div>
  );
}
