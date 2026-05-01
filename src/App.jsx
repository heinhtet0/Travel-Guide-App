import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PlaceDetail from './pages/PLaceDetail'
import './App.css'

function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('vietnam-favorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('vietnam-favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />} />
      <Route path="/place/:id" element={<PlaceDetail favorites={favorites} toggleFavorite={toggleFavorite} />} />
    </Routes>
  )
}

export default App
