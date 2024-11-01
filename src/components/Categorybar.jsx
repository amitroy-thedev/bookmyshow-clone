import { useMovie } from "../contexts/MovieContext";
import "../styles/Categorybar.css";

export default function Categorybar() {
    const { setCategory } = useMovie();
    const mainCategories = [
        { label: "Movies", type: "movie" },
        { label: "Series", type: "series" },
        { label: "Episodes", type: "episode" }, // Omdb is not providing anything for episode category
        { label: "Plays", type: "plays" }, // Will return no result
        { label: "Sports", type: "sports" }, // Will return no result
        { label: "Activities", type: "activities" } // Will return no result
    ];
    const links = [
        {label: "ListYourShow"},
        {label: "Corporates"},
        {label: "Offers"},
        {label: "Gift Cards"}
    ];
    return (
        <div className="category-bar">
            <div className="categories">
                <div className="links">
                    {mainCategories.map((category) => (
                        <button
                            key={category.type}
                            onClick={() => setCategory(category.type)}
                            className="link">
                            {category.label}
                        </button>
                    ))}
                </div>
                <div className="links">
                    {links.map((link) => (
                        <a href="/">{link.label}</a>
                    ))}
                </div>

            </div>
        </div>
    );
}