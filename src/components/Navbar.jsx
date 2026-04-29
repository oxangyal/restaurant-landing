import { Link, useNavigate } from "react-router-dom";
import { NAV_LINKS, RESTAURANT_INFO } from "../constants";

import logo from "../assets/restaurant-logo.png";

const Navbar = () => {
    const navigate = useNavigate();

return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-6 px-10 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
            {logo ? (
                <img
                    src={logo}
                    alt={RESTAURANT_INFO.name}
                    className="h-8 w-auto object-contain md:h-10 transition-opacity hover:opacity-80"
                />
            ) : (
                <h1 className="text-xl font-bold tracking-tighter text-white uppercase italic">
                    {RESTAURANT_INFO.name}
                </h1>
            )}
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

        <button
            onClick={() => navigate("/book")}
            className="rounded-full border border-accent/50 px-6 py-2 text-[10px] font-bold text-accent hover:bg-accent hover:text-black transition-all"
        >
            RESERVE
        </button>
    </nav>
);
};

export default Navbar;
