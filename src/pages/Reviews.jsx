import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "../constants";

const Reviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) =>
                prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1,
            );
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="pt-32 pb-24 bg-slate-950 min-h-screen text-white">
            <div className="container mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-accent text-sm tracking-[0.5em] uppercase mb-4">
                        Testimonials
                    </h2>

                    <h3 className="text-4xl md:text-5xl font-serif text-white">
                        What Our Guests Say
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="wait">
                        {TESTIMONIALS_DATA.map((review, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <motion.div
                                    key={index}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{
                                        opacity: 1,
                                        scale: isActive ? 1.05 : 0.95,
                                        borderColor: isActive
                                            ? "rgba(235,176,27,0.4)"
                                            : "rgba(255,255,255,0.05)",
                                    }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className={`
                                        p-10 rounded-2xl border relative transition-all duration-500
                                        ${
                                            isActive
                                                ? "bg-accent/10 shadow-xl shadow-accent/10"
                                                : "bg-white/5"
                                        }
                                    `}
                                >
                                    <span className="absolute top-6 left-6 text-6xl text-accent/10 font-serif">
                                        “
                                    </span>

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(review.rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    size={14}
                                                    className="fill-accent text-accent"
                                                />
                                            ),
                                        )}
                                    </div>

                                    <p className="text-neutral-300 italic leading-relaxed mb-8">
                                        "{review.text}"
                                    </p>

                                    <div className="border-t border-white/10 pt-6">
                                        <h4 className="text-white font-bold tracking-widest uppercase text-xs">
                                            {review.name}
                                        </h4>
                                        <p className="text-neutral-500 text-[10px] mt-1 uppercase tracking-wider">
                                            {review.date}
                                        </p>
                                    </div>

                                    {isActive && (
                                        <span className="absolute top-4 right-4 text-[10px] text-accent uppercase tracking-[0.2em]">
                                            Featured
                                        </span>
                                    )}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                <div className="flex justify-center gap-2 mt-10">
                    {TESTIMONIALS_DATA.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                i === activeIndex
                                    ? "bg-accent w-6"
                                    : "bg-white/20"
                            }`}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 text-center p-12 border border-accent/20 rounded-3xl bg-accent/5"
                >
                    <h3 className="text-2xl font-serif text-accent mb-4">
                        Share Your Experience
                    </h3>

                    <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
                        We value every guest's feedback. Join the conversation
                        and tell us about your evening at L’AMORE.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="min-w-[200px] rounded-full bg-accent px-8 py-4 text-[11px] font-bold text-slate-950 hover:bg-white transition uppercase tracking-widest">
                            Google Reviews
                        </button>

                        <button className="min-w-[200px] rounded-full border border-white/20 bg-white/5 px-8 py-4 text-[11px] font-bold text-white hover:bg-white hover:text-black transition uppercase tracking-widest">
                            TripAdvisor
                        </button>

                        <button className="min-w-[200px] rounded-full border border-white/20 bg-white/5 px-8 py-4 text-[11px] font-bold text-white hover:bg-white hover:text-black transition uppercase tracking-widest">
                            Yelp
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;
