"use client"

import { Button } from "@/component/button";
import starBg from "@/assets/stars.png"
import gridLine from "@/assets/gridLines.png"

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";


// track mouse position
export const useMousePositionInElement = (ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPosition({ x, y });
    };

    const node = ref.current;
    if (node) {
      node.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (node) {
        node.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [ref]);

  return position;
};



const CallToAction = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target : sectionRef,
        offset : ["start end", 'end start']
    });

    const backgroundPositionY = useTransform(scrollYProgress, [0,1], [-300, 300])

    const containerRef = useRef(null);
    const { x, y } = useMousePositionInElement(containerRef);
    const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${x}px ${y}px,black,transparent)`
    return (
        <>
            <section 
            ref={sectionRef}
            className="callToAction py-20 md:py-24">
                <div className="container mx-auto">
                    <div>
                        <motion.div 
                        animate = {{backgroundPositionX : starBg.width }}
                        transition={{
                            repeat : Infinity,
                            duration : 30,
                            ease : "linear"
                        }}
                        style={{
                            backgroundPositionY,
                            backgroundImage : `url(${starBg.src})`
                        }}
                        className=" border border-white/15 py-24 overflow-hidden rounded-2xl bg-contain relative group" >

                            <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
                            style={{
                                backgroundImage : `url(${gridLine.src})`
                            }}></div>

                            <motion.div 
                            ref={containerRef}
                            style={{
                                WebkitMaskImage: maskImage,
                                maskImage,
                                backgroundImage : `url(${gridLine.src})`
                            }}
                            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
                            ></motion.div>


                           <div className="relative text-center mx-auto flex flex-col gap-4 max-w-md">
                                <h2 className="text-5xl md:text-7xl mx-auto font-medium tracking-tight capitalize">AI-drive SEO for everyone</h2>
                                    <p className="text-white/70 text-lg px-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, cum rem! Hic alias vitae maiores recusandae commodi officiis.</p>
                                    <div>
                                        <Button>Yeachen Abir</Button>
                                    </div>
                           </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction;