import PixelFrame from "./PixelFrame"
import { motion } from "motion/react"

function About() {
    return (
        <section className="py-24 px-6 bg-slate-900 border-y-8 border-slate-800">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-4">
                    About Me
                </motion.h1>

                <div className="items-start">
                    <div className="space-y-6">
                        <PixelFrame title="Profile_Info" className="bg-slate-800/50 font-mono">
                            <p>New to full-stack development, but let’s not get it twisted. I code, I illustrate, and I learn faster than most. Clean visuals, growing logic, and a curiosity that doesn’t miss. I’m not finished, just warming up.</p>
                        </PixelFrame>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About;