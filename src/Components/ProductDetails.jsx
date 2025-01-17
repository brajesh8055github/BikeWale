import { useParams, useNavigate } from "react-router-dom";
import data from "./data";
const ProductDetails = () => {
  const { category, name } = useParams();
  const navigate = useNavigate();
  const product =
    category && data[category]
      ? data[category].find((item) => String(item.name) === name)
      : data.products.find((item) => String(item.name) === name);


  if (!product) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Go back to home
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-contain mb-4 rounded"
      />

      <p className="text-xl font-medium text-teal-500 mb-2">{product.price}</p>
      <p className="text-gray-600 mb-4">Avg. Ex-Showroom price</p>
      <p className="text-gray-700">
        EMI: <span className="text-teal-600">₹{product.emi}/month</span>
      </p>

      <button
        onClick={() => alert("EMI Calculator Clicked")}
        className="mt-4 bg-gray-100 text-teal-500 px-4 py-2 rounded hover:bg-gray-200"
      >
        EMI Calculator
      </button>
      <button
        onClick={() => alert("Offers Clicked")}
        className="ml-4 mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Get January Offers
      </button>

      <button
        onClick={() => navigate("/")}
        className="block mt-6 text-teal-500 hover:underline"
      >
        Go back to home
      </button>
    </div>
  );
};

export default ProductDetails;
