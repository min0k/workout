import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WorkoutPage from "./pages/WorkoutPage";
import FinishedPage from "./pages/FinishedPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import SavedWorkoutPage from "./pages/SavedWorkoutsPage";

import useWorkout from "./hooks/useWorkout";

function App() {
  const { workout, handleInputChange, handleSelectChange, addNewExcercise } =
    useWorkout();

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                workout={workout}
                handleInputChange={handleInputChange}
                handleSelectChange={handleSelectChange}
                addNewExcercise={addNewExcercise}
              />
            }
          />
          <Route path="/workout/" element={<WorkoutPage workout={workout} />} />
          <Route path="/workoutdone" element={<FinishedPage />} />
          <Route path="/savedworkouts" element={<SavedWorkoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="*"
            element={
              <HomePage
                workout={workout}
                handleInputChange={handleInputChange}
                handleSelectChange={handleSelectChange}
                addNewExcercise={addNewExcercise}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
