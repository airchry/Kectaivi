import { motion } from "motion/react"
import PixelFrame from "./PixelFrame";

function Weapon() {
    const skills = [
        { name: "React.js", icon: "R", color: "text-blue-400"},
        { name: "Typescript", icon: "T", color: "text-blue-500"},
        { name: "Tailwind CSS", icon: "T", color: "text-teal-400"},
        { name: "Node.js", icon: "N", color: "text-green-400"},
        { name: "PostgreSQL", icon: "P", color: "text-indigo-400"},
        { name: "Python", icon: "P", color: "text-red-400"}
    ];

    return (
        <section className="py-24 px-6 bg-slate-950">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-4">
                    Weapons
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, i) => (
                        <motion.div
                        key={skill.name}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group"
                        >
                            <PixelFrame title={`Weapon_${(i+1).toString().padStart(2, "0")}`}>
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 flex-shrink-0 bg-slate-800 border-2 border-slate-700 flex items-center justify-center font-black text-xl ${skill.color}`}>
                                        {skill.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold uppercase tracking-tight">{skill.name}</h3>
                                    </div>
                                </div>
                            </PixelFrame>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Weapon;