import React from 'react'
import { motion } from "framer-motion";

const LogoComponent = () => {
    const Logo = [
        "/TIAMEDS.png",
        "/SSPL.png",
        "/SSPL.png",
        "/SHPL.png",
        "/SBPL.png",
        "/NOVA CANDOLIM BY SUDHANAND.png",
        "/FOUR SEASONS.png",
        "/CUREPLUS PHARMA.png",
        "/CUREPLUS HOSPITALS.png",
        "/ARC.png",
    ]
    return (
        <motion.div
            className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
        >
            {Logo.map((src, index) => (
                <motion.img
                    key={index}
                    alt="Company Logo"
                    src={src}
                    width={158}
                    height={48}
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut",
                        delay: index * 0.3,
                    }}
                />
            ))}
        </motion.div>
    )
}

export default LogoComponent