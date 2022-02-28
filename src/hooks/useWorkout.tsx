import React from "react";
import IExcercise from "../Interface";

export default function useWorkout() {
  const [workout, setWorkout] = React.useState<IExcercise[]>([
    {
      idNumber: 0,
      excercise: "squats",
      length: 15,
      reps: 2,
      rep_break: 5,
      excercise_break: 30,
    },
  ]);

  function addNewExcercise() {
    setWorkout((prevValue) => [
      ...prevValue,
      {
        idNumber: prevValue.length,
        excercise: "squats",
        length: 30,
        reps: 2,
        rep_break: 10,
        excercise_break: 60,
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
