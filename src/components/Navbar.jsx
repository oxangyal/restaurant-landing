import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { NAV_LINKS, RESTAURANT_INFO } from "../constants";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import logo from "../assets/lamore-logo.png";
import { useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between py-6 px-8 md:px-10 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
                <div
                    className="cursor-pointer"
                    onClick={() => {
                        setIsOpen(false);
                        navigate("/");
                    }}
                >
                    <img
                        src={logo}
                        alt={RESTAURANT_INFO.name}
                        className="h-8 w-auto md:h-10"
                    />
                </div>

                <div className="hidden md:flex items-center gap-10 text-[10px] font-bold tracking-[0.3em] uppercase">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.id}
                            to={link.path}
                            className="text-neutral-400 hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => navigate("/book")}
                        className="hidden sm:block rounded-full border border-accent/50 px-6 py-2 text-[10px] font-bold text-accent hover:bg-accent hover:text-black transition-all"
                    >
                        RESERVE
                    </button>

                    <button
                        className="md:hidden text-white text-xl"
                        onClick={toggleMenu}
                    >
                        {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                    </button>
                </div>
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[55] bg-slate-950 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.id}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-xl font-bold text-white uppercase tracking-widest hover:text-accent transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                navigate("/book");
                            }}
                            className="mt-4 rounded-full border border-accent px-10 py-4 text-sm font-bold text-accent"
                        >
                            RESERVE A TABLE
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
