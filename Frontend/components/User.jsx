import axios from "axios";
import { useEffect, useState } from "react";

export const User = () => {

    const [profileName, setProfileName] = useState("");

    useEffect(() => {

        const fetchUser = async () => {
             try{
            const token = localStorage.getItem("token")
            const response = await axios.get("http://localhost:3000/api/v1/user/me", {
                headers: {
                    token
                }
            });
            const username = response?.data?.name;
            const firstLetter = username?.[0]?.toUpperCase() || "";
            setProfileName(firstLetter);

            }
            catch(error){
                setProfileName("");
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