import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (

    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-10 ">
        <div className="flex flex-wrap justify-between items-center">
         

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebook size={29} /> 
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter size={29} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram size={29} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin size={29} />
            </a>
            <div>

              <p>coppy rights belong to asif zia @</p>
            </div>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;