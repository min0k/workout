import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WorkoutPage from "./pages/WorkoutPage";
import FinishedPage from "./pages/FinishedPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import SavedWorkoutPage from "./pages/SavedWorkoutsPage";

function App() {
  // ---- Example object shape for workouts

  // const tempObj = {
  //   excercise1: {
  //     type: "pushups",
  //     reps: 5,
  //     break_duration: 10,
  //     break_after_done: 60
  //   },
  //     excercise2: {
  //     type: "pullups",
  //     reps: 10,
  //     break_duration: 60,
  //     break_after_done: 1000
  //   }
  // }

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workout" element={<WorkoutPage />} />
          <Route path="/workoutdone" element={<FinishedPage />} />
          <Route path="/savedworkouts" element={<SavedWorkoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
