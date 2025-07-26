import axios from "axios";
import { useEffect, useState } from "react";

export const User = () => {

    const [profileName, setProfileName] = useState("");

    useEffect(() => {

        const fetchUser = async () => {
             try{
            const token = localStorage.getItem("token")
            const response = await axios.get("http://localhost:1000/api/v1/user/me", {
                headers: {
                    token
                }
            });
            const username = response?.data?.name;
            const firstletter = username.toUpperCase();
            setProfileName(firstletter);
            }
            catch(error){
                console.error("Unable to fetch the name");
            }
        };

        fetchUser()

    }, [])

    return(
        <div>
            {profileName ? profileName[0] : ""}
        </div>
    )   
}