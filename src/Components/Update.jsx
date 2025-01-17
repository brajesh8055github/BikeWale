import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef } from "react";
import bike1 from '../Images/right-side-view.webp'
import bike2 from '../Images/ronin-right-side-view-7.webp'
import bike3 from '../Images/bullet-right-side-view-13.webp'
import bike4 from "../Images/continental-gt-right-side-view-12.webp";
import bike5 from "../Images/hunter-350-right-side-view-5.webp";
import bike6 from "../Images/mt-15-right-side-view-3.webp";
import bike7 from "../Images/r15-right-side-view-7.webp";
import bike8 from "../Images/raider-125-right-side-view-20 (1).webp";

const products = [
  { title: "Aprilia Tuono 457 Launch Soon - What to expect?", description: "The Aprilia Tuono 457 will be powered by the same 457cc liquid-cooled", author:"By Ajinkya Lad", image: bike1, category: "NEWS" },
  { title: "Royal Enfield Scram 440 – What to expect?",description: "Here's all you need to know about the Royal Enfield Scram 440.",author:"By Ajinkya Lad", image: bike2, category: "NEWS" },
  { title: "Hero’s Vida trademarks new off-road bike",description: "Hero MotoCrop unveiled a host of new motorcycles at EICMA 2024",author:"By Pratheek Kunder", image: bike3, category: "NEWS" },
  { title: "Yamaha R15 2025 Model Vida trademarks", description: "A sneak peek into the Yamaha R15 2025 model with upgraded features.",author: "By John Doe", image: bike4, category: "EXPERT REVIEWS" },
  {title: "Electric bikes dominating the market",description: "An in-depth look at how electric bikes are shaping the future of transport.",author: "By Mike Johnson", image: bike5, category: "EXPERT REVIEWS" },
  {title: "Ducati Multistrada Launch",description: "Details about the Ducati Multistrada launch and expected pricing.",author: "By Jane Smith",image: bike6, category: "EXPERT REVIEWS" },
  {title: "Electric bikes dominating the market",description: "An in-depth look at how electric bikes are shaping the future of transport.",author: "By Mike Johnson", image: bike7, category: "VIDEOS" },
  {title: "Electric bikes dominating the market",description: "An in-depth look at how electric bikes are shaping the future of transport.",author: "By Mike Johnson", image: bike8, category: "VIDEOS" },
  {title: "Electric bikes dominating the market",description: "An in-depth look at how electric bikes are shaping the future of transport.",author: "By Mike Johnson", image: bike2, category: "VIDEOS" },
];

const Update = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("ALL"); 
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

  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === "ALL") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((product) => product.category === category));
    }
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Latest Updates</h2>
<div className="flex mb-4 flex-wrap gap-2">
          <button
            onClick={() => filterByCategory("ALL")}
            className={`px-4 py-2 font-medium ${
              activeCategory === "ALL" ? "border-b-2 border-teal-500" : ""
            }`}
          >
            ALL
          </button>
          <button
            onClick={() => filterByCategory("NEWS")}
            className={`px-4 py-2 font-medium ${
              activeCategory === "NEWS" ? "border-b-2 border-teal-500" : ""
            }`}
          >
            NEWS
          </button>
          <button
            onClick={() => filterByCategory("EXPERT REVIEWS")}
            className={`px-4 py-2 font-medium ${
              activeCategory === "EXPERT REVIEWS" ? "border-b-2 border-teal-500" : ""
            }`}
          >
           EXPERT REVIEWS
          </button>
          <button
            onClick={() => filterByCategory("VIDEOS")}
            className={`px-4 py-2 font-medium ${
              activeCategory === "VIDEOS" ? "border-b-2 border-teal-500" : ""
            }`}
          >
            VIDEOS
          </button>
        </div>


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
            {filteredProducts.map((product, index) => {
              return (
                <div
                  key={index}
                  className="w-[400px] bg-white shadow-md rounded-md p-4 flex-shrink-0 cursor-pointer snap-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-40 object-cover rounded-md mb-4"
                  />
                 
                  <div className="p-2">
                    <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                    <p className="text-gray-400">
                      {product.description}
                    </p>
                    <p>Avg. Ex-Showroom price</p>
                    <button className="border text-teal-500 px-2 py-1 bg-white">
                      Check on-road price
                    </button>
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
        <div className="mt-4">
          <a href="#" className="text-teal-500 font-medium hover:underline">
            All Trending Bikes &gt;
          </a>
        </div>
      </div>
    </>
  );
};

export default Update;