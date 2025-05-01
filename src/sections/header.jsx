import { BsFillXDiamondFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { Button } from "@/component/button";

const Header = () => {
    return (
        <header className="border border-white/10 py-3 md:border-none sticky top-0 z-1 backdrop-blur md:backdrop-blur-none">
            <div className="container mx-auto">
                <div className="flex justify-between items-center md:border border-white/10 rounded-lg md:p-2.5 max-w-2xl mx-auto md:backdrop-blur">
                    <div className="logo h-10 w-10 flex justify-center items-center border border-white/10 rounded-xl">
                        <BsFillXDiamondFill className="text-2xl"/>
                    </div>
                    <nav className="font-medium capitalize gap-3 hidden md:flex text-sm">
                        <a href="#" className="text-white/70 hover:text-white transition">Features</a>
                        <a href="#" className="text-white/70 hover:text-white transition">Developers</a>
                        <a href="#" className="text-white/70 hover:text-white transition">Pricing</a>
                        <a href="#" className="text-white/70 hover:text-white transition">About</a>
                    </nav>
                    <div className="menu flex gap-3">
                        <Button>Yeachen Abir</Button>
                        <div className="hamburger h-10 w-10 flex justify-center items-center md:hidden">
                            <FaHamburger className="text-2xl"/>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}


export default Header