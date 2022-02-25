import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import WorkoutPage from "./Pages/WorkoutPage";
import FinishedPage from "./Pages/FinishedPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/workouts">My Workouts</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workout" element={<WorkoutPage />} />
          <Route path="/workoutdone" element={<FinishedPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
