
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/logoview.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className=" hidden md:flex md:justify-start ">
          <div className="flex flex-col items-center ">
            <img src={logo} className="w-12 h-12 mb-1" alt="Company Logo" />
            <p className="text-gray-700 font-semibold ">ICHBINSIEGER</p>
          </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-700 hover:text-black transition-colors">
                  Home
                </a>
              </li>
           
              <li>
                <a href="#projects" className="text-gray-700 hover:text-black transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-black transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

    
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2" />
                15 kodesoh street ikeja
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2" />
                oluwaseun.vi@gmail.com
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2" />
                    +234809556675
              </li>
            </ul>
          </div>
        </div>

 
        <div className="border-t border-gray-400 mt-8 pt-8 flex justify-center space-x-6">
         
          <a
            href="https://twitter.com/ichbinsieger"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/ichbinsiegertech?igsh=YXc5N29hYjF5aTd3&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/ogunyomi-adekoya-victor-15b1691b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://wa.me/+2348095556675"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </div>
        <div className="text-center text-gray-700 mt-8">
          <p>&copy; {new Date().getFullYear()} IchBinSieger Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;