import PopularBike from './PopularBike'
import Feature from './Feature'
import Hero from './Hero'
import BrowseBikes from './BrowseBikes'
import Onroad from './Onroad'
import Update from './Update'
import UserReviews from './UserReviews'
import Trending from './Trending'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
        <Hero/>
      <Feature/>
      <PopularBike/>
      <BrowseBikes/>
      <Onroad/>
      <Trending/>
      <UserReviews/>
      <Update/>
      <Footer/>
    </div>
  )
}

export default Home