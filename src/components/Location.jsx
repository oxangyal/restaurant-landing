import { CONTACT_DATA, RESTAURANT_INFO } from "../constants";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa";

import { motion } from "framer-motion";

const Location = () => {
    return (
        <section className="py-24 bg-slate-950">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tighter">
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

                        <div className="flex pt-6">
                            <motion.a
                                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                                    RESTAURANT_INFO.address,
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="min-w-[220px] rounded-full bg-accent px-10 py-4 text-[11px] font-bold text-slate-950 hover:bg-white transition-all duration-300 uppercase tracking-widest shadow-xl shadow-accent/20"
                            >
                                <div className="flex items-center justify-center gap-2">
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
                                </div>
                            </motion.a>
                        </div>
                    </div>

                    <div className="flex-1 w-full h-[450px] relative rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                        <iframe
                            title="Restaurant Location"
                            src={`https://www.google.com/maps?q=${encodeURIComponent(
                                RESTAURANT_INFO.address,
                            )}&output=embed`}
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                filter: "grayscale(1) invert(1) hue-rotate(180deg)",
                            }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
