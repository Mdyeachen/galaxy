import { BsFillXDiamondFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="py-3">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 md:justify-between p-2.5">
                        <div className="logo flex items-center gap-4">
                            <BsFillXDiamondFill className="text-2xl border h-12 w-12 p-2 rounded-xl border-white/30"/>
                            <p className="hidden lg:block ">Ai Startup Landing Page</p>
                        </div>
                        <nav className="footer-menu flex flex-col md:flex-row md:items-center gap-4">
                            <a href="#" className="text-white/70 hover:text-white transition">Features</a>
                            <a href="#" className="text-white/70 hover:text-white transition">Developers</a>
                            <a href="#" className="text-white/70 hover:text-white transition">Company</a>
                            <a href="#" className="text-white/70 hover:text-white transition">Blogs</a>
                            <a href="#" className="text-white/70 hover:text-white transition">Changelog</a>
                        </nav>

                        <div className="social flex items-center gap-4">
                            <a href="" className="text-white/70 hover:text-white transition text-2xl"><FaFacebook /></a>
                            <a href="" className="text-white/70 hover:text-white transition text-2xl"><FaInstagramSquare /></a>
                            <a href="" className="text-white/70 hover:text-white transition text-2xl"><FaLinkedin /></a>
                            <a href="" className="text-white/70 hover:text-white transition text-2xl"><FaPinterestSquare /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;