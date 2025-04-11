import React, { useEffect, useRef, useState } from "react";
import HeroImage from "../assets/imgs/masinagorganic-removebg-preview.png";
import "../components/styles/hero.css";

function Hero({ darkMode }) {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = heroRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`hero-section ${darkMode ? "dark" : ""}`}
      id="home"
    >
      <div className="hero-content">
        <div className="hero-text">
          <h1
            className="fw-bold"
            style={{
              marginBottom: "20px",
              fontSize: "3rem",
              paddingTop: "50px",
              textShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <span style={{ color: "hsl(122, 72.40%, 17.10%)" }}>Welcome to</span>
            <br />
            Masinag Organic
          </h1>
          <p className="fs-4">
            Your trusted source for organic products. Experience the best nature has to offer!
          </p>
          <button
            className="hero-btn"
            style={{
              cursor: "pointer",
              marginTop: "50px",
              padding: "10px 20px",
              fontSize: "1rem",
              fontWeight: "bold",
              backgroundColor: "hsl(122, 72.40%, 17.10%)",
              color: "white",
              border: "20px",
              borderRadius: "25px",
            }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              const navbarHeight =
                document.querySelector(".navbar")?.offsetHeight || 80;

              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - navbarHeight - 20,
                  behavior: "smooth",
                });
              }
            }}
          >
            Contact Us
          </button>
        </div>
        <div className="hero-image">
          <img
            src={HeroImage}
            alt="Organic Products"
            className={isVisible ? "slide-in" : ""}
          />
          <p className={`image-caption ${isVisible ? "slide-in" : ""}`}>
            ORGANIC PLANT SUPPLEMENT
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
