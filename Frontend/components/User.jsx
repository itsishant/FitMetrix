import axios from "axios";
import { useEffect, useState } from "react";
import API from "../src/axios";

export const User = () => {

    const [profileName, setProfileName] = useState("");

    useEffect(() => {

        const fetchUser = async () => {
             try{
            const token = localStorage.getItem("token")
            const response = await API.get("/user/me", {
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