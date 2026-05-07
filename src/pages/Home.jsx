import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Compass } from "lucide-react"
import places from "../data/Places"
import PlaceCard from "../components/PLaceCard"
import NavBar from "../components/NavBar"

function Home({ favorites, toggleFavorite, darkMode, setDarkMode }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All")

    const categories = [
        "All",
        "Beaches",
        "Mountains",
        "Cities",
        "Temples",
        "Historical",
        "Nature",
        "Culture"
    ]

    const filteredPlaces = places.filter(place => {
        const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              place.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              place.category.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || place.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            
            <header className="relative py-20 px-4 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/10 text-accent-light dark:text-accent-dark font-bold text-sm mb-6 border border-accent-light/20"
                    >
                        <Compass size={18} />
                        START YOUR ADVENTURE
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
                    >
                        Discover <span className="text-accent-light">Vietnam</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Breathtaking landscapes, vibrant culture, and unforgettable experiences await in the heart of Southeast Asia.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative max-w-lg mx-auto"
                    >
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search city, place, or category..." 
                            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl focus:ring-4 focus:ring-accent-light/10 outline-none transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-2 mt-6">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                    selectedCategory === category
                                        ? "bg-accent-light text-white"
                                        : "bg-slate-200 text-slate-600 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-accent-light/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl" />
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 pb-20 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredPlaces.length > 0 ? (
                            filteredPlaces.map((place) => (
                                <PlaceCard 
                                    key={place.id} 
                                    place={place} 
                                    isFavorite={favorites.includes(place.id)}
                                    toggleFavorite={toggleFavorite}
                                />
                            ))
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full py-20 text-center"
                            >
                                <div className="text-6xl mb-4">🏜️</div>
                                <h3 className="text-2xl font-bold text-slate-400">No hidden gems found matching "{searchTerm}"</h3>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    )
}

export default Home