import { RESTAURANT_INFO } from "../constants";

const Footer = () => {
    return (
        <footer className="border-t border-white/5 py-12 mt-20">
            <div className="container mx-auto px-8 grid md:grid-cols-3 gap-12 text-center md:text-left">
                <div>
                    <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                        Visit Us
                    </h4>

                    <p className="text-neutral-500 text-xs leading-relaxed uppercase tracking-tighter">
                        {RESTAURANT_INFO.address}
                    </p>
                </div>

                <div>
                    <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                        Contact
                    </h4>

                    <p className="text-neutral-500 text-xs uppercase tracking-tighter">
                        {RESTAURANT_INFO.phone}
                    </p>

                    <p className="text-neutral-500 text-xs uppercase tracking-tighter">
                        {RESTAURANT_INFO.email}
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end">
                    <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                        Experience
                    </h4>

                    <p className="text-neutral-600 text-[9px] uppercase tracking-[0.2em]">
                        © 2026 {RESTAURANT_INFO.name}. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
