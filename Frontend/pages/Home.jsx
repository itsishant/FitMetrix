import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "motion/react";


const Home = () => {

    const [firstname, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let navigate = useNavigate();

    return(
        <div>
            <div className="text-center text-6xl">
                <div className="mt-2 mb-6">
                <span className="font-Poppin"> Fit </span>
                <span className="font-Poppin text-violet-700 "> Metrix</span>
                </div>
            </div>


            <div className="flex  items-center gap-10 ">
                <img src="fitness.jpg" className="w-220 border-2 rounded-xl h-169 ml-3" alt="" />
               <div className="border p-10 rounded-4xl shadow-lg w-[500px] h-[520px]">
                    <h2 className="text-5xl font-Poppin mb-18 text-center">Sign Up
                    </h2>
                    <form className="flex flex-col gap-9">
                        <input onChange={(e) => {
                            setName(e.target.value);
                            
                        }}  type="text" placeholder="Name" className="border p-3 rounded-4xl" />
                        <input onChange={(e) => {
                            setEmail(e.target.value);
                        }} type="email" placeholder="Email" className="border p-3 rounded-4xl" />
                        <input onChange={(e) => {
                            setPassword(e.target.value);
                        }} type="password" placeholder="Password" className="border p-3 rounded-4xl" />
                        <motion.button 
                       whileHover={{
                        scale: 0.99,
                       }}
                       whileTap={{
                        scale: 0.90
                       }}
                       style={{
                        scale: 0.90
                       }}
                       transition={{
                        

                        ease: "easeInOut"
                       }}
                       
                        onClick={async (e) => {
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
                        }} className="bg-black text-white text-xl py-4 transition rounded-4xl">Register</motion.button>

                    </form> 
                </div>
            </div>


        </div>
    )
}

export default Home