import { createContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

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
        setFavorites((prev) => {
            const isFavorite = prev.includes(id);

            if(isFavorite){
                toast.error("Removed from favorites 💔");
                return prev.filter((favId) => favId !== id);
            } else {
                toast.success("Added to favorites ❤️");
                return [...prev, id];
            }
        }
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
