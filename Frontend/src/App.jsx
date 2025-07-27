import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import { Workout } from "../pages/Workout";
import { DietPlan } from "../pages/DietPlan";
import { AboutUs } from "../pages/Aboutus";
import Signin from "../pages/Signin";

function App() {

// hidden md:block lg:block xl:block

  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/dashboard/workout" element={<Workout />} />
        <Route path="/dashboard/dietplan" element={<DietPlan />} />
        <Route path="/dashboard/aboutus" element={<AboutUs />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
