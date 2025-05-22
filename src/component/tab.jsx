"use client"
import Lottie from "lottie-react";
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Tab = ({icon, title, status, isSelected, onSelect}) => {
    const [hover, isHover ] = useState(false)
    const tabRef = useRef(null);
    const lottieRef = useRef(null);

    const xPersent = useMotionValue(0);
    const yPersent = useMotionValue(0);
    const maskImage = useMotionTemplate`radial-gradient(50px 50px at ${xPersent}% ${yPersent}%,black,transparent)`


    // tab animate//
    useEffect(() => {
        if(!tabRef.current && !isSelected) return;
        xPersent.set(0);
        yPersent.set(0);


        const {width, height} = tabRef.current.getBoundingClientRect();
        const circumference = width * 2 + height * 2;
        const times = [0, 
            width/ circumference, 
            (width + height) / circumference, 
            (width * 2 + height) / circumference, 
            1]

        const animateOption = {
            times,
            duration : 4,
            repeat : Infinity,
            ease : "linear",
            repeatType : "loop"
        }
        animate(xPersent, [0,100,100,0,0],animateOption)
        animate(yPersent, [0,0,100,100,0], animateOption)
    },[isSelected])


    //when hover//
    const hoverTab = () => {
       if(lottieRef.current == null) return;
       isHover(true)
       lottieRef.current.goToAndPlay(1, true);
    }

    // when hover leave//
    const handleMouseLeave= () => {
        isHover(false)
    }
    
    return (
        <div 
        ref={tabRef}
        onMouseEnter={hoverTab}
        onMouseLeave={handleMouseLeave}
        onClick={onSelect}
        className="border border-white/20 rounded-xl p-2.5 text-white/70 relative">
            {isSelected && 
            <motion.div 
            style={{maskImage}}
            className="absolute -inset-[1px] rounded-xl border border-[#a369ff]"></motion.div>            
            }
            <div className="flex gap-4 items-center">
                <div className="border border-white/20 rounded-xl p-0.5">
                    <Lottie 
                    lottieRef={lottieRef}
                    animationData={icon} 
                    loop={hover} 
                    className="h-6 w-6"/>
                </div>
                <h3>{title}</h3>
                {status && <p className="bg-purple-500 text-xs uppercase py-0.5 px-2 rounded-xl">New</p>}
            </div>
        </div>
    )
}


export default Tab;