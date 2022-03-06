import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FinishedPage from "./pages/FinishedPage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import SavedWorkoutPage from "./pages/SavedWorkoutsPage";
import WorkoutPage from "./pages/WorkoutPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout" element={<WorkoutPage />} />
          <Route path="/savedworkouts" element={<SavedWorkoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
