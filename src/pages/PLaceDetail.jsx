import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Heart, MapPin, Sparkles, Share2 } from "lucide-react"
import places from "../data/Places"
import NavBar from "../components/NavBar"
import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"

export default function PlaceDetail({ darkMode, setDarkMode }) {
    const { id } = useParams()
    const place = places.find((place) => place.id === Number(id))
    const { favorites , toggleFavorite } = useContext(FavoritesContext)

    if (!place) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Destination Unknown</h1>
                <Link to="/" className="text-accent-light hover:underline">Back to Safety</Link>
            </div>
        </div>
    )

    const isFavorite = favorites.includes(place.id)

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
            
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-accent-light transition-colors mb-8 group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Explore
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Image Section */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative group"
                        >
                            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800">
                                <img 
                                    src={place.image} 
                                    alt={place.name} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://images.unsplash.com/photo-1518173946687-a4c8a9b749f5?q=80&w=800&auto=format&fit=crop";
                                    }}
                                />
                            </div>
                            
                            <div className="absolute top-6 right-6 flex flex-col gap-3">
                                <button 
                                    onClick={() => toggleFavorite(place.id)}
                                    className={`p-4 rounded-2xl backdrop-blur-md transition-all duration-300 shadow-xl ${
                                        isFavorite 
                                        ? 'bg-rose-500 text-white shadow-rose-500/40' 
                                        : 'bg-white/90 dark:bg-slate-800/90 text-slate-400 hover:text-rose-500'
                                    }`}
                                >
                                    <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
                                </button>
                                <button className="p-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 text-slate-400 hover:text-accent-light backdrop-blur-md shadow-xl transition-all">
                                    <Share2 size={24} />
                                </button>
                            </div>
                        </motion.div>

                        {/* Content Section */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-col"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light/10 text-accent-light dark:text-accent-dark font-bold text-xs mb-6 w-fit border border-accent-light/20">
                                <MapPin size={14} />
                                {place.location}
                            </div>
                            
                            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                {place.name}
                            </h1>
                            
                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed italic">
                                {place.description.split('.')[0]}.
                            </p>

                            <div className="prose prose-slate dark:prose-invert max-w-none mb-12 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                {place.description}
                            </div>

                            {place.highlights && (
                                <div className="p-8 rounded-[2rem] bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 text-accent-light/10 dark:text-accent-dark/5">
                                        <Sparkles size={120} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                        <Sparkles className="text-accent-light" size={24} />
                                        Key Highlights
                                    </h3>
                                    <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                                        {place.highlights.map((highlight, index) => (
                                            <div 
                                                key={index} 
                                                className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 shadow-sm"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-accent-light" />
                                                <span className="font-semibold text-slate-800 dark:text-slate-200">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </main>

            <footer className="py-12 border-t border-slate-200 dark:border-slate-800 mt-20">
                <div className="max-w-7xl mx-auto px-4 text-center text-slate-500">
                    <p>© 2026 Vietnam Travel Guide. Handcrafted with ✨</p>
                </div>
            </footer>
        </div>
    )
}