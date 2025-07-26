import { useEffect } from "react";
import { AppBar } from "../components/AppBar";
import { Bottom } from "../components/Bottom";
import { PhotoDashboard } from "../components/PhotoDashboard";
import { Search } from "../components/Search";
import { Workout } from "./Workout";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    
    const navigate = useNavigate();

    useEffect(() => {
        const checkToken = async () => {
        const token = localStorage.getItem("token");
        if(!token){
            setTimeout(() => {
                alert("Hold up! You need an account to see this")
                navigate("/");
            }, 2000)
        }else{
            console.log("Token exists");
        }
    };

    checkToken();
    }, [])

    return(
        <div className="bg-gradient-to-r from-slate-300 to-slate-300 min-h-screen pt-6">
            <AppBar />
            <PhotoDashboard />
            <Bottom />
        </div>
    )
}

export default Dashboard;