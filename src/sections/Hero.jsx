"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/component/button";
import Planet from "@/component/panet";
import starBg from "@/assets/stars.png"
import { useRef } from "react";

const Hero = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target : sectionRef,
        offset : ["start end",'end start']
    })

    const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <motion.section
        ref = {sectionRef}
        className="hero_section min-h-[100vh] flex items-center bg-no-repeat bg-[length:auto_100%] bg-[position:0%_50%] relative overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]" 
        style={{
            backgroundImage: `url(${starBg.src})`,
            backgroundPositionY
        }}
        initial={{ backgroundPositionX: "100%" }}
        animate={{ backgroundPositionX: "0%" }}
        transition={{
            repeat : Infinity,
            ease : "linear",
            duration : 30
        }}
        >
            <Planet />
            <div className="container mx-auto relative">
                <div className="flex flex-col gap-4 justify-center items-center max-w-2xl mx-auto text-center">
                    <h1 className="text-6xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">Web <br />Developers</h1>
                    <p className="text-lg text-white/70">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam hic nulla excepturi impedit, earum, doloribus, voluptatem numquam reprehenderit velit veniam enim quos amet et accusantium!</p>
                    <Button>Yeachen Abir</Button>
                </div>
            </div>
        </motion.section>
    )
}

export default Hero;