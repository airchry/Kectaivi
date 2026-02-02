import { motion, AnimatePresence } from "motion/react"
import IllustFrame from "../components/IllustFrame";
import mihawk from "../assets/mihawk.jpg"
import raiden from "../assets/raiden.png"
import eren from "../assets/eren.png"
import borobudur from "../assets/borobudur.png"
import { Eye, X } from "lucide-react"
import { useState } from "react"
import PixelFrame from "../components/PixelFrame";

function IllustPage() {
    const [selectedImage, setSelectedImage] = useState<(typeof illusts)[0] | null>(null)

    const illusts = [
        { 
            title: "Mihawk",
            image: "",
            tags: ["One Piece", "Manga"],
            desc: "Lorem Ipsum Mihawk",
            src: mihawk
        },
        { 
            title: "Eren",
            image: "",
            tags: ["Attack on Titan", "Manga"],
            desc: "Lorem Ipsum Eren",
            src: eren
        },
        { 
            title: "Raiden",
            image: "",
            tags: ["Genshin Impact", "Game"],
            desc: "Lorem Ipsum Raiden",
            src: raiden
        },
        { 
            title: "Borobudur Girl",
            image: "",
            tags: ["Temple", "Indonesia"],
            desc: "Lorem Ipsum Borobudur Girl",
            src: borobudur
        }
    ]

    return (
        <section className="py-24 px-6 bg-slate-900 border-t-8 border-b-8 border-slate-800">
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-4">
                    Illustrations
                </motion.h1>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto ">
                {illusts.map((illust, i) => (
                    <motion.div key={i} className="group relative" onClick={() => setSelectedImage(illust)}>
                        <IllustFrame className="overflow-hidden p-0">
                            <div className="relative overflow-hidden aspect-[4/3]">
                                <img src={illust.src} draggable="false" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                            </div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Eye size={48} className="text-yellow-500" />
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
            
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                        >
                            <PixelFrame title="VIEWING_CCTV" className="p-1">
                                <div className="relative">
                                    <img src={selectedImage.src} className="w-full max-h-[70vh] object-contain bg-slate-800"/>
                                
                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="absolute -top-12 -right-4 md:-right-12 text-white hover:text-yellow-500 transition-colors"
                                    >
                                        <X size={32} />
                                    </button>
                                    <div className="p-6 bg-slate-900 border-t-4 border-slate-800 flex flex-col justify-center items-center gap-2">
                                        <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">
                                            {selectedImage.title}
                                        </h2>
                                        <p className="text-slate-400 font-mono text-sm max-w-md">
                                            {selectedImage.desc}
                                        </p>
                                    </div>
                                </div>
                            </PixelFrame>

                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    )
}

export default IllustPage;