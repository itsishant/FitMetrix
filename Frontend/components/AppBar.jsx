export const AppBar = () => {
    return(
        <div className="flex justify-between items-center h-22 bg-white-600 shadow-2xl border-2 border-violet-600 rounded-4xl mt-4 ml-2 mr-2 shadow--100">
            <div className="m-6 text-5xl flex space-x-2">
                <p className="font-extrabold">Fit</p> 
                <p className="text-violet-700 font-bold"> Metrix</p>
            </div>

            <div className="flex justify-between space-x-8 m-6">
                <div className="text-xl font-semibold transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 ">
                   <button className="cursor-pointer  hover:bg-violet-400  p-2 rounded-2xl" >Home</button>
                </div>
                <div className="text-center text-xl font-semibold transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                   <button className="cursor-pointer  hover:bg-violet-400 p-2 rounded-2xl ">Workouts</button>
                </div>
                <div className="text-center text-xl font-semibold transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                     <button className="cursor-pointer  hover:bg-violet-400  p-2 rounded-2xl " >Diet plan</button>
                </div>
                <div className="text-center text-xl font-semibold transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                     <button className="cursor-pointer  hover:bg-violet-400  p-2 rounded-2xl " >Contact us</button>
                </div>
                <div className="text-center text-xl font-semibold transition delay-150 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
                   <button className="cursor-pointer  hover:bg-violet-400  p-2 rounded-2xl " >AI Assistant</button>
                </div>
            </div>
            <div className="m-6 text-2xl">
                User
            </div>
        </div>
    )
}