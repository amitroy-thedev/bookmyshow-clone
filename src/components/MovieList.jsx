import "../styles/MovieList.css";
import { useMovie } from '../contexts/MovieContext';
import Loading from "./Loading";

export default function MovieList() {
    const { searchTerm, movies, isLoading } = useMovie();

    return (
        <div className='movies'>
            <h2>Recommended Movies</h2>
            <div className="movie-list">
                {isLoading ? (
                    <Loading />
                ) : (
                    movies.length === 0 ? (
                        <p>No results found</p>
                    ) : (
                        movies
                            .filter(movie => movie.Poster !== "N/A") // Exclude movies without posters
                            .filter(movie => movie.Title.toLowerCase().includes(searchTerm.toLowerCase()))
                            .slice(0, 5)
                            .map(movie => (
                                <div key={movie.imdbID} className="movie-card">
                                    <img src={movie.Poster} alt={movie.Title} />
                                    <h3>{movie.Title}</h3>
                                    <p>{movie.Year}</p>
                                </div>
                            ))
                    )
                )}
            </div>
        </div>
    );
}
