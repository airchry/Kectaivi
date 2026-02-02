import { motion } from "motion/react"
import IllustFrame from "./IllustFrame"
import mihawk from "../assets/mihawk.jpg"
import raiden from "../assets/raiden.png"
import { ChevronRight } from "lucide-react"

type IllustrationProps = {
    onViewChange: (view: "home" | "illust") => void;
}

function Illustration({ onViewChange }: IllustrationProps) {
    const illusts = [
        { 
            title: "Mihawk",
            image: "",
            tags: ["One Piece", "Manga"],
            src: mihawk
        },
        { 
            title: "Raiden",
            image: "",
            tags: ["Genshin Impact", "Game"],
            src: raiden
        }
    ]

    return (
        <section className="py-24 w-full px-6 bg-slate-900 border-t-8 border-slate-800">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-4">
                    Illustrations
                </motion.h1>
                <div className="grid md:grid-cols-2 gap-12">
                    {illusts.map((illust, i) => (
                        <motion.div key={i} className="group relative">
                            <IllustFrame className="overflow-hidden p-0">
                                <div className="relative h-64">
                                    <img src={illust.src} draggable="false" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"/>
                                </div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-2xl font-black text-white uppercase italic mb-2">{illust.title}</h3>
                                    <div className="flex gap-2">
                                        {illust.tags.map(tag => (
                                            <span key={tag} className="text-[10px] bg-slate-800 text-slate-300 border border-slate-600 px-2 py-0.5 font-mono">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </IllustFrame>
                        </motion.div>
                    ))}
                </div>
                <div className="w-full text-right mt-8">
                    <button onClick={() => onViewChange("illust")} className="inline-flex text-yellow-500 font-bold uppercase tracking-tighter text-sm items-center hover:translate-x-1 transition-transform">
                        View All <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    )

}

export default Illustration;