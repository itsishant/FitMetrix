import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { AppBar } from '../components/AppBar';
import { useState } from 'react';
import { workouts } from '../src/assets/workoutData';
import { SeachBar } from '../components/SearchBar';
import { motion } from 'motion/react';

export const Workout = () => {

  const [search, setSearch] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState(null);



const filterWorkouts = workouts.filter((work) => {
     return work.name.toLowerCase().startsWith(search.toLowerCase())
    })

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
<form className="max-w-3xl mx-auto p-4 mt-4"
 onSubmit={(e) => {
  e.preventDefault()
 }}>    
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          setTimeout(() => {
            setSearch(e.target.value)
          }, 800)
        }} placeholder="Search " required />    
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Search</button>

    </div>
</form>

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
            className="bg-slate-200 p-4 shadow-lg h-[470px] w-[450px] rounded-2xl m-4 relative overflow-hidden hover:scale-105 transition"
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
  <div className="fixed top-[300px] left-1/2 translate-x-[-50%]">
    <div
      className=" bg-black text-white h-[400px] w-[800px] flex items-center justify-center rounded-xl"
      onClick={() => setSelectedWorkout(null)}
    >
      {selectedWorkout.name}
    </div>
  </div>
)}

  </motion.div>
  
);

}


