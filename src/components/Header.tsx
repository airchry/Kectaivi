import { motion } from "motion/react"
import mihawk from "../assets/mihawk.jpg"
import { ChevronDown } from "lucide-react";

function Header() {
    return (
        <section className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950 pt-16">
            <div className="absolute inset-0 opacity-1">
                <img src={mihawk} draggable="false" className="w-full h-full object-cover"/>
            </div>

            <div className="mb-4">
                <motion.span 
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="bg-red-600 text-white px-4 py-1 text-sm font-bold uppercase tracking-widest"
                >
                    PLAYER 1
                </motion.span>
            </div>

            <motion.h1
                animate={{ rotate: [-1, 1, -1] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="text-6xl md:text-9xl font-black text-white uppercase italic tracing-tighter leading-none mb-4 drop-shadow-[0_8px_0px_rgba(234,179,8,1)]">
                    KEC <span className="text-yellow-500">TAIVI</span>
            </motion.h1>

            <p className="text-lg md:text-2xl text-slate-300 font-mono tracking-tighter bg-black/70 px-4 py-2 inline-block border-x-4 border-yellow-500">
                FULL-STACK DEVELOPER / ILLUSTRATOR
            </p>

            <div className="animate-bounce flex flex-col items-center gap-2 absolute bottom-10">
                <span className="text-yellow-500 uppercase font-bold text-sm tracking-[0.2em]">Scroll to Start</span>
                <ChevronDown className="text-white"/>
            </div>
        </section>
    )
}

export default Header;