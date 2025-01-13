import bike1 from '../Images/right-side-view.webp'
import bike2 from '../Images/ronin-right-side-view-7.webp'
import bike3 from '../Images/bullet-right-side-view-13.webp'
const Update = () => {
  const cards = [
    {
      id: 1,
      image: bike1, 
      title: "Aprilia Tuono 457 Launch Soon - What to expect?",
      description: "The Aprilia Tuono 457 will be powered by the same 457cc liquid-cooled parallel-twin...",
      author:"By Ajinkya Lad"
    },
    {
      id: 2,
      image: bike2, 
      title: "Royal Enfield Scram 440 – What to expect?",
      description: "Here's all you need to know about the Royal Enfield Scram 440.",
      author:"By Ajinkya Lad"
    },
    {
      id: 3,
      image: bike3,
      title: "Hero’s Vida trademarks new off-road bike",
      description: "Hero MotoCrop unveiled a host of new motorcycles at EICMA 2024, including under...",
      author:"By Pratheek Kunder"
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
      <div className="flex mb-4 flex-wrap gap-2">
        <button className="px-4 py-2 font-medium border-b-2 border-teal-500">News</button>
        <button className="px-4 py-2 font-medium">EXPERT REVIEWS</button>
        <button className="px-4 py-2 font-medium">VIDEOS</button>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col bg-white shadow-lg rounded-md overflow-hidden max-w-xs w-full sm:w-1/2 lg:w-1/3"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.author}</p>
              <p className="text-gray-600">{card.description}</p>
              <a href="/" className=' text-blue-400'>Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Update;
