import { motion } from "motion/react"
import PixelFrame from "./PixelFrame";
import PixelButton from "./PixelButton";

function Contact() {
    return (
        <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h1
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-4">
                    Contact Me
                </motion.h1>
                <div className="grid">
                    <div>
                        <PixelFrame title="Contact_Protocol">
                            <form 
                                className="space-y-4"
                                onSubmit={(e) => {
                                    e.preventDefault();

                                    const form = e.currentTarget;
                                    const name = form.codename.value;
                                    const message = form.message.value;

                                    window.location.href = `mailto:iampty666@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}`
                                }
                                }>
                            <div>
                                <label className="block text-[10px] text-slate-500 uppercase font-bold mb-1">Codename</label>
                                <input name="codename" type="text" className="w-full bg-slate-900 border-2 border-slate-700 text-white p-2 focus:border-yellow-500 outline-none font-mono" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-500 uppercase font-bold mb-1">Message</label>
                                <textarea name="message" rows={4} className="w-full bg-slate-900 border-2 border-slate-700 text-white p-2 focus:border-yellow-500 outline-none font-mono mb-4" />
                            </div>
                            <PixelButton className="w-full">
                                Send
                            </PixelButton>
                            </form>
                        </PixelFrame>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;