import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRunning } from "@fortawesome/free-solid-svg-icons";

import ExcerciseCard from "../components/ExcerciseCard";

import styles from "./HomePageComponent.module.css";
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
  startWorkout: React.MouseEventHandler<HTMLHeadingElement>;
}

export default function HomePageComponent({
  workout,
  handleInputChange,
  handleSelectChange,
  addNewExcercise,
  startWorkout,
}: IProps) {
  return (
    <div>
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
        <h2 onClick={startWorkout} className={styles.startText}>
          Start
        </h2>
      </div>
    </div>
  );
}
