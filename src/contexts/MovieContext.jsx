// MovieContext.js
import { createContext, useState, useContext, useEffect } from 'react';

const MovieContext = createContext();

export const useMovie = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('India');
    const [category, setCategory] = useState('movie');
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            try {
                const term = searchTerm.trim() || 'India';  // Setting a default search term as India as no term giving error
                const response = await fetch(`https://www.omdbapi.com/?apikey=bc571624&type=${category}&s=${term}`);
                const data = await response.json();
                if (data.Response === 'True') {
                    setMovies(data.Search);
                } else {
                    setMovies([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setIsLoading(false);
        };
        fetchMovies();
    }, [searchTerm, category]);

    return (
        <MovieContext.Provider value={{ movies, searchTerm, setSearchTerm, category, setCategory, isLoading}}>
            {children}
        </MovieContext.Provider>
    );
};
