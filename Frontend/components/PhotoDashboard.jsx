import Typewriter from "typewriter-effect";

export const PhotoDashboard = () => {
    return (
        <div className="flex bg-gradient-to-r from-slate-300 to-slate-300 min-h-screen mt-18 px-5 "  >
            <div className="flex-1 mt-10 "
            style={{
    animation: "slideLeft 1.4s ease-out forwards",
    opacity: 0,
    transform: "translate(-100%)"  
  }}>
                <h1 className="text-neutral-500 text-7xl font-Poppin ml-44 mt-28">Your Fitness Journey</h1>
                <h1 className="text-5xl ml-74 text-stone-800 mt-16 font-Poppin">Elevated Through 💪🏻 </h1>
                <h1 className="text-7xl font-Poppin ml-51 text-stone-800 mt-16 flex space-x-4">
                 <p className="text-stone-800">Fit</p>
                <p className="text-violet-800">Metrix</p>
                 <p className="text-black bg-violet-400 p-3 rounded-3xl inline-block"><Typewriter 
                 options={{
                    strings: ["Progress", "Growth", "Transform", "Achieve"],
                    autoStart: true,
                    loop :true,
                    cursor: "",
                    delay: 25 ,
  deleteSpeed: 10
                 }}/></p>
                </h1>
            </div>
            <div className="mr-10"
                    style={{
    animation: "slideRight 1.4s ease-out forwards",
    opacity: 0,
    transform: "translate(100%)"  
  }}>
             <img
  src="BAKI HANMA.jpeg"
  alt="Baki Hanma"
  className="h-[600px] mt-8 mr-28 rounded-full shadow-lg shadow-violet-700 bg-white border-4 border-violet-700"
  style={{ animation: "borderPulse 2s infinite alternate" }}
/>


            </div>
        </div>
    );
};