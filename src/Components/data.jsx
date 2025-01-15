import bike1 from "../Images/apache-160-right-side-view-2.webp";
import bike2 from "../Images/bullet-right-side-view-13.webp";
import bike3 from "../Images/classic-350-right-side-view-62.webp";
import bike4 from "../Images/continental-gt-right-side-view-12.webp";
import bike5 from "../Images/hunter-350-right-side-view-5.webp";
import bike6 from "../Images/mt-15-right-side-view-3.webp";
import bike7 from "../Images/r15-right-side-view-7.webp";
import bike8 from "../Images/raider-125-right-side-view-20 (1).webp";
import bike9 from "../Images/sp-125-right-side-view-2.webp";
import bike10 from "../Images/xtreme-125r-right-side-view-4.webp";
import popular2 from "../Images/xtreme-125r-right-side-view-4 (1).webp";
import popular3 from "../Images/ronin-right-side-view-7 (1).webp";
import popular4 from "../Images/pulsar-ns-right-side-view-9.webp";
import popular5 from "../Images/pulsar-ns400-right-side-view-10.webp";
import popular6 from "../Images/pulsar-n160-right-side-view-13.webp";
import popular7 from "../Images/jupiter-right-side-view-16 (1).webp";
import popular8 from "../Images/duke-200-right-front-three-quarter-2.webp";
import popular9 from "../Images/apache-160-right-side-view-2 (1).webp";
import popular10 from "../Images/activa-6g-right-side-view-2.webp";
import electric1 from "../Images/s1-pro-right-front-three-quarter-2.webp";
import electric2 from "../Images/s1-x-right-front-three-quarter-2 (1).webp";
import electric3 from "../Images/roadster-right-side-view-8.webp";
import electric4 from "../Images/s1-z-left-front-three-quarter.webp";
import electric5 from "../Images/chetak-2025-right-side-view-2.webp";
import electric6 from "../Images/rizta-left-front-three-quarter.webp";
import logo1 from "../Images/yamaha20200508193220.jpg";
import logo2 from "../Images/tvs20200508193203.jpg";
import logo3 from "../Images/triumph20200508193154.jpg";
import logo4 from "../Images/royal-enfield20200508193112.jpg";
import logo5 from "../Images/ktm20200518163508.jpg";
import logo6 from "../Images/kawasaki1656405887432.jpg";
import logo7 from "../Images/hero20200508192826.jpg";
import logo8 from "../Images/bajaj20200508192534.jpg";
import logo9 from "../Images/bmw20200508192553.jpg";
import logo10 from "../Images/honda20200511152343.jpg";

import offer1 from "../Images/jupiter-125-right-side-view-9.webp"
import offer2 from "../Images/jupiter-right-side-view-16.webp"
import offer3 from "../Images/ntorq-125-right-side-view-11.webp"
import offer4 from "../Images/s1-air-right-front-three-quarter-8.webp"
import offer5 from "../Images/s1-pro-right-front-three-quarter-2.webp"
import offer6 from "../Images/sp-125-right-side-view-2.webp"
import offer7 from "../Images/s1-x-right-front-three-quarter-2.webp"

