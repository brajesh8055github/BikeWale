import './App.css'
import Feature from './Components/Feature'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import PopularBike from './Components/PopularBike'
import ProductDetails from './Components/ProductDetails'
import Trending from './Components/Trending'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/popular" element={<PopularBike />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/feature/:category/:name" element={<ProductDetails />} />
          <Route path="/trending/:category/:name" element={<ProductDetails />} />
          <Route path="/popular/:name" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
