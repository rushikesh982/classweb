import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Slider.css";

const data = [
    {
        "img": "slider1.png",
        "title": "Slide 1"
    },
    {
        "img": "slider2.png",
        "title": "Slide 2"
    },
    {
        "img": "slider3.png",
        "title": "Slide 3"
    }
];

function Slider() {
    useEffect(() => {
        const carouselElement = document.getElementById("carouselExampleDark");
        if (carouselElement) {
            new window.bootstrap.Carousel(carouselElement, {
                interval: 3000, // Slide every 3 seconds
                ride: "carousel", // Auto-slide
                wrap: true // Loop slides
            });
        }
    }, []);

    return (
        <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
            {/* Carousel Indicators */}
            <div>
                {data.map((_, idx) => (
                    <button
                        key={idx}
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to={idx}
                        className={idx === 0 ? "active" : ""}
                        aria-current={idx === 0 ? "true" : undefined}
                        aria-label={`Slide ${idx + 1}`}
                    ></button>
                ))}
            </div>

            {/* Carousel Items */}
            <div className="carousel-inner">
                {data.map((item, idx) => (
                    <div 
                        key={idx} 
                        className={`carousel-item ${idx === 0 ? "active" : ""}`} 
                        data-bs-interval="3000"
                    >
                        <img src={process.env.PUBLIC_URL + "/" + item.img} className="d-block w-100" alt={item.title} />
                    </div>
                ))}
            </div>

            {/* Previous & Next Buttons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            </button>
        </div>
    );
}

export default Slider;
