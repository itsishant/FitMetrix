import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { AppBar } from '../components/AppBar';

export const Workout = () => {

   const workouts = [
  { name: "Incline Push-Ups", image: "/public/Inclined-pushup.gif", descriptions: "A beginner-friendly push-up variation that targets the chest with reduced resistance." },
  { name: "Overhead Squat", image: "/public/squats.gif", descriptions: "A full-body squat performed while holding a barbell overhead, improving strength, stability, and mobility." },
  { name: "Seated Barbell Shoulder Press", image: "/public/chest.gif", descriptions: "An upper-body strength exercise where the lifter presses a barbell overhead while seated, targeting the shoulders and triceps." },
  { name: "Dumbbell Bicep Curl", image: "/public/bicep.gif", descriptions: "A classic arm exercise where you lift dumbbells by bending your elbows, isolating and building the biceps."},
  
  { name: "Lunges", image: "/images/lunges.jpg" },
  
];


  return (
    <div className='bg-gradient-to-r from-slate-300 to-slate-300 min-h-screen'>
      <AppBar />
  <div className="flex justify-center items-center space-x-4">
    <FontAwesomeIcon icon={faDumbbell} className="text-6xl mt-26 rotate-105 vibrate" />
    <p className="font-Poppin text-6xl text-black mt-29 bg-violet-500 rounded-full inline-block px-6 py-3">
      Workouts
    </p>
    <FontAwesomeIcon icon={faDumbbell} className="text-6xl mt-26 rotate-75 vibrate" />
  </div>
<form class="max-w-3xl mx-auto p-4 mt-4">    
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-violet-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

{/* <div className=' h-120 w-110 border-4 border-violet-700 rounded-2xl m-12'>

</div>
 */}

<div className="grid grid-cols-1 gap-6 md:grid-cols-3  justify-between p-4 ml-4">
  {workouts.map((workout, index) => (
    <div key={index} className="bg-slate-200 h-[450px] w-[450px] rounded-2xl m-4 relative overflow-hidden shadow-lg hover:scale-105 transition">
      <img src={workout.image} alt={workout.name} className="w-full object-cover h-90 rounded-2xl opacity-85 absolute-0" />
      <div className=" text-center relative cursor-pointer p-1.5 font-bold font-Poppin hover:text-violet-600 text-2xl text-gray-800">{workout.name}</div>
      <div className="text-center ml-2 text-sm text-gray-600">
        {workout.descriptions}
      </div>

    </div>
  ))}
</div>



  </div>
);

}


