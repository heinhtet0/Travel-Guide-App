import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PlaceDetail from './pages/PLaceDetail'
import Favorites from './pages/Favorites'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('vietnam-favorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  useEffect(() => {
    localStorage.setItem('vietnam-favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Routes>
        <Route path="/" element={
          <Home favorites={favorites} toggleFavorite={toggleFavorite} darkMode={darkMode} setDarkMode={setDarkMode} />
        } />
        <Route path="/place/:id" element={
          <PlaceDetail favorites={favorites} toggleFavorite={toggleFavorite} darkMode={darkMode} setDarkMode={setDarkMode} />
        } />
        <Route path="/favorites" element={
          <Favorites favorites={favorites} toggleFavorite={toggleFavorite} darkMode={darkMode} setDarkMode={setDarkMode} />
        } />
      </Routes>
    </div>
  )
}

export default App
