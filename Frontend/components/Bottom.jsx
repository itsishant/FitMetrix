import { useNavigate } from "react-router-dom";

export const Bottom = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard/workout");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col">
      {/* Desktop/Laptop Version - Exact Original */}
      <div className="hidden lg:block">
        <div className="flex flex-wrap justify-center gap-10 p-6">
          <div className="relative w-[730px] h-[500px]">
            <img
              src="bicep.jpeg"
              className="w-full h-full object-cover opacity-90 rounded-4xl"
              alt="Bicep"
            />
            <button
              className="absolute bottom-6 left-6 bg-violet-600 font-Poppin py-3 text-slate-200 cursor-pointer hover:bg-violet-700 px-5 rounded-2xl"
              onClick={handleClick}
            >
              Bicep Workouts
            </button>
          </div>
          <div className="relative w-[700px] h-[500px]">
            <img
              src="run.jpeg"
              className="w-full h-full object-cover opacity-90 rounded-4xl"
              alt="Cardio"
            />
            <button
              className="absolute bottom-6 left-6 bg-violet-600 font-Poppin py-3 text-slate-200 cursor-pointer hover:bg-violet-700 px-5 rounded-2xl"
              onClick={handleClick}
            >
              Cardio Training
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Version - Responsive */}
      <div className="lg:hidden">
        <div className="flex flex-col items-center gap-6 p-4 sm:p-6">
          {/* Bicep Workout Card */}
          <div className="relative w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] h-[250px] sm:h-[300px] md:h-[350px]">
            <img
              src="bicep.jpeg"
              className="w-full h-full object-cover opacity-90 rounded-3xl sm:rounded-4xl"
              alt="Bicep"
            />
            <button
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-violet-600 font-Poppin py-2 sm:py-3 text-slate-200 cursor-pointer hover:bg-violet-700 px-4 sm:px-5 rounded-xl sm:rounded-2xl text-sm sm:text-base"
              onClick={handleClick}
            >
              Bicep Workouts
            </button>
          </div>
          
          {/* Cardio Training Card */}
          <div className="relative w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] h-[250px] sm:h-[300px] md:h-[350px]">
            <img
              src="run.jpeg"
              className="w-full h-full object-cover opacity-90 rounded-3xl sm:rounded-4xl"
              alt="Cardio"
            />
            <button
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-violet-600 font-Poppin py-2 sm:py-3 text-slate-200 cursor-pointer hover:bg-violet-700 px-4 sm:px-5 rounded-xl sm:rounded-2xl text-sm sm:text-base"
              onClick={handleClick}
            >
              Cardio Training
            </button>
          </div>
        </div>
      </div>

      {/* Footer - Responsive for all screens */}
      <footer className="bg-slate-900 text-gray-300 text-center py-4 sm:py-6 mt-6 px-4">
        <div className="text-base sm:text-lg font-Poppin">© {new Date().getFullYear()} FitMetrix</div>
        <div className="mt-2 text-xs sm:text-sm">
          Crafted with ❤️ by <span className="text-violet-400 font-semibold">Ishant</span>
        </div>
      </footer>
    </div>
  );
};