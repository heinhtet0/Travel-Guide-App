import { motion, AnimatePresence } from "framer-motion"
import { Heart, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import places from "../data/Places"
import PlaceCard from "../components/PLaceCard"
import NavBar from "../components/NavBar"
import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesContext"

export default function Favorites() {
    const { favorites } = useContext(FavoritesContext)
    const favoritePlaces = places.filter(place => favorites.includes(place.id))

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            
            <header className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-accent-light transition-colors mb-8 group">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Explore
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-rose-500/10 text-rose-500">
                            <Heart size={32} fill="currentColor" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-black">My Favorites</h1>
                            <p className="text-slate-500 dark:text-slate-400">
                                {favoritePlaces.length} {favoritePlaces.length === 1 ? 'destination' : 'destinations'} saved
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 pb-20 w-full flex-grow">
                {favoritePlaces.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        <AnimatePresence mode="popLayout">
                            {favoritePlaces.map((place) => (
                                <PlaceCard 
                                    key={place.id} 
                                    place={place}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center py-32 text-center"
                    >
                        <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-4xl mb-6">
                            💝
                        </div>
                        <h2 className="text-2xl font-bold mb-2">No favorites yet</h2>
                        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm">
                            Explore Vietnam and click the heart icon to save the places you'd love to visit.
                        </p>
                        <Link 
                            to="/" 
                            className="px-8 py-3 rounded-2xl bg-accent-light text-white font-bold hover:bg-accent-hover transition-colors shadow-lg shadow-accent-light/30"
                        >
                            Start Exploring
                        </Link>
                    </motion.div>
                )}
            </main>
        </div>
    )
}
