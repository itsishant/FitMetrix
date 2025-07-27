import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export const PhotoDashboard = () => {
    return (
        <>
            {/* Desktop/Laptop Version - Exact Original */}
            <div className="hidden lg:flex bg-gradient-to-r from-slate-300 to-slate-300 min-h-screen mt-18 px-5">
                <motion.div 
                className="flex-1 mt-10"
                    style={{
                        animation: "slideLeft 1.4s ease-out forwards",
                        opacity: 0,
                        transform: "translate(-100%)"
                    }}>
                    <h1 className="text-neutral-500 text-7xl font-Poppin ml-44 mt-28">Your Fitness Journey</h1>
                    <h1 className="text-5xl ml-74 text-stone-800 mt-16 font-Poppin">Elevated Through 💪🏻</h1>
                    <h1 className="text-7xl font-Poppin ml-51 text-stone-800 mt-16 flex space-x-4">
                        <p className="text-stone-800">Fit</p>
                        <p className="text-violet-800">Metrix</p>
                        <p className="text-black bg-violet-400 p-3 rounded-3xl inline-block">
                            <Typewriter
                                options={{
                                    strings: ["Progress", "Growth", "Transform", "Achieve"],
                                    autoStart: true,
                                    loop: true,
                                    cursor: "",
                                    delay: 25,
                                    deleteSpeed: 10
                                }}
                            />
                        </p>
                    </h1>
                </motion.div>
                <div className="mr-10"
                    style={{
                        animation: "slideRight 1.4s ease-out forwards",
                        opacity: 0,
                        transform: "translate(100%)"
                    }}>
                    <img
                        src="BAKI HANMA.jpeg"
                        alt="Baki Hanma"
                        className="h-[600px] mt-8 mr-28 rounded-full shadow-lg shadow-violet-700 bg-white border-4 border-violet-700 object-cover object-center"
                        style={{ animation: "borderPulse 2s infinite alternate" }}
                    />
                </div>
            </div>

            {/* Mobile/Tablet Version - Responsive */}
            <div className="lg:hidden flex flex-col bg-gradient-to-r from-slate-300 to-slate-300 min-h-screen mt-16 sm:mt-18 px-4 sm:px-6">
                {/* Text Content */}
                <motion.div
                
                initial={{opacity:0, scale:0.98}}
                animate={{opacity:1, scale:1.05 }}
                transition={{duration:0.6, ease:"easeInOut"}}
                className="flex-1 mt-6 sm:mt-8 text-center"
                    >
                    
                    <h1 className="text-neutral-500 text-3xl sm:text-3xl md:text-4xl font-Poppin mt-8 sm:mt-12">
                        Your Fitness Journey
                    </h1>
                    
                    <h1 className="text-2xl sm:text-2xl md:text-3xl text-stone-800 mt-6 sm:mt-8 font-Poppin">
                        Elevated Through 💪🏻
                    </h1>
                    
                    <div className="mt-6 sm:mt-8 flex flex-col items-center space-y-3">
                        <div className="flex space-x-2">
                            <p className="text-stone-800 text-3xl sm:text-3xl md:text-4xl font-Poppin">Fit</p>
                            <p className="text-violet-800 text-3xl sm:text-3xl md:text-4xl font-Poppin">Metrix</p>
                        </div>
                        <p className="text-black bg-violet-400 px-3 py-2 sm:px-4 sm:py-3 rounded-3xl inline-block text-3xl sm:text-xl md:text-2xl  font-Poppin">
                            <Typewriter
                                options={{
                                    strings: ["Progress", "Growth", "Transform", "Achieve"],
                                    autoStart: true,
                                    loop: true,
                                    cursor: "",
                                    delay: 25,
                                    deleteSpeed: 10
                                }}
                            />
                        </p>
                    </div>
                </motion.div>

                {/* Image Section - Enhanced for mobile */}
                <motion.div
                initial={{opacity:0, y:8}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.8, ease:"easeInOut"}}
                className="flex justify-center mt-8 sm:mt-12 pb-8"
                    >
                    <div className="relative">
                        <img
                            src="BAKI HANMA.jpeg"
                            alt="Baki Hanma"
                            className="h-[470px] w-[280px] sm:h-[350px] sm:w-[350px] md:h-[420px] md:w-[420px] rounded-full shadow-2xl shadow-violet-700/50 bg-white border-4 border-violet-700 object-cover object-center"
                            style={{ 
                                animation: "borderPulse 2s infinite alternate",
                                filter: "contrast(1.1) saturate(1.1)"
                            }}
                        />
                        {/* Glow effect for mobile */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400/20 to-purple-600/20 blur-xl -z-10"></div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};