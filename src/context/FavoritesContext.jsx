import { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        )
    }, [favorites]);

    const toggleFavorite = (id) => {
        setFavorites((prev) => 
            prev.includes(id)
                ? prev.filter((favId) => favId !== id)
                : [...prev, id]
        );
    }

    return (
        <FavoritesContext.Provider 
            value={{ favorites, toggleFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};
