import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

export const Workout = () => {

  return (
    <div>
  <div className="flex justify-center items-center mt-12 space-x-4">
    <FontAwesomeIcon icon={faDumbbell} className="text-6xl rotate-105 vibrate" />
    <p className="font-Poppin text-6xl text-black mt-4 bg-violet-500 rounded-full inline-block px-6 py-3">
      Workouts
    </p>
    <FontAwesomeIcon icon={faDumbbell} className="text-6xl rotate-75 vibrate" />
  </div>
  <div className='flex '>
    <input type='text' className='border-2 w-[50%] ml-[25%] rounded-4xl p-4 mt-8'></input>
  </div>
  </div>
);

}


