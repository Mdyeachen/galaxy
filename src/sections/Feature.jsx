"use client"


import speed from "@/assets/Lottie/speed.json";
import click from "@/assets/Lottie/click.json";
import star from "@/assets/Lottie/star.json";

import deshboardImg from "@/assets/feature-ana.png"
import Tab from "@/component/tab"
import { useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";

const tabdata = [
  {
    icon: speed,
    title: "User Friendly Dashboard",
    status: false,
    backgroundSizeX : 100,
    backgroundPositionX : 0,
    backgroundPositionY : 0
    }, 
  {
    icon: click,
    title: "One Click Optimization",
    status: true,
    backgroundSizeX : 177,
    backgroundPositionX : 98,
    backgroundPositionY : 100
    }, 
  {
    icon: star,
    title: "Smart Keyword Generator",
    status: true,
    backgroundSizeX : 150,
    backgroundPositionX : 100,
    backgroundPositionY : 27
    }
];

const Features = () => {
     const [selectedIndex, setSelectedIndex] = useState(null);


     const backgroundPositionX = useMotionValue(tabdata[0].backgroundPositionX);
     const backgroundPositionY = useMotionValue(tabdata[0].backgroundPositionY);
     const backgroundSizeX = useMotionValue(tabdata[0].backgroundSizeX);

     // template
     const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`
     const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`


    
     const handleSelectedTab = (index) => {
        setSelectedIndex(index);

        // animation part
        const animationOption = {
            duration : 2,
            ease : "easeInOut"
        }
        animate(backgroundSizeX, [backgroundSizeX.get(), 100, tabdata[index].backgroundSizeX], animationOption);
        animate(backgroundPositionX, [backgroundPositionX.get(), 100, tabdata[index].backgroundPositionX], animationOption);
        animate(backgroundPositionY, [backgroundPositionY.get(), 100, tabdata[index].backgroundPositionY], animationOption);

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
                                <Tab 
                                key={index} 
                                title={tab.title} 
                                icon={tab.icon} 
                                status={tab.status}
                                isSelected={selectedIndex === index}
                                onSelect={() => handleSelectedTab(index)} />
                            ))}
                        </div>

                        <div className="border border-white/20 rounded-3xl p-4 ">
                            <motion.div className="aspect-video bg-cover border border-white/20 rounded-3xl"
                                style={{
                                    backgroundSize,
                                    backgroundPosition,
                                    backgroundImage : `url(${deshboardImg.src})`
                                }}
                            ></motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;