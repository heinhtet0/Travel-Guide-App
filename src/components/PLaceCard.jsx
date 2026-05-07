import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Heart } from 'lucide-react'
import { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'

export default function PlaceCard({ place }) {
    const navigate = useNavigate()
    const { favorites, toggleFavorite } = useContext(FavoritesContext)
    const isFavorite = favorites.includes(place.id)
    
    const handleFavoriteClick = (e) => {
        e.stopPropagation()
        toggleFavorite(place.id)
    }

    return (
        <motion.div 
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
            onClick={() => navigate(`/place/${place.id}`)}
        >
            <div className="relative h-64 overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img 
                    src={place.image} 
                    alt={place.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1518173946687-a4c8a9b749f5?q=80&w=800&auto=format&fit=crop";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                
                <button 
                    className={`absolute top-4 right-4 p-2.5 rounded-2xl backdrop-blur-md transition-all duration-300 ${
                        isFavorite 
                        ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/40' 
                        : 'bg-white/30 text-white hover:bg-white/50'
                    }`}
                    onClick={handleFavoriteClick}
                >
                    <Heart size={20} fill={isFavorite ? "currentColor" : "none"} />
                </button>

                <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-1.5 text-white/90 text-sm font-medium mb-1">
                        <MapPin size={14} className="text-accent-dark" />
                        {place.location}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">{place.name}</h3>
                </div>
            </div>

            <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {place.category}
                    </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {place.description}
                </p>
            </div>
        </motion.div>
    )
}