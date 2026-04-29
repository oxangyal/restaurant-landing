import { BOOKING_PAGE_DATA } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";

const BookingPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Reservation Data:", formData);
        alert(
            `Thank you, ${formData.name}! Reservation for ${formData.guests} guests on ${formData.date} received.`,
        );
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-32 bg-slate-950 min-h-screen"
        >
            <div className="container mx-auto px-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
                    <div className="flex-1 w-full">
                        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1723795269148-709608f0584e?q=80&w=1214&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Fine Dining Experience"
                                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>

                    <div className="flex-1 w-full space-y-10 text-left">
                        {/* Заголовки */}
                        <div className="space-y-3">
                            <h2 className="text-5xl font-bold text-white tracking-tighter uppercase italic">
                                {BOOKING_PAGE_DATA.title}
                            </h2>
                            <p className="text-neutral-500 text-xs tracking-widest uppercase font-light">
                                {BOOKING_PAGE_DATA.subtitle}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-[0.2em] text-white font-bold">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full bg-transparent border border-white/20 rounded-full px-6 py-4 text-white focus:border-accent outline-none transition-all duration-300 placeholder:text-neutral-700"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-[0.2em] text-white font-bold">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+1 (___) ___ __ __"
                                    className="w-full bg-transparent border border-white/20 rounded-full px-6 py-4 text-white focus:border-accent outline-none transition-all duration-300 placeholder:text-neutral-700 tabular-nums"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            phone: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>

                            {/* Date & Time */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-[0.2em] text-white font-bold">
                                        Desired Date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full bg-transparent border border-white/20 rounded-full px-6 py-4 text-white focus:border-accent outline-none transition-all duration-300 placeholder:text-neutral-700"
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                date: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs uppercase tracking-[0.2em] text-white font-bold">
                                        Preferred Time
                                    </label>
                                    <input
                                        type="time"
                                        className="w-full bg-transparent border border-white/20 rounded-full px-6 py-4 text-white focus:border-accent outline-none transition-all duration-300 placeholder:text-neutral-700"
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                time: e.target.value,
                                            })
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            {/* Guests */}
                            <div className="flex flex-col gap-2">
                                <label className="text-xs uppercase tracking-[0.2em] text-white font-bold">
                                    Number of Guests
                                </label>
                                <input
                                    type="number"
                                    placeholder="Guests count"
                                    min="1"
                                    className="w-full bg-transparent border border-white/20 rounded-full px-6 py-4 text-white focus:border-accent outline-none transition-all duration-300 placeholder:text-neutral-700"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            guests: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent hover:bg-white text-slate-950 font-bold py-5 rounded-full transition-all duration-300 active:scale-95 uppercase tracking-[0.2em] text-xs shadow-2xl shadow-accent/20"
                            >
                                {BOOKING_PAGE_DATA.submitButton}
                            </button>

                            <p className="text-[10px] text-neutral-600 text-center uppercase tracking-tight leading-relaxed max-w-sm mx-auto">
                                {BOOKING_PAGE_DATA.disclaimer}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default BookingPage;
