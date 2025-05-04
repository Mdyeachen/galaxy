import { Button } from "@/component/button";
import starBg from "@/assets/stars.png"
import gridLine from "@/assets/gridLines.png"

const CallToAction = () => {
    return (
        <>
            <section className="callToAction py-20 md:py-24">
                <div className="container mx-auto">
                    <div>
                        <div className=" border border-white/15 py-24 overflow-hidden rounded-2xl bg-contain relative" 
                        style={{
                            backgroundImage : `url(${starBg.src})`
                        }}>
                            <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
                            style={{
                                backgroundImage : `url(${gridLine.src})`
                            }}></div>
                           <div className="relative text-center mx-auto flex flex-col gap-4 max-w-md">
                                <h2 className="text-5xl md:text-7xl mx-auto font-medium tracking-tight capitalize">AI-drive SEO for everyone</h2>
                                    <p className="text-white/70 text-lg px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, cum rem! Hic alias vitae maiores recusandae commodi officiis.</p>
                                    <div>
                                        <Button>Yeachen Abir</Button>
                                    </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction;