import Carousel from "../components/Carousel";
import Categorybar from "../components/Categorybar";
import Movies from "../components/MovieList";
import Navbar from "../components/Navbar";
import { MovieProvider } from "../contexts/MovieContext";

export default function Home(){
    return (
        <MovieProvider>
            <Navbar/>
            <Categorybar/>
            <Carousel/>
            <Movies/>
        </MovieProvider>
    );
}