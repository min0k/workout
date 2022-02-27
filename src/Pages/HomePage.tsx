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
      idNumber: 1,
      excercise: "squats",
      length: 60,
      reps: 3,
      rep_break: 20,
      excercise_break: 600
    }
  ]);

  let navigate = useNavigate();
  
  function handleFormInput() {

  }

  //Figure out how to add a new excercise and update state
  function addNewExcercise() {
    // setWorkout(prevValue => [
    //   ...prevValue,
    //   {
    //     key: prevValue.length + 1,
    //     excercise: "squats",
    //     length: 60,
    //     reps: 3,
    //     rep_break: 20,
    //     excercise_break: 600
    //   }
    // ])
  }

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(e);
    
    setWorkout(prevValue => [
      ...prevValue,
      {
        ...prevValue[0],
        [e.target.name]: parseInt(e.target.value) 
      }
    ])
  }

//   const handleUpdateFruits = (id: string) => {
//     setFruits((prevFruits) =>
//       prevFruits.map((fruit) => {
//         return fruit.id === id ? { ...fruit, inStock: !fruit.inStock } : fruit;
//       }),
//     );
// };


  const Excercises = workout.map((e, idx) => {
    return <ExcerciseCard key={idx} idNumber={idx} rep_break={e.rep_break} reps={e.reps} length={e.length} excercise={e.excercise} excercise_break={e.excercise_break} handleChange={handleChange}/>
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
