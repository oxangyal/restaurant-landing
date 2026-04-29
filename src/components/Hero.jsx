import { HERO_TEXT } from "../constants";
import { Link } from "react-router-dom";
import landingImg from "../assets/hero.png";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={landingImg}
                    alt="Elegant dining setting with soft lighting"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/40 to-black/20"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative z-10 px-4 mt-10"
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-[11px] md:text-sm tracking-[0.6em] font-medium text-neutral-400 uppercase mb-4"
                >
                    {HERO_TEXT.subtitle}
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, filter: "brightness(0.5)" }}
                    animate={{ opacity: 1, filter: "brightness(1)" }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="mb-6 text-5xl md:text-7xl lg:text-8xl font-serif text-accent tracking-tighter font-light uppercase"
                >
                    L'AMORE
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-[11px] md:text-sm tracking-[0.4em] font-light text-neutral-400 uppercase mb-4"
                >
                    Exquisite taste with unique presentation
                </motion.p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Link to="/book">
                        <button className="min-w-[220px] rounded-full bg-accent px-10 py-4 text-[11px] font-bold text-slate-950 hover:bg-white transition-all duration-300 uppercase tracking-widest shadow-xl shadow-accent/20">
                            Reserve a Table
                        </button>
                    </Link>

                    <Link to="/menu">
                        <button className="min-w-[220px] rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-10 py-4 text-[11px] font-bold text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest">
                            Our Menu
                        </button>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
