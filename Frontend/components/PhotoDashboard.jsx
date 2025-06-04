export const PhotoDashboard = () => {
    return (
        <div className="flex bg-white mt px-10">
            <div className="flex-1 mt-10">
                <h1 className="text-7xl font-Poppin ml-44 mt-28">Your fitness journey</h1>
                <h1 className="text-5xl ml-74 mt-16 font-Poppin">elevated through 💪🏽</h1>
                <h1 className="text-7xl font-Poppin ml-51 mt-16 flex space-x-4">
                 <p className="text-black">Fit</p>
                <p className="text-violet-700">Metrix</p>
                 <p className="text-black ">insights</p>
                </h1>
            </div>
            <div className="mr-10">
                <img
                    src="BAKI HANMA.jpeg"
                    alt="Baki Hanma"
                    className="h-[600px] mt-8 mr-28 shadow-lg shadow-violet-700 bg-white rounded-full"
                />
            </div>
        </div>
    );
};
