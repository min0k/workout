export default function ExcerciseCard() {
  return (
    <div>
      <label>What excercise you doing? </label>
      <input type="text" placeholder="pushups" /> <br></br>
      <label>How long are you doing it for? </label>
      <select name="length" id="length" defaultValue={60}>
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
      <select name="length" id="length" defaultValue={4}>
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
      <select name="length" id="length" defaultValue={30}>
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
      <select name="length" id="length" defaultValue={300}>
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
      </select> <br></br>
      <button>Add new excercise</button>
    </div>
  );
}
