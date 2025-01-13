import banner from '../Images/get-final-price-banner.jpg';

const Onroad = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat text-white py-12 px-6"
      style={{
        backgroundImage: `url(${banner})`, 
      }}
    >
    
      <div className="absolute inset-0 bg-black bg-opacity-5"></div>
      
    
      <div className="relative max-w-lg mx-auto lg:mx-0 lg:ml-12 bg-gray-600 bg-opacity-80 p-6 rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-left">Check On-Road Price</h2>
        
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Type to select bike Name, e.g., Royal Enfield"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          
          <div className="relative">
            <select
              className="w-full p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
            >
              <option value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Patna">Patna</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>
          
        </div>
        
        <p className="text-sm mt-4 text-gray-300">
          Check the on-road price in your city
        </p>
      </div>
    </div>
  );
};

export default Onroad;
