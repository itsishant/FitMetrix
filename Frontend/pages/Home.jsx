import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Home = () => {

    const [firstname, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate();

    return(
        <div>
            <div className="text-center text-6xl">
                <div className="mt-2 mb-6">
                <span className="font-extrabold"> Fit </span>
                <span className="font-bold  "> Metrix</span>
                </div>
            </div>


            <div className="flex  items-center gap-10 ">
                <img src="fitness.jpg" className="w-220 border-2 rounded-xl h-169 ml-3" alt="" />
               <div className="border p-10 rounded-4xl shadow-lg w-[500px] h-[520px]">
                    <h2 className="text-5xl font-bold mb-22 text-center">Sign Up
                    </h2>
                    <form className="flex flex-col gap-8">
                        <input onChange={(e) => {
                            setName(e.target.value);
                        }} type="text" placeholder="Name" className="border p-3 rounded" />
                        <input onChange={(e) => {
                            setEmail(e.target.value);
                        }} type="email" placeholder="Email" className="border p-3 rounded" />
                        <input onChange={(e) => {
                            setPassword(e.target.value);
                        }} type="password" placeholder="Password" className="border p-3 rounded" />
                        <button onClick={async (e) => {
                            e.preventDefault(); 

                            if(!firstname || !email || !password){
                                alert("Please fill all the fields");
                                return;
                            }

                            try{
                                const response = await axios.post("http://localhost:1000/api/v1/user/signup", {
                                    firstname,
                                    email,
                                    password
                                })
                                console.log(response);
                                navigate("/dashboard")
                            } catch(err){
                                alert("Please try again later!")
                            }
                        }} className="bg-violet-700 text-white py-4 hover:bg-violet-800 transition rounded-4xl">Register</button>

                    </form> 
                </div>
            </div>


        </div>
    )
}

export default Home