export const Bottom = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 p-6">
      <div className="relative w-[730px] h-[500px]">
        <img
          src="bicep.jpeg"
          className="w-full h-full object-cover opacity-90 rounded-4xl"
          alt=""
        />
        <button className="absolute bottom-6 left-6 bg-violet-600 font-Poppin py-3 text-slate-200 cursor-pointer hover:bg-violet-700 px-5 rounded-2xl">
          Bicep Workouts
        </button>
      </div>
      <div className="relative w-[700px] h-[500px]">
        <img
          src="run.jpeg"
          className="w-full h-full object-cover opacity-90 rounded-4xl"
          alt=""
        />
        <button className="absolute bottom-6 left-6 bg-violet-600 font-Poppin py-3 text-slate-200 cursor-pointer hover:bg-violet-700 px-5 rounded-2xl">
          Cardio Training
        </button>
      </div>
    </div>
  );
};
