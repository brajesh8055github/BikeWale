import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef } from "react";
import data from "./data"; 

const Trending = () => {
  const [activeTab, setActiveTab] = useState("MILEAGE");
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  const tabDataMap = {
    MILEAGE: data.bikes,
    SPORTS: data.populars,
    CRUISERS: data.electric,
  };

  const currentData = tabDataMap[activeTab] || [];

  return (
    <div className="p-6 relative">
      <h2 className="text-2xl font-bold mb-6">Trending Bikes of January 2025</h2>

      {/* Tab Navigation */}
      <div className="flex mb-4 flex-wrap gap-2">
        {["MILEAGE", "SPORTS", "CRUISERS"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium ${
              activeTab === tab ? "border-b-2 border-teal-500 text-teal-500" : "text-gray-600"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <button
        onClick={scrollLeft}
        className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={scrollRight}
        className="absolute top-1/2 transform -translate-y-1/2 right-2 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Tab Content */}
      <div
        ref={containerRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory bike"
      >
        {currentData.map((product, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-white shadow-md rounded-md flex-shrink-0 cursor-pointer snap-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="bg-gray-100">
              <div className="p-2">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-teal-500 font-medium">
                {product.price} <span className="text-gray-400">Onwards</span>
              </p>
              <p>Avg. Ex-Showroom price</p>
              <button className="border text-teal-500 px-2 py-1 bg-white">
                Check on-road price
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
