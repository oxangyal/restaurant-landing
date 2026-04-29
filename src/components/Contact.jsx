import { CONTACT_DATA, RESTAURANT_INFO } from "../constants";
import { FaFacebook, FaTelegram, FaWhatsapp } from "react-icons/fa";

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section className="py-24 border-t border-white/5">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <h2 className="text-5xl font-bold text-white mb-10 tracking-tight">
                        {CONTACT_DATA.title}
                    </h2>
                    <div className="space-y-6 text-neutral-400 uppercase tracking-widest text-xs">
                        <p>
                            <span className="text-white font-bold">
                                {CONTACT_DATA.addressLabel}:
                            </span>{" "}
                            {RESTAURANT_INFO.address}
                        </p>
                        <p>
                            <span className="text-white font-bold">
                                {CONTACT_DATA.hoursLabel}:
                            </span>{" "}
                            {CONTACT_DATA.hoursValue}
                        </p>
                        <p>
                            <span className="text-white font-bold">
                                {CONTACT_DATA.phoneLabel}:
                            </span>{" "}
                            {RESTAURANT_INFO.phone}
                        </p>
                        <p>
                            <span className="text-white font-bold">Email:</span>{" "}
                            {RESTAURANT_INFO.email}
                        </p>
                    </div>

                    <div className="flex gap-6 mt-10 text-2xl text-white">
                        <FaFacebook className="hover:text-accent cursor-pointer transition-colors" />
                        <FaTelegram className="hover:text-accent cursor-pointer transition-colors" />
                        <FaWhatsapp className="hover:text-accent cursor-pointer transition-colors" />
                    </div>
                </div>

                <div className="flex-1 w-full h-[400px] bg-neutral-900 rounded-xl overflow-hidden border border-white/10 relative group">
                    <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/toner-v2/static/auto/800x400.png?key=YOUR_KEY')] bg-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-12 h-12 bg-accent rounded-full animate-ping opacity-20 absolute"></div>
                        <div className="w-4 h-4 bg-accent rounded-full relative shadow-[0_0_20px_rgba(235,176,27,0.8)]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
