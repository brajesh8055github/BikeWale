import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useRef } from "react";
import bike1 from "../Images/apache-160-right-side-view-2.webp"
import bike2 from "../Images/bullet-right-side-view-13.webp"
import bike3 from "../Images/classic-350-right-side-view-62.webp"
import bike4 from "../Images/continental-gt-right-side-view-12.webp"
import bike5 from "../Images/hunter-350-right-side-view-5.webp"
import bike6 from "../Images/mt-15-right-side-view-3.webp"

const products = [
  {
    id: 1,
    name: "Akash Chauhan",
    bike: "BSA Goldstar 650",
    review:
      "Booked the bike just after its launch, and riding it now for the last 3 months...",
    rating: 5,
    image: bike1,
    time: "2 weeks",
  },
  {
    id: 2,
    name: "Abhishek Pal",
    bike: "Yamaha FZ S FI",
    review:
      "The bike is very good looking with the aggressive design of the bike which...",
    rating: 5,
    image: bike2,
    time: "3 days",
  },
  {
    id: 3,
    name: "Divyansh Rana",
    bike: "Royal Enfield Hunter 350",
    review: "The bike is a killer machine. It is designed and made by a trusted...",
    rating: 5,
    image: bike3,
    time: "3 days",
  },
  {
    id: 4,
    name: "Rohan Singh",
    bike: "KTM Duke 390",
    review: "A lightweight bike with a powerful engine. Highly recommended!",
    rating: 5,
    image: bike4,
    time: "1 week",
  },
  {
    id: 5,
    name: "Ishita Verma",
    bike: "Honda Activa 6G",
    review: "Very comfortable and smooth ride for city commuting.",
    rating: 4,
    image: bike5,
    time: "5 days",
  },
  {
    id: 5,
    name: "Ishita Verma",
    bike: "Honda Activa 6G",
    review: "Very comfortable and smooth ride for city commuting.",
    rating: 4,
    image: bike5,
    time: "5 days",
  },
  {
    id: 5,
    name: "Ishita Verma",
    bike: "Honda Activa 6G",
    review: "Very comfortable and smooth ride for city commuting.",
    rating: 4,
    image: bike5,
    time: "5 days",
  },
  {
    id: 5,
    name: "Ishita Verma",
    bike: "Honda Activa 6G",
    review: "Very comfortable and smooth ride for city commuting.",
    rating: 4,
    image: bike5,
    time: "5 days",
  },
];

const UserReviews = () => {
  // const navigate = useNavigate();
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
            
       
<div className="bg-gray-200 p-2">
        <img
          src={product.image}
          alt={product.bike}
          className="w-12 h-12 object-cover rounded-full"
        />
<h3 className="text-lg font-semibold">{product.name}</h3>
<p className="text-sm text-gray-500">Review on {product.bike}</p>
<div className="flex items-center gap-1 mb-4">
        {Array(product.rating)
          .fill()
          .map((_, i) => (
            <span key={i} className="text-green-500">★</span>
          ))}
      </div>
      <p className="text-sm text-gray-700 mb-4">{product.review}</p>
      <div className="text-sm text-gray-500">{product.time} ago</div>
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
      <div className="bg-teal-200 border flex flex-col md:flex-row justify-between items-center px-2 py-4">
        <div>
          <p>Stand a Chance to Win</p>
          <p className="text-gray-500">Write a detailed review and win</p>
          <button class="border-2 border-dotted border-teal-500 bg-yellow-100 text-gray-800 px-4 py-2 rounded-md hover:bg-yellow-200">
  Amazon voucher worth Rs. 2,000
</button>
          </div>
          <div>
            <button className="bg-white border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-gray-100 hover:text-red-600">
  Participate & Win
</button>

            </div>
        </div>
    </>
  );
};

export default UserReviews;