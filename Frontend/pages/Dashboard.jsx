import { AppBar } from "../components/AppBar";
import { PhotoDashboard } from "../components/PhotoDashboard";
import { Search } from "../components/Search";

const Dashboard = () => {
    return(
        <div>
            <AppBar />
            <PhotoDashboard />
        </div>
    )
}

export default Dashboard;