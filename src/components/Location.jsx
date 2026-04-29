import { CONTACT_DATA, RESTAURANT_INFO } from "../constants";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa";

import { motion } from "framer-motion";

const Location = () => {
    return (
        <section className="py-24 bg-slate-950">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                            {CONTACT_DATA.title}
                        </h2>

                        <div className="space-y-6 text-sm uppercase tracking-[0.2em]">
                            <p className="flex flex-col">
                                <span className="text-white font-bold mb-1">
                                    {CONTACT_DATA.addressLabel}:
                                </span>
                                <span className="text-neutral-500">
                                    {RESTAURANT_INFO.address}
                                </span>
                            </p>
                            <p className="flex flex-col">
                                <span className="text-white font-bold mb-1">
                                    {CONTACT_DATA.hoursLabel}:
                                </span>
                                <span className="text-neutral-500">
                                    {CONTACT_DATA.hoursValue}
                                </span>
                            </p>
                            <p className="flex flex-col">
                                <span className="text-white font-bold mb-1">
                                    {CONTACT_DATA.phoneLabel}:
                                </span>
                                <span className="text-neutral-500">
                                    {RESTAURANT_INFO.phone}
                                </span>
                            </p>
                        </div>
                        <div className="flex gap-6 text-2xl text-white pt-4">
                            <motion.a
                                whileHover={{ scale: 1.2, color: "#EBB01B" }}
                                href="#"
                            >
                                <FaFacebook />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2, color: "#EBB01B" }}
                                href="#"
                            >
                                <FaTelegram />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2, color: "#EBB01B" }}
                                href="#"
                            >
                                <FaWhatsapp />
                            </motion.a>
                        </div>

                        <motion.a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANT_INFO.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-white text-xs uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-white hover:text-slate-950"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                <circle cx="12" cy="9" r="2.5" />
                            </svg>
                            Open in Maps
                        </motion.a>
                    </div>

                    <div className="flex-1 w-full h-[450px] relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                        <iframe
                            title="Restaurant Location"
                            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d571211.8519104852!2d-72.00391718521955!3d42.44447993976689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d42.458624199999996!2d-71.436685!4m5!1s0x89e3708444907fe9%3A0xa5daa363abf6929e!2s123%20Washington%20St%2C%20Boston%2C%20MA%2002111!3m2!1d42.3586202!2d-71.05784059999999!5e0!3m2!1sru!2sus!4v1777470385230!5m2!1sru!2sus"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                filter: "grayscale(1) invert(1) hue-rotate(180deg)",
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
