import { Link, useLocation } from "react-router-dom";

import { motion } from "framer-motion";

const MobileReserveBar = () => {
    const location = useLocation();

    if (location.pathname === "/book") return null;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
            className="fixed bottom-0 left-0 right-0 z-[70] md:hidden px-6 pb-5 pt-2 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent"
        >
            <Link to="/book" className="block">
                <button className="w-full rounded-full bg-accent py-3 text-[10px] font-bold text-slate-950 uppercase tracking-widest shadow-lg shadow-accent/20 active:scale-95 transition-all duration-200">
                    Reserve a Table
                </button>
            </Link>
        </motion.div>
    );
};

export default MobileReserveBar;