const data = {
   products : [
    { name: "Royal Enfield Hunter 350", price: "₹ 1,49,900", image: offer1, },
    {name: "Honda SP 125", price: "₹ 90,111",image: offer2,},
    {name: "Yamaha MT 15 V2",price: "₹ 1,70,064",image: offer3,},
    {name: "Suzuki Gixxer",price: "₹ 1,35,700", image: offer4,},
    {name: "KTM Duke 200",price: "₹ 1,85,000",  image: offer5,},
    {name: "Royal Enfield Hunter 350", price: "₹ 1,85,000",image: offer6,},
    {name: "Yamaha MT 15 V2",price: "₹ 1,85,000",image: offer7,},
  ],

    bikes : [
      { name: "Royal Enfield Hunter 350", price: "₹ 1,49,900", image: bike1},
      { name: "Honda SP 125", price: "₹ 90,111", image: bike2, },
      { name: "Yamaha MT 15 V2", price: "₹ 1,70,064", image: bike3,},
      { name: "Suzuki Gixxer", price: "₹ 1,35,700", image: bike4,},
      { name: "KTM Duke 200", price: "₹ 1,85,000", image: bike5},
      { name: "Royal Enfield Classic 350", price: "₹ 1,85,000", image: bike6},
      { name: "TVS Raider", price: "₹ 85,000", image: bike7},
      { name: "Hero Xtreme 125R", price: "₹ 1,20,000", image: bike8 },
      { name: "Yamaha R15 V4", price: "₹ 1,80,000", image: bike9 },
      { name: "KTM RC 390", price: "₹ 3,00,000", image: bike10 },
    ],
    populars : [
        { name: "Honda SP 125", price: "₹ 90,111", image: popular2 },
        { name: "Yamaha MT 15 V2", price: "₹ 1,70,064", image: popular3 },
        { name: "Suzuki Gixxer", price: "₹ 1,35,700", image: popular4},
        { name: "KTM Duke 200", price: "₹ 1,85,000", image: popular5 },
        { name: "Royal Enfield Classic 350", price: "₹ 1,85,000", image: popular6},
        { name: "TVS Raider", price: "₹ 85,000", image: popular7},
        { name: "Hero Xtreme 125R", price: "₹ 1,20,000", image: popular8},
        { name: "Yamaha R15 V4", price: "₹ 1,80,000", image: popular9},
        { name: "KTM RC 390", price: "₹ 3,00,000", image: popular10 },
      ],
      electric : [
        { name: "Royal Enfield Hunter 350", price: "₹ 1,49,900", image: electric1, },
        { name: "Honda SP 125", price: "₹ 90,111", image: electric2, },
        { name: "Yamaha MT 15 V2", price: "₹ 1,70,064", image: electric3, },
        { name: "Suzuki Gixxer", price: "₹ 1,35,700", image: electric4, },
        { name: "KTM Duke 200", price: "₹ 1,85,000", image: electric5, },
        { name: "Royal Enfield Classic 350", price: "₹ 1,85,000", image: electric6},
      ],
      upcoming : [
        { name: "Honda SP 125", price: "₹ 90,111", image: electric2, },
        { name: "Yamaha MT 15 V2", price: "₹ 1,70,064", image: electric4 },
        { name: "Suzuki Gixxer", price: "₹ 1,35,700", image: popular4 },
        { name: "KTM Duke 200", price: "₹ 1,85,000", image: popular5},
        { name: "Royal Enfield Classic 350", price: "₹ 1,85,000", image: bike4},
        { name: "TVS Raider", price: "₹ 85,000", image: bike7 },
        { name: "Hero Xtreme 125R", price: "₹ 1,20,000", image: popular8},
        { name: "Yamaha R15 V4", price: "₹ 1,80,000", image: bike9},
        { name: "KTM RC 390", price: "₹ 3,00,000", image: electric1 },
      ],
      logos: [
        { id: 1, name: "Yamaha", image: logo1},
        { id: 2, name: "TVS", image: logo2 },
        { id: 3, name: "Triumph", image: logo3 },
        { id: 4, name: "Royal-Enfield", image: logo4 },
        { id: 5, name: "KTM", image:logo5 },
        { id: 6, name: "Kawasaki", image: logo6 },
        { id: 7, name: "Hero", image: logo7 },
        { id: 8, name: "Bajaj", image: logo8},
        { id: 9, name: "BMW", image: logo9},
        { id: 10, name: "Honda", image: logo10 },
      ],
      budgetOptions: [
        "Under ₹50,000",
        "Under ₹60,000",
        "Under ₹70,000",
        "Under ₹80,000",
        "Under ₹1 lakh",
        "Under ₹1.5 lakh",
        "Under ₹2 lakh",
        "Above ₹2 lakh",
      ],
      displacementOptions: [
        "Upto 100cc",
        "100cc-110cc",
        "110cc-125cc",
        "125cc-150cc",
        "150cc-200cc",
        "200cc-250cc",
        "250cc-500cc",
        "Above 500cc",
      ],
      bodyOptions: [
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
      ],
  };
  
  export default data;
  