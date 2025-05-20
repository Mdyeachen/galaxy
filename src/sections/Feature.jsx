"use client"


import speed from "@/assets/Lottie/speed.json";
import click from "@/assets/Lottie/click.json";
import star from "@/assets/Lottie/star.json";

import deshboardImg from "@/assets/feature-ana.png"
import Tab from "@/component/tab"
import { useState } from "react";

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
    title: "Smart Keyword Generator",
    status: true
  }
];

const Features = () => {
     const [selectedIndex, setSelectedIndex] = useState(null);

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
                                onSelect={() => setSelectedIndex(index)} />
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