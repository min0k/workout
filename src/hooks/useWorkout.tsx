import React from "react";
import IExcercise from "../Interface";

const DEFAULT_WORKOUT = {
  idNumber: 0,
  excercise: "squats",
  length: 15,
  reps: 2,
  rep_break: 5,
  excercise_break: 30,
};

export default function useWorkout() {
  const [workout, setWorkout] = React.useState<IExcercise[]>([DEFAULT_WORKOUT]);

  function addNewExcercise() {
    setWorkout((prev) => [...prev, DEFAULT_WORKOUT]);
  }

  // function handleSelectChange(
  //   e: React.ChangeEvent<HTMLSelectElement>,
  //   field: string,
  //   value: number | string,
  //   idNumber: number
  // ) {
  //   setWorkout((prev) => {
  //     const clone = [...prev];
  //     const itemIndex = clone.findIndex((ele) => ele.idNumber === idNumber);
  //     clone[itemIndex][field] = value;
  //     return clone;
  //   });

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
