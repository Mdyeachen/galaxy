"use client"

import Lottie from "lottie-react";
import speed from "@/assets/Lottie/speed.json";
import click from "@/assets/Lottie/click.json";
import star from "@/assets/Lottie/star.json";

import deshboardImg from "@/assets/feature-ana.png"
import { useEffect, useRef } from "react";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";


const tabdata = [
  {
    icon: speed,
    title: "User Friendly Dashboard",
    status: false
  }, 
  {
    icon: click,
    title: "One Click Optimization",
    status: false
  }, 
  {
    icon: star,
    title: "Smart Keyword Generator", // Fixed typo
    status: true
  }
];

const Features = () => {

    const FeatureTab = (tab) => {

        const xPercentage = useMotionValue(0);
        const yPercentage = useMotionValue(50);
        const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`

        useEffect(() => {
            const valueOption = {
                duration : 4,
                repeat: Infinity,
                repeatType: "loop",
                ease : "linear"
            }


            animate(xPercentage,[0,100,100,0, 0], valueOption)
            animate(yPercentage,[0,0,100,100,0], valueOption)
        }, [])

        const lottieRef = useRef(null);
        const handleTabHover = () => {
            lottieRef.current.goToAndPlay(0, true)
        }

        return (
            <div 
            onMouseEnter={handleTabHover}
            className="flex gap-4 items-center border border-white/20 rounded-xl p-2.5 text-white/70 relative">
                <motion.div 
                style={{
                    maskImage
                }}
                className="absolute inset-0 border rounded-xl border-[#a369ff] "></motion.div>
                <div className="border border-white/20 rounded-xl p-1">
                    <Lottie 
                    lottieRef={lottieRef}
                    animationData={tab.icon} 
                    loop={false} 
                    className="h-6 w-6"/>
                </div>
                <h3>{tab.title}</h3>
                <p className="text-black border bg-purple-500 text-xs uppercase py-.5 px-2 rounded-xl">{tab.status && "New"}</p>
            </div>
        )
    }

    return (
        <section className="features py-20 md:py-24">
            <div className="container mx-auto">
                <div className="flex flex-col gap-12">
                    <div className="common-header text-center max-w-2xl mx-auto flex flex-col gap-4">
                        <h2 className="text-5xl md:text-7xl font-medium tracking-tight">Features</h2>
                        <p className="text-white/70 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic numquam aliquid amet asperiores laborum nemo facilis</p>
                    </div>

                    <div className="feature-items flex flex-col gap-4">
                        <div className="flex gap-4 justify-center flex-wrap">
                            {tabdata.map((tab, index) => (
                                <FeatureTab key={index} {...tab} />
                            ))}
                        </div>

                        <div className="border border-white/20 rounded-3xl p-4 ">
                            <div className="aspect-video bg-cover border border-white/20 rounded-3xl mix-blend-luminosity"
                                style={{
                                    backgroundImage : `url(${deshboardImg.src})`
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;