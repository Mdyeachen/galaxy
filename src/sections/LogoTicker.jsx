import acme from "@/assets/logo-ticker/acme.png";
import apex from "@/assets/logo-ticker/apex.png";
import echo from "@/assets/logo-ticker/echo.png";
import pulse from "@/assets/logo-ticker/pulse.png";
import quatam from "@/assets/logo-ticker/quatam.png";

const LogoTicker = () => {
    return (
        <>
          <section className="logoTicker py-20 md:py-24">
            <div className="container mx-auto">
                <div className="flex items-center gap-5">
                <div className="flex-1 md:flex-none font-black text-white/80 italic">
                    <h2>Trust by top innovating teams</h2>
                </div>
                <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                <div className="logo flex flex-none gap-14 ">
                    {[acme,apex,echo,pulse,quatam].map((logo, index) => (
                        <img key={index} src={logo.src} alt={`logo-${index}`} className="h-18 w-auto" />
                    ))}
                </div>
                </div>
                </div>
            </div>
          </section>
        </>
    )
}


export default LogoTicker;