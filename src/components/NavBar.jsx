import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    🇻🇳 Vietnam Guide
                </Link>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">Home</Link>
                    <a href="#" className="navbar-link">Destinations</a>
                    <a href="#" className="navbar-link">About</a>
                </div>
            </div>
        </nav>
    )
}
