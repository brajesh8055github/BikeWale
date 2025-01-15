import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef } from "react";
import data from "./data";
const PopularBike = () => {
  const [filteredProducts, setFilteredProducts] = useState(data.products);
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
  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Get Offers on Popular Bikes</h2>
        <div className="relative flex items-center">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Product Cards */}
          <div
            ref={containerRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory bike"
          >
            {filteredProducts.map((product) => {
              return (
           <div
          key={product.id}
          className="min-w-[250px] bg-white shadow-md rounded-md  flex-shrink-0 cursor-pointer snap-center"
        > 
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <div className="bg-gray-100">
        <div className="p-2">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-teal-500 font-medium">{product.price} <span className="text-gray-400">Onwards</span></p>
      <p>Avg. Ex-Showroom price</p>
      <button className="border text-teal-500 px-2 py-1 bg-white">Check on-road price</button>
    </div>
    </div>
    </div>


              );
            })}
          </div>


          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default PopularBike;


