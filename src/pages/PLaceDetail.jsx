import { useParams, Link } from "react-router-dom"
import places from "../data/Places"
import NavBar from "../components/NavBar"

export default function PlaceDetail({ favorites, toggleFavorite }) {
    const { id } = useParams()
    const place = places.find((place) => place.id === Number(id))

    if (!place) return <div>Place not found</div>

    const isFavorite = favorites.includes(place.id)

    return (
        <>
            <NavBar />
            <div className="detail-container">
                <Link to="/" className="back-btn">
                    ← Back to Explorations
                </Link>
                
                <div className="detail-image-container">
                    <img src={place.image} alt={place.name} className="detail-image" />
                    <button 
                        className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                        onClick={() => toggleFavorite(place.id)}
                    >
                        <svg fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>

                <div className="detail-header">
                    <div className="detail-header-left">
                        <span className="detail-location">{place.location}</span>
                        <h1>{place.name}</h1>
                    </div>
                </div>

                <p className="detail-description">{place.description}</p>

                {place.highlights && (
                    <div className="highlights-section">
                        <h3 className="highlights-title">Key Highlights</h3>
                        <ul className="highlights-list">
                            {place.highlights.map((highlight, index) => (
                                <li key={index} className="highlight-item">
                                    <span className="highlight-icon">✨</span>
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}