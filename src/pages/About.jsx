import chef from "../assets/chef.png";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="pt-32 pb-24 bg-slate-950 text-white min-h-screen">
            <div className="container mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-accent text-sm tracking-[0.5em] uppercase mb-4">
                        Our Heritage
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-serif tracking-tighter">
                        THE ART OF ITALIAN CUISINE
                    </h1>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000"
                            alt="Restaurant Interior"
                            className="rounded-2xl shadow-2xl border border-white/5"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-serif text-accent">
                            A Legacy of Passion
                        </h3>
                        <p className="text-neutral-400 leading-relaxed italic">
                            "L'AMORE was born from a simple dream: to bring the
                            authentic soul of Italy to the heart of Boston.
                            Every ingredient is sourced with care, and every
                            recipe tells a story of tradition."
                        </p>
                        <p className="text-neutral-400 leading-relaxed">
                            Founded in 2018, we have become a sanctuary for
                            those who appreciate the finer things in life. Our
                            dining room is designed to evoke the elegance of a
                            Roman villa, combined with modern luxury.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="md:order-2"
                    >
                        <img
                            src={chef}
                            alt="Executive Chef"
                            className="rounded-2xl shadow-2xl border border-white/5"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-6 md:order-1"
                    >
                        <h3 className="text-3xl font-serif text-accent">
                            Meet Our Executive Chef
                        </h3>
                        <h4 className="text-xl font-bold tracking-widest text-white uppercase">
                            Marco Valenti
                        </h4>
                        <p className="text-neutral-400 leading-relaxed">
                            With over 15 years of experience in Michelin-starred
                            kitchens across Tuscany and Milan, Chef Marco brings
                            a precise, artistic touch to classical Italian
                            flavors.
                        </p>
                        <div className="pt-4 border-t border-white/10 italic text-accent/80">
                            "Cooking is an act of love. At L'AMORE, we don't
                            just serve food; we create memories that linger long
                            after the last bite."
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
