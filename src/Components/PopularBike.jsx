import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import data from "./data";

const PopularBike = () => {
  const [filteredProducts] = useState(data.products);
  const containerRef = useRef(null);
  const navigate = useNavigate();

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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Get Offers on Popular Bikes</h2>
      <div className="relative flex items-center">
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
        >
          <FaChevronLeft size={20} />
        </button>

        <div
          ref={containerRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory bike"
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] bg-white shadow-md rounded-md flex-shrink-0 cursor-pointer snap-center"
              onClick={() => navigate(`/popular/${product.name}`)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="bg-gray-100 p-2">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-teal-500 font-medium">
                  {product.price} <span className="text-gray-400">Onwards</span>
                </p>
                <p>Avg. Ex-Showroom price</p>
                <hr/>
                <a href="/" className="text-blue-500">Get best offer</a>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white rounded-full shadow-md p-2 text-gray-700 hover:bg-gray-100"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default PopularBike;
