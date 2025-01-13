import appstore from '../Images/app-store.svg'
import playstore from '../Images/play-store.svg'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-8  bg-blue-900">
      <div className="container mx-auto px-4">
        {/* Language & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-blue-800 pb-4 mb-4">
          <div className="flex gap-4">
            <span>Language: </span>
            <a href="#" className="hover:underline">
              English
            </a>
            <a href="#" className="hover:underline">
              हिंदी
            </a>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Advertise
            </a>
          </div>
        </div>

        {/* Social Links & App Download */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-blue-800 pb-4 mb-4">
          <div className="items-center gap-4">
            <span className="text-gray-400">CONNECT WITH US</span>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaYoutube />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="items-center gap-4">
            <span className="text-gray-400">DOWNLOAD MOBILE APP</span>
            <div className="flex gap-4">
              <a href="#">
                <img
                  src={appstore}
                  alt="App Store"
                />
              </a>
              <a href="#">
                <img
                  src={playstore}
                  alt="Google Play"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Logo & Affiliates */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-blue-800 pb-4 mb-4">
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="/" className="hover:opacity-80">
            BikeWale
            </a>
            <a href="https://www.carwale.com/" className="hover:opacity-80">
            CarWale
            </a>
            <a href="https://www.cartrade.com/" className="hover:opacity-80">
              CarTrade
            </a>
            <a href="https://www.mobilityoutlook.com/" className="hover:opacity-80">
            MobilityOutlook
            </a>
            <a href="https://www.olx.in/" className="hover:opacity-80">
              OLX
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-sm">
          <span>©CarTrade Tech.</span>
          <a href="#" className="hover:underline ml-2">
            Visitor Agreement & Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
