import './App.css'
import BrowseBikes from './Components/BrowseBikes'
import Feature from './Components/Feature'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Onroad from './Components/Onroad'
import PopularBike from './Components/PopularBike'
import Trending from './Components/Trending'
import Update from './Components/Update'
import UserReviews from './Components/UserReviews'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
      <Feature/>
      <PopularBike/>
      <BrowseBikes/>
      <Onroad/>
      <Trending/>
      <UserReviews/>
      <Update/>
      <Footer/>
    </>
  )
}

export default App
