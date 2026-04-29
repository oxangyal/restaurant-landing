import int01 from "../assets/interior01.png";
import int02 from "../assets/interior02.png";
import int03 from "../assets/interior03.png";
import int04 from "../assets/interior03.png";
import { motion } from "framer-motion";
import { useRef } from "react";

const GALLERY_IMAGES = [
    { src: int01, title: "Grand Dining Hall" },
    { src: int02, title: "The Private Lounge" },
    { src: int03, title: "Patio" },
    { src: int04, title: "Bar" },
];

const Gallery = () => {
    const scrollRef = useRef(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const onMouseDown = (e) => {
        isDown.current = true;
        scrollRef.current.style.cursor = "grabbing";
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const onMouseMove = (e) => {
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const onMouseUp = () => {
        isDown.current = false;
        scrollRef.current.style.cursor = "grab";
    };

    return (
        <section className="pt-32 pb-24 bg-slate-950 min-h-screen">
            <div className="px-10 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-accent text-xs tracking-[0.6em] uppercase mb-4"
                >
                    Atmosphere
                </motion.h2>

                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-serif text-white tracking-tighter"
                >
                    Interior
                </motion.h3>
            </div>

            <div className="w-full overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 px-10 pb-12 w-full"
                    style={{
                        WebkitOverflowScrolling: "touch",
                        scrollSnapType: "x mandatory",
                        cursor: "grab",
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                    }}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                >
                    {GALLERY_IMAGES.map((img, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-[80vw] md:w-[600px]"
                            style={{ scrollSnapAlign: "start" }}
                        >
                            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-full object-cover pointer-events-none select-none"
                                    draggable={false}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <p className="text-white text-[10px] tracking-[0.3em] uppercase opacity-70">
                                        {img.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div
                        className="flex-shrink-0 w-10 h-1"
                        aria-hidden="true"
                    />
                </div>

                <div className="px-10 max-w-4xl">
                    <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                        <motion.div
                            animate={{ x: ["0%", "100%", "0%"] }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="absolute top-0 left-0 h-full w-20 bg-accent"
                        />
                    </div>
                    <p className="text-[9px] uppercase tracking-widest text-neutral-600 mt-4">
                        Swipe to explore the restaurant interior
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
