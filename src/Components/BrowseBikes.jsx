import { useState } from "react";
import data from "./data";

const BrowseBikes = () => {
  const [activeTab, setActiveTab] = useState("BRAND");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Browse Bikes By</h2>
      <div className="flex mb-4 flex-wrap gap-2">
        {["BRAND", "BUDGET", "DISPLACEMENT", "BODY STYLE"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-medium ${
              activeTab === tab ? "border-b-2 border-teal-500" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "BRAND" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.logos.map((bike) => (
            <div key={bike.id} className="text-center border">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full object-contain"
              />
              <p className="mt-2 text-sm font-medium text-gray-700">
                {bike.name}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "BUDGET" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.budgetOptions.map((budget, index) => (
            <button
              key={index}
              className="border py-2 px-4 rounded-lg text-center shadow-sm hover:bg-gray-100"
            >
              {budget}
            </button>
          ))}
        </div>
      )}

      {activeTab === "DISPLACEMENT" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.displacementOptions.map((displacement, index) => (
            <button
              key={index}
              className="border py-2 px-4 rounded-lg text-center shadow-sm hover:bg-gray-100"
            >
              {displacement}
            </button>
          ))}
        </div>
      )}

      {activeTab === "BODY STYLE" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.bodyOptions.map((bodyStyle, index) => (
            <button
              key={index}
              className="border py-2 px-4 rounded-lg text-center shadow-sm hover:bg-gray-100"
            >
              {bodyStyle}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseBikes;
