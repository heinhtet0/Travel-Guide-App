import { Link } from 'react-router-dom'
import { Sun, Moon, Heart, Map } from 'lucide-react'
import { motion } from 'framer-motion'

export default function NavBar({ darkMode, setDarkMode }) {
    return (
        <nav className="sticky top-0 z-50 glass h-16 flex items-center">
            <div className="max-w-7xl mx-auto px-4 w-full flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <motion.div
                        whileHover={{ rotate: 10 }}
                        className="bg-accent-light dark:bg-accent-dark p-1.5 rounded-lg text-white"
                    >
                        <Map size={24} />
                    </motion.div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                        Vietnam Guide
                    </span>
                </Link>

                <div className="flex items-center gap-4 md:gap-8">
                    <Link to="/" className="hidden md:block font-medium hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                        Explore
                    </Link>
                    <Link to="/favorites" className="flex items-center gap-1.5 font-medium hover:text-accent-light dark:hover:text-accent-dark transition-colors">
                        <Heart size={20} className="text-rose-500" />
                        <span className="hidden sm:inline">Favorites</span>
                    </Link>
                    
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-400"
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    )
}
