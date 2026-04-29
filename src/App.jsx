import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About";
import Atmosphere from "./pages/Atmosphere";
import BookingPage from "./pages/BookingPage";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Reviews from "./pages/Reviews";

function App() {
    return (
        <Router>
            <div className="relative min-h-screen bg-slate-950 text-neutral-300">
                <Navbar />
                <main>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Hero />
                                    <Menu />
                                    <Location />
                                </>
                            }
                        />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/atmosphere" element={<Atmosphere />} />
                        <Route path="/reviews" element={<Reviews />} />
                        <Route path="/location" element={<Location />} />
                        <Route path="/book" element={<BookingPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
