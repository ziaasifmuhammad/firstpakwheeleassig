
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>
            <nav className="bg slate-800 h-20 py-1 px-1  text-white flex justify-evenly items-center bg-slate-500">
                <div className="flex items-center space-x-1 mb-1">
                    <img
                        src="/logo.png" alt="Pak Wheele logo" className="w-15 h-10 rounded-2xl"
                    />
                    <h1 className="text-lg font-bold">
                        <a href="#!">M Asif</a>

                    </h1>
                </div>
                <div>
                    <ul className="flex space-x-9 ">
                        <li><Link href="/" className="hover:text-red-500">USE Car</Link></li>
                        <li><Link href="/newcar" className="hover:text-red-500">New Car</Link></li>
                        <li><Link href="/bike" className="hover:text-red-500">Bike</Link></li>
                        <li><Link href="/autostore" className="hover:text-red-500">Auto Store</Link></li>
                        <li><Link href="/videos" className="hover:text-red-500">Videos</Link></li>
                        <li><Link href="/forums" className="hover:text-red-500">Forums</Link></li>
                        <li><Link href="/blog" className="hover:text-red-500">Blog</Link></li>


                    </ul>
                </div>
                <div>
                    <button className="bg-blue-600 text-white rounded-3xl py-3 px-7 hover:text-red-500">
                        Post & Add
                    </button>
                </div>

            </nav>
            

        </div>
    )
}

export default Navbar