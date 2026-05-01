import { useState } from "react"
import places from "../data/Places"
import PlaceCard from "../components/PLaceCard"
import NavBar from "../components/NavBar"

function Home({ favorites, toggleFavorite }) {
    const [searchTerm, setSearchTerm] = useState("")

    const filteredPlaces = places.filter(place => 
        place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        place.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        place.category.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
            <NavBar />
            <section className="hero">
                <h1>Explore the Beauty of Vietnam</h1>
                <p>Discover breathtaking landscapes, vibrant culture, and unforgettable experiences in the heart of Southeast Asia.</p>
                <div className="search-container">
                    <span className="search-icon">🔍</span>
                    <input 
                        type="text" 
                        placeholder="Search by city, place or category..." 
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </section>
            <main className="main-container">
                <div className="places-grid">
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
                        <div style={{ gridColumn: '1/-1', padding: '4rem', opacity: 0.5 }}>
                            <h3>No places found matching "{searchTerm}"</h3>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}

export default Home