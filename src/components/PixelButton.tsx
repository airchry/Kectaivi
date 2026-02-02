import React from "react";
import { motion } from "motion/react"

type PixelButtonProps = {
    children: React.ReactNode
    className?: string
    variant?: "yellow" | "red" | "blue"
    onClick?: () => void
}

function PixelButton({ children, className, variant = "yellow", onClick }: PixelButtonProps) {

const variants = {
    yellow:
      "bg-yellow-500 hover:bg-yellow-400 border-yellow-600 shadow-[4px_4px_0px_0px_rgba(133,77,14,1)]",
    red:
      "bg-red-600 hover:bg-red-500 border-red-700 shadow-[4px_4px_0px_0px_rgba(153,27,27,1)] text-white",
    blue:
      "bg-blue-600 hover:bg-blue-500 border-blue-700 shadow-[4px_4px_0px_0px_rgba(30,58,138,1)] text-white",
};

return (
    <motion.button 
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, translate: "2px 2px", boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)" }}
      className={`px-6 py-3 font-black uppercase italic tracking-tighter border-b-4 border-r-4 transition-all ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
)

}

export default PixelButton;