import { Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "../constants";
import { motion } from "framer-motion";

const Reviews = () => {
    return (
        <section className="pt-32 pb-24 bg-slate-950 min-h-screen text-white">
            <div className="container mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-accent text-sm tracking-[0.5em] uppercase mb-4">
                        Testimonials
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {TESTIMONIALS_DATA.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 rounded-2xl bg-white/5 border border-white/5 relative group hover:border-accent/30 transition-all duration-500"
                        >
                            <span className="absolute top-6 left-6 text-6xl text-accent/10 font-serif group-hover:text-accent/20 transition-colors">
                                “
                            </span>

                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className="fill-accent text-accent"
                                    />
                                ))}
                            </div>

                            <p className="text-neutral-300 italic leading-relaxed mb-8 relative z-10">
                                "{review.text}"
                            </p>

                            <div className="border-t border-white/10 pt-6">
                                <h4 className="text-white font-bold tracking-widest uppercase text-xs">
                                    {review.name}
                                </h4>
                                <p className="text-neutral-500 text-[10px] mt-1 uppercase tracking-tighter">
                                    {review.date}
                                </p>
                            </div>
                        </motion.div>
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
                    <div className="flex justify-center gap-8">
                        <button className="text-[10px] font-bold tracking-[0.2em] uppercase border-b border-accent pb-1 hover:text-accent transition-colors">
                            Google Reviews
                        </button>
                        <button className="text-[10px] font-bold tracking-[0.2em] uppercase border-b border-accent pb-1 hover:text-accent transition-colors">
                            TripAdvisor
                        </button>
                        <button className="text-[10px] font-bold tracking-[0.2em] uppercase border-b border-accent pb-1 hover:text-accent transition-colors">
                            Yelp
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Reviews;
