import { useNavigate } from 'react-router-dom'

export default function PlaceCard({ place, isFavorite, toggleFavorite }) {
    const navigate = useNavigate()
    
    const handleFavoriteClick = (e) => {
        e.stopPropagation()
        toggleFavorite(place.id)
    }

    return (
        <div className="place-card" onClick={() => navigate(`/place/${place.id}`)}>
            <div className="place-card-image-container">
                <img src={place.image} alt={place.name} className="place-card-image" />
                <button 
                    className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                    onClick={handleFavoriteClick}
                >
                    <svg fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>
            <div className="place-card-content">
                <span className="place-card-location">{place.location}</span>
                <h3 className="place-card-name">{place.name}</h3>
                <p className="place-card-description">{place.description.substring(0, 80)}...</p>
            </div>
        </div>
    )
}