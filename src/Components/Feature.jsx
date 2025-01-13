import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef } from "react";
import bike1 from "../Images/apache-160-right-side-view-2.webp"
import bike2 from "../Images/bullet-right-side-view-13.webp"
import bike3 from "../Images/classic-350-right-side-view-62.webp"
import bike4 from "../Images/continental-gt-right-side-view-12.webp"
import bike5 from "../Images/hunter-350-right-side-view-5.webp"
import bike6 from "../Images/mt-15-right-side-view-3.webp"
import bike7 from "../Images/r15-right-side-view-7.webp"
import bike8 from "../Images/raider-125-right-side-view-20 (1).webp"
import bike9 from "../Images/sp-125-right-side-view-2.webp"
import bike10 from "../Images/xtreme-125r-right-side-view-4.webp"
const products = [
  {
    name: "Royal Enfield Hunter 350",
    price: "₹ 1,49,900",
    image: bike1,
  },
  {
    name: "Honda SP 125",
    price: "₹ 90,111",
    image: bike2,

  },
  {
    name: "Yamaha MT 15 V2",
    price: "₹ 1,70,064",
    image: bike3,

  },
  {
    name: "Suzuki Gixxer",
    price: "₹ 1,35,700",
    image: bike4,

  },
  {
    name: "KTM Duke 200",
    price: "₹ 1,85,000",
    image: bike5,

  },
  {
    name: "KTM Duke 200",
    price: "₹ 1,85,000",
    image: bike6,

  },
  {
    name: "KTM Duke 200",
    price: "₹ 1,85,000",
    image: bike7,

  },
  {
    name: "KTM Duke 200",
    price: "₹ 1,85,000",
    image: bike8,

  },
  {
    name: "KTM Duke 200",
    price: "₹ 1,85,000",
    image: bike9,

  },
  {
    name: "KTM Duke 200",
    price: "₹ 1,85,000",
    image: bike10,

  },
];

const Feature = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
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

  // const applyFilter = (filterType) => {
  //   if (filterType === "bestSeller") {
  //     setFilteredProducts(products.filter((product) => product.bestSeller));
  //   } else if (filterType === "is5G") {
  //     setFilteredProducts(products.filter((product) => product.is5G));
  //   } else if (filterType === "brand") {
  //     setFilteredProducts(products.filter((product) => product.brand === "Apple"));
  //   } else {
  //     setFilteredProducts(products);
  //   }
  // };

  return (
    <>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Featured Bikes</h2>
      <div className="flex mb-4 flex-wrap gap-2">
        <button className="px-4 py-2 font-medium border-b-2 border-teal-500">TRENDING</button>
        <button className="px-4 py-2 font-medium">POPULAR</button>
        <button className="px-4 py-2 font-medium">ELECTRIC</button>
        <button className="px-4 py-2 font-medium">UPCOMING</button>
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
            className="flex space-x-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory mobile"
          >
            {filteredProducts.map((product) => {
              return (
           <div
          key={product.id}
          className="min-w-[250px] bg-white shadow-md rounded-md p-4 flex-shrink-0 cursor-pointer snap-center"
        > 
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <div className="bg-gray-200 p-2">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-teal-500 font-medium">{product.price} <span className="text-gray-400">Onwards</span></p>
      <p>Avg. Ex-Showroom price</p>
      <button className="border text-teal-500 px-2 py-1 bg-white">Check on-road price</button>
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

export default Feature;