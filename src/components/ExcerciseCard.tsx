interface Props {
  handleSelectChange: (
    e: React.ChangeEvent<HTMLSelectElement>,
    idN: number
  ) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    idN: number
  ) => void;
  idNumber: number;
  excercise: string;
  length: number;
  reps: number;
  rep_break: number;
  excercise_break: number;
}

// const LENGTH_OPTIONS = [15, 30, 45, 60, 120, 180];

export default function ExcerciseCard(props: Props) {
  return (
    <div>
      <form>
        <label>What excercise you doing? </label>
        <input
          name="excercise"
          type="text"
          placeholder="pushups"
          onChange={(event) => props.handleInputChange(event, props.idNumber)}
        />{" "}
        <br></br>
        <label>How long are you doing it for? </label>
        <select
          name="length"
          id="temp"
          defaultValue={props.length}
          onChange={(event) => props.handleSelectChange(event, props.idNumber)}
        >
          <option value="15">15 seconds</option>
          <option value="30">30 seconds</option>
          <option value="45">45 seconds</option>
          <option value="60">1 minute</option>
          <option value="120">2 minutes</option>
          <option value="180">3 minutes</option>
          <option value="300">5 minutes</option>
          <option value="600">10 minutes</option>
        </select>
        <br></br>
        <label>How many reps? </label>
        <select
          name="reps"
          id="reps"
          defaultValue={props.reps}
          onChange={(event) => props.handleSelectChange(event, props.idNumber)}
        >
          <option value="1">1 rep</option>
          <option value="2">2 reps</option>
          <option value="3">3 reps</option>
          <option value="4">4 reps</option>
          <option value="5">5 reps</option>
          <option value="6">6 reps</option>
          <option value="7">7 reps</option>
          <option value="8">8 reps</option>
          <option value="9">9 reps</option>
          <option value="10">10 reps</option>
        </select>
        <br></br>
        <label>How long are your breaks inbetween each rep?</label>
        <select
          name="rep_break"
          id="rep_break"
          defaultValue={props.rep_break}
          onChange={(event) => props.handleSelectChange(event, props.idNumber)}
        >
          <option value="5">5 seconds</option>
          <option value="10">10 seconds</option>
          <option value="15">15 seconds</option>
          <option value="20">20 seconds</option>
          <option value="30">30 seconds</option>
          <option value="45">45 seconds</option>
          <option value="60">1 minute</option>
          <option value="120">2 minutes</option>
          <option value="180">3 minutes</option>
          <option value="300">5 minutes</option>
        </select>
        <br></br>
        <label>How long is your break before your next excercise?</label>
        <select
          name="excercise_break"
          id="excercise_break"
          defaultValue={props.excercise_break}
          onChange={(event) => props.handleSelectChange(event, props.idNumber)}
        >
          <option value="0">0 seconds</option>
          <option value="15">15 seconds</option>
          <option value="30">30 seconds</option>
          <option value="45">45 seconds</option>
          <option value="60">1 minute</option>
          <option value="120">2 minutes</option>
          <option value="180">3 minutes</option>
          <option value="240">4 minutes</option>
          <option value="300">5 minutes</option>
          <option value="600">10 minutes</option>
        </select>
        <br></br>
      </form>
      <br></br>
    </div>
  );
}
