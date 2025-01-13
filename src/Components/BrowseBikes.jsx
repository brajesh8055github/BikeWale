import bike1 from '../Images/yamaha20200508193220.jpg'
import bike2 from '../Images/tvs20200508193203.jpg'
import bike3 from '../Images/triumph20200508193154.jpg'
import bike4 from '../Images/royal-enfield20200508193112.jpg'
import bike5 from '../Images/ktm20200518163508.jpg'
import bike6 from '../Images/kawasaki1656405887432.jpg'
import bike7 from '../Images/hero20200508192826.jpg'
import bike8 from '../Images/bajaj20200508192534.jpg'
import bike9 from '../Images/bmw20200508192553.jpg'
import bike10 from '../Images/honda20200511152343.jpg'
const bikes = [
  { id: 1, name: "Yamaha", image: bike1},
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

const BrowseBikes = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Browse Bikes By</h2>
      <div className="flex mb-4 flex-wrap gap-2">
        <button className="px-4 py-2 font-medium border-b-2 border-teal-500">BRAND</button>
        <button className="px-4 py-2 font-medium">BUDGET</button>
        <button className="px-4 py-2 font-medium">DISPLACEMENT</button>
        <button className="px-4 py-2 font-medium">BODY STYLE</button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {bikes.map((bike) => (
          <div key={bike.id} className="text-center border">
            <img
              src={bike.image}
              alt={bike.name}
            //   className="w-full h-32 object-cover rounded-lg shadow"
              className="w-full h-32 object-cover "
            />
            <p className="mt-2 text-sm font-medium text-gray-700">{bike.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseBikes;
