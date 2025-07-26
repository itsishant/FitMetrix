import { useNavigate } from "react-router-dom";

export const Bottom = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/dashboard/workout");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col">
      {/* Workout Sections */}
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

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 text-center py-6 mt-6">
        <div className="text-lg font-Poppin">© {new Date().getFullYear()} FitMetrix</div>
        <div className="mt-2 text-sm">
          Crafted with ❤️ by <span className="text-violet-400 font-semibold">Ishant</span>
        </div>
      </footer>
    </div>
  );
};
