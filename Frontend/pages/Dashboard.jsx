import { AppBar } from "../components/AppBar";
import { Bottom } from "../components/Bottom";
import { PhotoDashboard } from "../components/PhotoDashboard";
import { Search } from "../components/Search";
import { Workout } from "./Workout";

const Dashboard = () => {
    return(
        <div className="bg-gradient-to-r from-slate-300 to-slate-300 min-h-screen pt-6">
            <AppBar />
            <PhotoDashboard />
            <Bottom />
        </div>
    )
}

export default Dashboard;