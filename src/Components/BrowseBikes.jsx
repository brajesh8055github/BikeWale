import React, { useState } from "react";
import bike1 from "../Images/yamaha20200508193220.jpg";
import bike2 from "../Images/tvs20200508193203.jpg";
import bike3 from "../Images/triumph20200508193154.jpg";
import bike4 from "../Images/royal-enfield20200508193112.jpg";
import bike5 from "../Images/ktm20200518163508.jpg";
import bike6 from "../Images/kawasaki1656405887432.jpg";
import bike7 from "../Images/hero20200508192826.jpg";
import bike8 from "../Images/bajaj20200508192534.jpg";
import bike9 from "../Images/bmw20200508192553.jpg";
import bike10 from "../Images/honda20200511152343.jpg";

const bikes = [
  { id: 1, name: "Yamaha", image: bike1 },
  { id: 2, name: "TVS", image: bike2 },
  { id: 3, name: "Triumph", image: bike3 },
  { id: 4, name: "Royal-Enfield", image: bike4 },
  { id: 5, name: "KTM", image: bike5 },
  { id: 6, name: "Kawasaki", image: bike6 },
  { id: 7, name: "Hero", image: bike7 },
  { id: 8, name: "Bajaj", image: bike8 },
  { id: 9, name: "BMW", image: bike9 },
  { id: 10, name: "Honda", image: bike10 },
];

const budgetOptions = [
  "Under ₹50,000",
  "Under ₹60,000",
  "Under ₹70,000",
  "Under ₹80,000",
  "Under ₹1 lakh",
  "Under ₹1.5 lakh",
  "Under ₹2 lakh",
  "Above ₹2 lakh",
];
const displacementOptions = [
  "Upto 100cc",
  "100cc-110cc",
  "110cc-125cc",
  "125cc-150cc",
  "150cc-200cc",
  "200cc-250cc",
  "250cc-500cc",
  "Above 500cc",
];
const bodyOptions = [
  "Sports Bike",
  "Scooter",
  "Cruiser",
  "Commuter",
  "Street Bike",
  "Super Bike",
  "Cafe Racer",
  "Scrambler",
  "Adventure",
  "Moped",
  "Tourer",
  "Maxi Scooter",
];

const BrowseBikes = () => {
  const [activeTab, setActiveTab] = useState("BRAND");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Browse Bikes By</h2>
      {/* Tab Navigation */}
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
          {bikes.map((bike) => (
            <div key={bike.id} className="text-center border">
              <img
                src={bike.image}
                alt={bike.name}
                className="w-full object-contain"
                // className="w-full h-32 object-cover"
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
          {budgetOptions.map((budget, index) => (
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
        // <div className="text-center text-gray-500">
        //   <p>Displacement content goes here.</p>
        // </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {displacementOptions.map((budget, index) => (
            <button
              key={index}
              className="border py-2 px-4 rounded-lg text-center shadow-sm hover:bg-gray-100"
            >
              {budget}
            </button>
          ))}
        </div>
      )}

      {activeTab === "BODY STYLE" && (
       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
       {bodyOptions.map((budget, index) => (
         <button
           key={index}
           className="border py-2 px-4 rounded-lg text-center shadow-sm hover:bg-gray-100"
         >
           {budget}
         </button>
       ))}
     </div>
      )}
    </div>
  );
};

export default BrowseBikes;
