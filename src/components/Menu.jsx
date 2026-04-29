import { AnimatePresence, motion } from "framer-motion";

import { MENU_CATEGORIES } from "../constants";
import { useState } from "react";

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState(
        MENU_CATEGORIES[0].title,
    );

    const activeData = MENU_CATEGORIES.find(
        (cat) => cat.title === activeCategory,
    );

    return (
        <section className="py-20 bg-slate-950" id="menu">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tighter leading-[1.1] mb-10">
                    L'AMORE <span className="text-accent italic">Menu</span>
                </h2>

                <div className="relative mb-12 border-b border-white/5">
                    <div className="overflow-x-auto no-scrollbar pb-4">
                        <div className="flex gap-6 min-w-max">
                            {MENU_CATEGORIES.map((category) => (
                                <button
                                    key={category.title}
                                    onClick={() =>
                                        setActiveCategory(category.title)
                                    }
                                    className={`relative text-xs uppercase tracking-[0.2em] transition-all whitespace-nowrap pb-2 ${
                                        activeCategory === category.title
                                            ? "text-accent font-bold"
                                            : "text-neutral-500 hover:text-white"
                                    }`}
                                >
                                    {category.title}
                                    {activeCategory === category.title && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10"
                        >
                            {activeData?.items.map((item) => (
                                <motion.div
                                    key={item.name}
                                    className="group flex flex-col"
                                >
                                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg border border-white/5 bg-neutral-900">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                        />
                                    </div>

                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="text-white font-medium uppercase tracking-wider text-sm group-hover:text-accent transition-colors leading-tight">
                                            {item.name}
                                        </h4>
                                        <span className="text-accent text-sm font-bold ml-2">
                                            ${item.price}
                                        </span>
                                    </div>

                                    <p className="text-neutral-500 text-[12px] leading-snug italic line-clamp-2">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Menu;
