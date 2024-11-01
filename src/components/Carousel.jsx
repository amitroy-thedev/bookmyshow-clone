import React, { useEffect, useState } from 'react';
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";
import slide7 from "../assets/slide7.jpg";
import sliderArrow from "../assets/sliderArrow.svg";
import "../styles/Carousel.css";

export default function Carousel() {
    const desktopSlides = [slide1, slide2, slide3, slide4]; //In bookmyshow site the slider images are different in size when in Desktop and different when in Mobile
    const mobileSlides = [slide5, slide6, slide7];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slides, setSlides] = useState(desktopSlides);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };
    
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    };
    
    useEffect(() => {
        const updateSlides = () => {
            if (window.innerWidth <= 720) {
                setSlides(mobileSlides);
            } else {
                setSlides(desktopSlides);
            }
        };
        updateSlides();
        window.addEventListener("resize", updateSlides);

        return () => window.removeEventListener("resize", updateSlides);
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex, slides]);

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel-button left"><img src={sliderArrow} alt="left" /></button>
            <div className="carousel-slide">
                <img src={slides[currentIndex]} alt="slide" />
            </div>
            <button onClick={nextSlide} className="carousel-button right"><img src={sliderArrow} alt="right" /></button>
            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
