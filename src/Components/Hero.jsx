import hero from '../Images/home-top-banner-4.jpg'

const Hero = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[80vh] text-white"
            style={{
                backgroundImage: `url(${hero})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-5"></div>
            <div className="absolute bottom-6 w-full px-6 flex flex-col items-center">
                <div className="text-center mb-4">
                    <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
                        FIND THE RIGHT BIKE
                    </h1>
                    <p className="mt-2 text-sm sm:text-lg">
                        Get Comprehensive Information on Bikes!
                    </p>
                </div>


                <div className="w-full max-w-md relative">
                    <input
                        type="text"
                        placeholder="Search your bike here..."
                        className="w-full p-3 rounded bg-white text-gray-800 focus:outline-none shadow-lg"
                    />
                    <button
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 focus:outline-none"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
