import team01 from "@/assets/teams/01.png";
import team02 from "@/assets/teams/02.png"
import team03 from "@/assets/teams/03.png"

const testiMon = [
    {
        des : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic numquam aliquid amet asperiores laborum nemo facilis",
        name : "Aisha Rahaman",
        title : "Graphic designer",
        image : team01
    },{
        des : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic numquam aliquid amet asperiores laborum nemo facilis",
        name : "Kabir Sings",
        title : "Font-end Developer",
        image : team02
    },{
        des : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic numquam aliquid amet asperiores laborum nemo facilis",
        name : "Mohamad Rahaman",
        title : "Backend Developer",
        image : team03
    }
]


const Testimonial = () => {
    return (
        <>
            <div className="py-20 md:py-24">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-12">
                        <div className="common-header text-center max-w-2xl mx-auto flex flex-col gap-4">
                            <h2 className="text-5xl md:text-7xl font-medium tracking-tight capitalize">beyond expectation</h2>
                            <p className="text-white/70 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, cum rem! Hic alias vitae maiores recusandae commodi officiis.</p>
                        </div>

                        <div className="testimonials flex flex-none gap-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_75%,transparent)]">

                            {testiMon.map((profile,index) => (
                                <div key={index} className="border border-white/20 p-6 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,266,.5),black)] text-lg min-w-80 flex flex-col gap-8">
                                    <p className="text-white/70 font-medium">{profile.des}</p>
                                    <div className="flex gap-4">
                                        <div className="relative after:absolute after:content-[''] after:inset-0 after:bg-[rgb(140,69,244) after:mix-blend-soft-light]">
                                            <img 
                                            src={profile.image.src} 
                                            alt={`avatar for ${profile.name}`} 
                                            className="w-12 h-12 border border-white/30m grayscale rounded-lg"/>
                                        </div>
                                        <div>
                                            <h3>{profile.name}</h3>
                                            <h4 className="text-sm text-white/70">{profile.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Testimonial;