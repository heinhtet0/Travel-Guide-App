import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PlaceDetail from './pages/PLaceDetail'
import Favorites from './pages/Favorites'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Routes>
        <Route path="/" element={
          <Home />
        } />
        <Route path="/place/:id" element={
          <PlaceDetail />
        } />
        <Route path="/favorites" element={
          <Favorites />
        } />
      </Routes>
    </div>
  )
}

export default App
