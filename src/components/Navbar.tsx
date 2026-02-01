import { useEffect, useState } from "react"
import { Heart, Gamepad2 } from "lucide-react"

type NavbarProps = {
    currentView: "home" | "illust"
    onViewChange: (view: "home" | "illust") => void
}

function Navbar({ currentView, onViewChange }: NavbarProps) {
    const [score, setScore] = useState(0);

    useEffect(() => {
        function handleScore() {
            const scrolled = window.scrollY;
            setScore(Math.floor(scrolled * 1.5));
        };
        window.addEventListener("scroll", handleScore);
        return () => window.removeEventListener("scroll", handleScore);
    }, [])

    
    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-sm border-b-4 border-slate-800 p-2 flex justify-between items-center font-mono text-white">
            <div className="flex gap-6 items-center">
                <div className="flex flex-col">
                    <span className="text-[10px] text-yellow-500 uppercase tracking-tighter">1P Score</span>
                    <span className="text-xl leading-none">{score.toString().padStart(8, '0')}</span>
                </div>

                <div className="hidden md:flex gap-1">
                    {[1, 2, 3].map((i) => (
                        <Heart key={i} size={16} fill="#ef4444" className="text-red-500"/>
                    ))}
                </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
                <button 
                    onClick={() => onViewChange("home")}
                    className={`flex items-center gap-2 px-3 py-1 border-2 transition-all uppercase text-xs font-bold ${currentView === "home" ? "bg-yellow-500 text-black border-yellow-400" : "bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500"}`}
                >
                    Home
                </button>

                <button 
                    onClick={() => onViewChange("illust")}
                    className={`flex items-center gap-2 px-3 py-1 border-2 transition-all uppercase text-xs font-bold ${currentView === "illust" ? "bg-yellow-500 text-black border-yellow-400" : "bg-slate-800 text-slate-400 border-slate-700 hover:border-slate-500"}`}
                >
                    Illust
                </button>
            </div>

            <div className="flex gap-4 items-center">
                <div className="text-right">
                    <div className="text-[10px] text-blue-400 uppercase tracking-tighter">Mission</div>
                    <div className="text-xl leading-none">01</div>
                </div>
                <div className="w-10 h-10 bg-slate-800 border-2 border-slate-600 flex items-center justify-center">
                    <Gamepad2 size={24} className="text-white" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;