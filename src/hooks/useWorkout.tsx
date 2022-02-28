import React from "react";
import IExcercise from "../Interface";

export default function useWorkout() {
  const [workout, setWorkout] = React.useState<IExcercise[]>([
    {
      idNumber: 0,
      excercise: "squats",
      length: 60,
      reps: 3,
      rep_break: 20,
      excercise_break: 600,
    },
  ]);

  function addNewExcercise() {
    setWorkout((prevValue) => [
      ...prevValue,
      {
        idNumber: prevValue.length,
        excercise: "squats",
        length: 60,
        reps: 3,
        rep_break: 20,
        excercise_break: 600,
      },
    ]);
  }

  function handleSelectChange(
    e: React.ChangeEvent<HTMLSelectElement>,
    idN: number
  ) {
    setWorkout((prevWorkout) => {
      return prevWorkout.map((excercise) => {
        return excercise.idNumber === idN
          ? { ...excercise, [e.target.name]: parseInt(e.target.value) }
          : excercise;
      });
    });
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
    idN: number
  ) {
    console.log(e.target.value);
    console.log(idN);
    setWorkout((prevWorkout) => {
      return prevWorkout.map((excercise) => {
        return excercise.idNumber === idN
          ? { ...excercise, [e.target.name]: e.target.value }
          : excercise;
      });
    });
  }

  return {
    workout,
    handleInputChange,
    handleSelectChange,
    addNewExcercise,
  };
}
