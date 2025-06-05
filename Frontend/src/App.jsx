import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { Workout } from "../pages/Workout";
import { DietPlan } from "../pages/DietPlan";

function App() {



  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/dashboard/workout" element={<Workout />} />
        <Route path="/dashboard/dietplan" element={<DietPlan />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
