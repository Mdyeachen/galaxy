"use client"

import Lottie from "lottie-react";
import speed from "@/assets/Lottie/speed.json";
import click from "@/assets/Lottie/click.json";
import star from "@/assets/Lottie/star.json";

import deshboardImg from "@/assets/feature-ana.png"

const tabdata = [{
    icon: speed,
    title: "User Friendly Dashboard",
    status: false
}, {
    icon: click,
    title: "One Click Optimization",
    status: false
}, {
    icon: star,
    title: "Smart Keyword Gemerator",
    status: true
}]

const Features = () => {
    return (
        <section className="features py-20 md:py-24">
            <div className="container mx-auto">
                <div className="flex flex-col gap-12">
                    <div className="common-header text-center max-w-2xl mx-auto flex flex-col gap-4">
                        <h2 className="text-6xl md:text-8xl font-medium tracking-tight">Features</h2>
                        <p className="text-white/70 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic numquam aliquid amet asperiores laborum nemo facilis</p>
                    </div>

                    <div className="feature-items flex flex-col gap-4">
                        <div className="flex gap-4 justify-center flex-wrap">
                            {tabdata.map((tab, index) => (
                                <div key={index} className="flex gap-4 items-center border border-white/20 rounded-sm p-2.5 text-white/70">
                                    <div className="border border-white/20 rounded-xl p-1">
                                        <Lottie animationData={tab.icon} loop={true} className="h-6 w-6"/>
                                    </div>
                                    <h3>{tab.title}</h3>
                                    <p className="text-black border bg-purple-500 text-xs uppercase py-.5 px-2 rounded-xl">{tab.status && "New"}</p>
                                </div>
                            ))}
                        </div>

                        <div className="border border-white/20 rounded-3xl p-4 ">
                            <div className="aspect-video bg-cover border border-white/20 rounded-3xl"
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