"use client"
import { motion } from "framer-motion"

const Planet = () => {
    return (
        <>
            {/* shadow overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>

            {/* planet */}
            <div className="absolute h-75 w-75 bg-purple-700 rounded-full border border-white/15 top-1/2 left-1/2 -translate-1/2 bg-[radial-gradient(50%_50%_at_16%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,56))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>

            {/* first ring */}
            <motion.div 
            animate={{ rotate: 360 }}
            transition={{
                repeat : Infinity,
                duration: 60,
                ease: "linear"
            }}
            className="absolute h-95 w-95 md:h-130 md:w-130  top-1/2 left-1/2 -translate-1/2 opacity-20 rounded-full border ">
                <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2"></div>
                <div className="absolute h-2 w-2 bg-white rounded-full left-1/2 top-0 -translate-y-1/2"></div>

                <div className="absolute h-5 w-5 border rounded-full left-full top-1/2 -translate-x-1/2 flex justify-center items-center">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                </div>
            </motion.div>

            {/* second ring */}
            <motion.div 
            animate={{
                rotate: -360
            }}
            transition={{
                repeat : Infinity,
                duration : 60,
                ease : "linear"
            }}
            className="absolute h-120 w-120 md:h-155 md:w-155 top-1/2 left-1/2 -translate-1/2 rounded-full border border-white/20"></motion.div>

            {/* third ring */}
            <motion.div 
            animate={{
                rotate: 360
            }}
            transition={{
                repeat : Infinity,
                duration: 90,
                ease : "linear"
            }}
            className="absolute h-145 w-145 md:h-190 md:w-190 top-1/2 left-1/2 -translate-1/2 rounded-full border opacity-20">
                <div className="absolute h-2 w-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2"></div>
                <div className="absolute h-5 w-5 border rounded-full left-full top-1/2 -translate-x-1/2 flex justify-center items-center">
                    <div className="h-2 w-2 bg-white rounded-full"></div>
                </div>
            </motion.div>
        </>
    )
}

export default Planet