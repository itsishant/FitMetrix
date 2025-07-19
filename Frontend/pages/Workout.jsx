import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { AppBar } from '../components/AppBar';
import { useState } from 'react';
import { workouts } from '../src/assets/workoutData';
import { SeachBar } from '../components/SearchBar';
import { motion } from 'motion/react';
import { toUpperCase } from 'zod/v4';
import { steps } from '../src/assets/Details';
import { useLocation } from 'react-router-dom';

export const Workout = () => {

  const [search, setSearch] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState(null); 
  const [filterWorkout, setFilterWorkout] = useState(false);
  const location = useLocation();
  const [filterbutton, setFilterButton] = useState([]);
  // const [selectedWorkoutDetails, setSelectedWorkoutDetails] = useState(null);

const filterWorkouts = workouts.filter((work) => {
  const matchesSearch = work.name.toLowerCase().includes(search.toLowerCase());
  const matchesFilter =
    filterbutton === "default" || filterbutton.length === 0 || filterbutton.includes(work.type?.toLowerCase());
  return matchesSearch && matchesFilter;
});

 

    const toggleFilter = (type) => {
  setFilterButton((prev) =>
    prev.includes(type)
      ? prev.filter((item) => item !== type)
      : [...prev, type]
  );
};



  return (
    <motion.div
    className='bg-gradient-to-r from-slate-300 to-slate-300 min-h-screen'>
      <AppBar />
  <div className="flex justify-center items-center space-x-4">
    <FontAwesomeIcon icon={faDumbbell} className="text-6xl mt-26 rotate-105 vibrate" />
    <p className="font-Poppin text-6xl text-black mt-29 bg-violet-500 rounded-full inline-block px-6 py-3">
      Workouts
    </p>
    <FontAwesomeIcon icon={faDumbbell} className="text-6xl mt-26 rotate-75 vibrate" />
  </div>
<form className="max-w-3xl mx-auto flex items-center gap-4  -4 mt-4"
 onSubmit={(e) => {
  e.preventDefault()
 }}>    
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        
        <input type="text" id="default- h" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          setTimeout(() => {
            setSearch(e.target.value)
          }, 800)
        }} placeholder="Search " required />    
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Search</button>
        
    </div>
    
<button 
 onClick={() => setFilterWorkout(prev => !prev)}
  className="cursor-pointer flex rounded-lg bg-gray-700 py-3 px-4 text-neutral-300 text-md font-Poppin hover:text-slate-300">
  FILTER  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-1 size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>

</button>

</form>


{filterWorkout && (
<div className="bg-slate-200 p-4 rounded-2xl shadow-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-sm mt-4 max-w-4xl mx-auto">

    <button onClick={() => {
      toggleFilter("upper")
    }} className= {filterbutton.includes("upper") ? "cursor-pointer px-2   space-x-2  py-1 text-white h-8 font-Poppin bg-gray-700 rounded" : "cursor-pointer px-2 py-1 h-8 bg-slate-300  font-Poppin rounded"} >Upper</button>
    <button onClick={() => {
      toggleFilter("lower")
    }} className={filterbutton.includes("lower") ? "cursor-pointer px-2 space-x-2 py-1 text-white font-Poppin h-8 bg-gray-700 rounded" : "cursor-pointer h-8 px-2 py-1 bg-slate-300 font-Poppin rounded"}>Lower</button>
    <button onClick={() => {
      toggleFilter("core")
    }} className= {filterbutton.includes("core") ? "cursor-pointer px-2 space-x-2 py-1 text-white font-Poppin h-8 bg-gray-700 rounded" : "cursor-pointer px-2 py-1 h-8 bg-slate-300 font-Poppin rounded"}  >Core</button>
    <button onClick={() => {
      toggleFilter("full")
    }} className= {filterbutton.includes("full") ? "cursor-pointer px-2 space-x-2 py-1 text-white font-Poppin h-8 bg-gray-700 rounded" : "cursor-pointer px-2 h-8 py-1 bg-slate-300 font-Poppin rounded"} >Full</button>
    <button onClick={() => {
      toggleFilter("arms")
    }} className = {filterbutton.includes("arms") ? "cursor-pointer px-2 space-x-2 py-1 text-white font-Poppin h-8 bg-gray-700 rounded" : "cursor-pointer px-2 py-1 h-8 bg-slate-300 font-Poppin rounded"} >Arms
     </button>
    <button onClick={() => {
      toggleFilter("cardio")
    }} className= {filterbutton.includes("cardio") ? "cursor-pointer px-2 space-x-2 py-1 text-white font-Poppin h-8 bg-gray-700 rounded" : "cursor-pointer h-8 px-2 py-1 bg-slate-300 font-Poppin rounded"} >Cardio</button>
    <button onClick={() => {
      toggleFilter("legs")
    }} className = {filterbutton.includes("legs") ? "cursor-pointer px-2 space-x-2 py-1 text-white font-Poppin h-8 bg-gray-700 rounded" : "cursor-pointer h-8 px-2 py-1 bg-slate-300 font-Poppin rounded"} >Legs
     </button>
      <button onClick={() => {
      toggleFilter("shoulder")
    }} className = {filterbutton.includes("shoulder") ? "cursor-pointer px-2 space-x-2 py-1 text-white font-Poppin h-8 bg-gray-700 rounded" : "cursor-pointer h-8 px-2 py-1 bg-slate-300 font-Poppin rounded"} >Shoulders
     </button>   
  </div>
)}

