import { motion } from "motion/react"

function Footer() {
    return (
        <div className="w-screen text-center py-10">
            <motion.div 
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-red-600 font-black text-4xl italic uppercase tracking-tighter"
            >
            Mission Complete
            </motion.div>
            <p className="text-slate-600 text-[10px] uppercase mt-2">© 2026 Kectaivi. All rights reserved.</p>
        </div>
    )

}

export default Footer;