{/* <div className=' h-120 w-110 border-4 border-violet-700 rounded-2xl m-12'>

</div>
 */}

<motion.div 
    initial={{ opacity:0 , y: 50 }}
    animate={{ opacity: 1, y: 10 }}
    transition={{ duration: 1.6 }}
     className="grid grid-cols-1 gap-6 md:grid-cols-3 justify-between p-4 ml-4">
        {filterWorkouts.map((workout, index) => (
          <motion.div 
          whileHover={{ scale: 1.02 }}
            key={index}
            className="bg-slate-200 p-2 shadow-lg h-[470px] w-[450px] border-1 rounded-2xl m-4 relative overflow-hidden hover:scale-105 transition"
            
          >
            <img
              src={workout.image}
              alt={workout.name}
              className="w-full object-cover h-90 rounded-2xl opacity-85 absolute-0"
            />
            <div
              className="text-center relative cursor-pointer p-1.5 font-bold font-Poppin hover:text-violet-600 text-2xl text-gray-800"
             onClick={() => setSelectedWorkout(workout)}

            >
              {workout.name}
            </div>
            <div className="text-center ml-2 text-sm text-gray-600">{workout.descriptions}</div>
          </motion.div>
        ))}
        
      </motion.div>
     


{selectedWorkout && (
  <motion.div
  initial={{
    opacacity: 0, scale: 0.8
  }}
  animate={{
    opacity: 1, scale:1
  }}
  transition={{ duration: 0.4} }
  className="fixed top-[220px] left-1/2 translate-x-[-50%]">
    <div
    className="bg-slate-300 center  text-white h-[440px] w-[800px] flex flex-col items-center justify-start pt-4  border-2 border-black rounded-2xl"
    
    >
      <motion.div 
      whileHover={{ scale: 1.05 }}
      initial={{
        opacity: 0, scale:0.4
      }}
      animate={{
        opacity: 1, scale:1
      }} 
      transition={{
        duration: 0.2
      }}   className='text-4xl text-black text-shadow-black font font-Poppin  mb-   bg-violet-500 p-2 rounded-2xl text-center'
      >

        <motion.p 
        initial={{
          opacity:1, scale:0.8
        }} 
        className='text-center'
        // transition={{ duration: 0.2 }}
       >{selectedWorkout.name}
       </motion.p>
       
       </motion.div>  
       <div 
        className=''>
       <motion.img
      initial={{ scale: 0.8 }}
       whileHover={{ scale: 1.05 }}
       transition={{
        duration:0.2
       }} 
       src="/delete.png" alt=""  hello className="cursor-pointer absolute left-88 bottom-96 text-2xl size-8 ml-98" 
       onClick={() => {setSelectedWorkout(null)}}/>
       </div>
       <div className='text-left text-lg text-black font-Poppin mt-4 space-y-4 '>


        {selectedWorkout.details.map((steper,index) => (
          
            <motion.p 
            initial = {{
              opacity: 0, x: -20
            }}
            animate = {{
              opacity: 1, x: 0    

            }}
            transition={{
              duration: 0.4, delay: index * 0.1 , ease: "easeInOut"
            }}
             key={index} className='text-xl text-left'> 
            {"➤ " +steper}
            </motion.p>
        ))} 
       </div>
       
    
      {/* {selectedWorkout.name} */}
    </div>
  </motion.div>
)}

  </motion.div>
  
);

}


